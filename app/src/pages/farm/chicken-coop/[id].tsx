import { useRouter } from "next/router";
import { Box, Typography, Container, Button } from "@mui/material";
import Head from "next/head";
import Base from "../../../layouts/Base";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

import { hooks, metaMask } from "../../../components/web3/connectors/metaMask";
import useChickenCoopDetail from "../../../hooks/useChickenCoopDetail";
import AddChicken from "../../../components/chicken-coop/AddChicken";
import ChickenCard from "../../../components/farm/ChickenCard";
import useContract from "../../../hooks/useContract";
import ChickenCoop_CONTRACT from "../../../contracts/ChickenCoop.json";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

const ChickenCoopDetail = () => {
  const accounts = useAccounts();
  const provider = useProvider();

  const isActive = useIsActive();

  const [account, setAccount] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const { data, isError, isLoading, refetch } = useChickenCoopDetail(
    Number(id)
  );

  const { level, lastCollected, chickenIds } = Array.isArray(data)
    ? { level: 0, lastCollected: 0, chickenIds: [] }
    : data || { level: 0, lastCollected: 0, chickenIds: [] };
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const contract = useContract(
    ChickenCoop_CONTRACT.address,
    ChickenCoop_CONTRACT.abi
  );

  const collectEggs = async () => {
    console.log("collect eggs");
    if (!contract) return;
    let x = await contract.collectEggsFromCoop(Number(id));
    await x.wait();
    refetch();
  };
  const updateCoop = async () => {
    console.log("update coop");
    if (!contract) return;
    let x = await contract.upgradeCoopLevel(Number(id), {
      value: ethers.utils.parseEther("10"),
    });
    await x.wait();
    refetch();
  };

  useEffect(() => {
    if (provider && accounts && accounts?.length > 0) {
      setAccount(accounts[0]);
    }
  }, [accounts, provider]);

  return (
    <>
      <Head>
        <title>Chicken Coop Detail</title>
      </Head>

      <Base>
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 4,
            }}
          >
            <Box
              sx={{
                p: 2,
                bgcolor: "#2E2E2E",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography mt={2} mb={1} variant="h5" align="center">
                Chicken Coop #{id}
              </Typography>
              {level < 11 ? (
                <Button onClick={updateCoop}>Update Coop</Button>
              ) : null}

              <Typography variant="h5" color="text.secondary" mt={0}>
                {chickenIds.length} / {level * 2}
              </Typography>
              {account && chickenIds.length < level * 2 ? (
                <AddChicken account={account} coopId={Number(id)} />
              ) : null}
            </Box>
          </Box>
          <Typography variant="h5" color="text.secondary" mt={0}>
            Chickens in Coop
          </Typography>
          {chickenIds.length > 0 ? (
            <>
              <Button onClick={collectEggs}>collect Eggs</Button>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  mt: 2,
                  mb: 4,
                  gap: 2,
                }}
              >
                {chickenIds.map((tokenId: number) => (
                  <ChickenCard coopId={Number(id)} tokenId={tokenId} />
                ))}
              </Box>
            </>
          ) : (
            <Typography variant="h6" color="textSecondary">
              The coop is empty
            </Typography>
          )}
          <pre>{JSON.stringify(data)}</pre>
        </Container>
      </Base>
    </>
  );
};

export default ChickenCoopDetail;
