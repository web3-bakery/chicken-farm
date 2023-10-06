import { Contract, ethers, providers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

import CHICKEN_DAO_CONTRACT from "../contracts/ChickenDAO.json";
import CHICKEN_NFT_CONTRACT from "../contracts/ChickenNFT.json";

import { hooks, metaMask } from "../components/web3/connectors/metaMask";
import KPI from "../components/KPI";
import Base from "../layouts/Base";
import {
  Container,
  Typography,
  Grid,
  Button,
  CircularProgress,
  Card,
  Box,
  Input,
} from "@mui/material";
import CreateProposal from "../components/DAO/CreateProposal";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function Home() {
  // ETH Balance of the DAO contract
  const [treasuryBalance, setTreasuryBalance] = useState("0");
  // Number of proposals created in the DAO
  const [numProposals, setNumProposals] = useState("0");
  // Array of all proposals created in the DAO
  const [proposals, setProposals] = useState<any>([]);
  // User's balance of CryptoDevs NFTs
  const [nftBalance, setNftBalance] = useState(0);

  // One of "Create Proposal" or "View Proposals"
  const [selectedTab, setSelectedTab] = useState("");
  // True if waiting for a transaction to be mined, false otherwise.
  const [loading, setLoading] = useState(false);

  const accounts = useAccounts();
  const [account, setAccount] = useState("");
  const provider = useProvider();

  const isActive = useIsActive();
  console.log("isActive", isActive);
  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    }
  }, [isActive, accounts]);

  useEffect(() => {
    if (account) {
      getDAOTreasuryBalance();
      getUserNFTBalance();
      getNumProposalsInDAO();
    }
  }, [account]);

  // Reads the ETH balance of the DAO contract and sets the `treasuryBalance` state variable
  const getDAOTreasuryBalance = async () => {
    if (!provider) return;
    try {
      const balance = await provider.getBalance(CHICKEN_DAO_CONTRACT.address);
      setTreasuryBalance(balance.toString());
    } catch (error) {
      console.error(error);
    }
  };

  // Reads the number of proposals in the DAO contract and sets the `numProposals` state variable
  const getNumProposalsInDAO = async () => {
    if (!provider) return;
    try {
      const contract = getDaoContractInstance(provider);
      const daoNumProposals = await contract?.numProposals();
      setNumProposals(daoNumProposals.toString());
    } catch (error) {
      console.error(error);
    }
  };

  // Reads the balance of the user's CryptoDevs NFTs and sets the `nftBalance` state variable
  const getUserNFTBalance = async () => {
    if (!provider) return;
    const signer = await provider.getSigner();
    try {
      const nftContract = getChickenNFTContractInstance();
      console.log("nftContract", nftContract);

      const balance = await nftContract.balanceOf(account);
      console.log("balance", balance);
      setNftBalance(parseInt(balance.toString()));
    } catch (error) {
      console.error(error);
    }
  };

  // Helper function to fetch and parse one proposal from the DAO contract
  // Given the Proposal ID
  // and converts the returned data into a Javascript object with values we can use
  const fetchProposalById = async (id: any) => {
    console.log("fetchProposalById", id);
    if (!provider) return;

    try {
      const daoContract = getDaoContractInstance(provider);
      const proposal = await daoContract?.proposals(id);
      const parsedProposal = {
        proposalId: id,
        deadline: new Date(parseInt(proposal.deadline.toString()) * 1000),
        yayVotes: proposal.yayVotes.toString(),
        nayVotes: proposal.nayVotes.toString(),
        executed: proposal.executed,
        recipient: proposal.recipient,
        amount: formatEther(proposal.amount),
        url: proposal.url,
        title: proposal.title,
      };
      return parsedProposal;
    } catch (error) {
      console.error(error);
    }
  };

  // Runs a loop `numProposals` times to fetch all proposals in the DAO
  // and sets the `proposals` state variable
  const fetchAllProposals = async () => {
    try {
      const proposals = [];
      for (let i = 0; i < Number(numProposals); i++) {
        const proposal = await fetchProposalById(i);
        console.log("proposal", proposal);
        proposals.push(proposal);
      }
      setProposals(proposals.reverse());
      return proposals;
    } catch (error) {
      console.error(error);
    }
  };

  // Calls the `voteOnProposal` function in the contract, using the passed
  // proposal ID and Vote
  const voteOnProposal = async (proposalId: any, _vote: any) => {
    if (!provider) return;
    const signer = await provider.getSigner();

    try {
      const daoContract = getDaoContractInstance(signer);

      let vote = _vote === "YAY" ? 0 : 1;
      console.log("vote", vote);
      console.log("proposalId", proposalId);

      const txn = await daoContract?.voteOnProposal(proposalId, vote, {
        gasLimit: 2000000,
      });
      setLoading(true);
      await txn.wait();
      setLoading(false);
      await fetchAllProposals();
    } catch (error: any) {
      console.error(error);
    }
  };

  // Callback function to run when a proposal is created
  // Used to re-fetch all proposals in the DAO
  const createdProposal = async () => {
    console.log("createdProposal");
    await getNumProposalsInDAO();
    setSelectedTab("View Proposals");
  };

  // Calls the `executeProposal` function in the contract, using
  // the passed proposal ID
  const executeProposal = async (proposalId: any) => {
    if (!provider) return;
    const signer = await provider.getSigner();
    try {
      const daoContract = getDaoContractInstance(signer);
      const txn = await daoContract?.executeProposal(proposalId);
      setLoading(true);
      await txn.wait();
      setLoading(false);
      await fetchAllProposals();
    } catch (error: any) {
      console.error(error);
      window.alert(error.data.message);
    }
  };

  // Helper function to return a DAO Contract instance
  // given a Provider/Signer
  const getDaoContractInstance = (providerOrSigner: any) => {
    if (!provider) return;
    return new Contract(
      CHICKEN_DAO_CONTRACT.address,
      CHICKEN_DAO_CONTRACT.abi,
      providerOrSigner
    );
  };

  // Helper function to return a CryptoDevs NFT Contract instance
  // given a Provider/Signer
  const getChickenNFTContractInstance = () => {
    return new Contract(
      CHICKEN_NFT_CONTRACT.address,
      CHICKEN_NFT_CONTRACT.abi,
      provider
    );
  };

  // Piece of code that runs everytime the value of `selectedTab` changes
  // Used to re-fetch all proposals in the DAO when user switches
  // to the 'View Proposals' tab
  useEffect(() => {
    if (selectedTab === "View Proposals") {
      fetchAllProposals();
    }
  }, [selectedTab]);

  // Render the contents of the appropriate tab based on `selectedTab`
  function renderTabs() {
    if (selectedTab === "Create Proposal") {
      return renderCreateProposalTab();
    } else if (selectedTab === "View Proposals") {
      return renderViewProposalsTab();
    }
    return null;
  }

  function renderCreateProposalTab() {
    if (loading) {
      return (
        <Box sx={{ m: 2 }}>
          <CircularProgress />
          Waiting for transaction...
        </Box>
      );
    } else if (nftBalance === 0) {
      return (
        <Box sx={{ m: 2 }}>
          <Typography>
            You do not own any ChickenNFTs. <br />
            <Typography variant="body1" fontWeight="bold">
              You cannot create or vote on proposals
            </Typography>
          </Typography>
        </Box>
      );
    } else {
      return (
        <CreateProposal
          provider={provider}
          daoContract={getDaoContractInstance(provider?.getSigner())}
          account={account}
          createProposalCallback={createdProposal}
        />
      );
    }
  }

  function renderViewProposalsTab() {
    if (loading) {
      return (
        <Box sx={{ m: 2 }}>
          <CircularProgress />
          Waiting for transaction...
        </Box>
      );
    } else if (proposals.length === 0) {
      return (
        <Typography sx={{ m: 2 }}>No proposals have been created</Typography>
      );
    } else {
      return (
        <Box>
          {proposals.map((p: any, index: any) => (
            <Card key={index} sx={{ m: 2, p: 2, border: "1px solid #ddd" }}>
              <Typography variant="h6">Proposal ID: {p.proposalId}</Typography>
              <Typography>Title: {p.title}</Typography>
              <Typography>
                URL:{" "}
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.url}
                </a>
              </Typography>

              <Typography>Amount: {p.amount} SMR</Typography>

              <Typography>Recipient: {p.recipient}</Typography>
              <Typography>Deadline: {p.deadline.toLocaleString()}</Typography>
              <Typography>Yay Votes: {p.yayVotes}</Typography>
              <Typography>Nay Votes: {p.nayVotes}</Typography>
              <Typography>Executed?: {p.executed.toString()}</Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", m: 2 }}
              >
                {p.deadline.getTime() > Date.now() && !p.executed ? (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ m: 1 }}
                      onClick={() => voteOnProposal(p.proposalId, "YAY")}
                    >
                      Vote YAY
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ m: 1 }}
                      onClick={() => voteOnProposal(p.proposalId, "NAY")}
                    >
                      Vote NAY
                    </Button>
                  </>
                ) : p.deadline.getTime() < Date.now() && !p.executed ? (
                  <Button
                    variant="contained"
                    sx={{ m: 1 }}
                    onClick={() => executeProposal(p.proposalId)}
                  >
                    Execute Proposal{" "}
                    {p.yayVotes > p.nayVotes ? "(YAY)" : "(NAY)"}
                  </Button>
                ) : (
                  <Typography sx={{ m: 2 }}>Proposal Executed</Typography>
                )}
              </Box>
            </Card>
          ))}
        </Box>
      );
    }
  }

  return (
    <div>
      <Head>
        <title>ChickenDAO</title>
        <meta name="description" content="CryptoDevs DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Welcome to the ChickenDAO!
          </Typography>
          <Typography variant="subtitle1">Welcome to the DAO!</Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              mb: 4,
            }}
          >
            <KPI
              label="Treasury Balance"
              value={formatEther(treasuryBalance)}
              symbol="SMR"
            />
            <KPI
              label="🐔 Your ChickenNFT Balance:"
              value={nftBalance.toString()}
              symbol="Chickens"
            />
          </Box>

          <Typography variant="subtitle2">
            <br />
            Total Number of Proposals: {numProposals}
          </Typography>

          <Grid container spacing={2} style={{ marginTop: "1rem" }}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                disabled={selectedTab === "Create Proposal"}
                onClick={() => setSelectedTab("Create Proposal")}
              >
                Create Proposal
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                disabled={selectedTab === "View Proposals"}
                onClick={() => setSelectedTab("View Proposals")}
              >
                View Proposals
              </Button>
            </Grid>
          </Grid>

          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <CircularProgress />
            </div>
          )}

          {!loading && renderTabs()}
        </Container>
      </Base>
    </div>
  );
}
