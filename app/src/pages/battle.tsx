import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import utils from "../utils";
import NftContract from "../contracts/ChickenNFT.json";
import Base from "../layouts/Base";

const ChickenFight = ({ chicken, onFight, isLoading }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 2,
        p: 2,
        boxShadow: 3,
      }}
    >
      <Typography style={{ fontSize: 50 }}>{"🐔"}</Typography>
      <Typography>Chicken #{chicken.tokenId}</Typography>
      {!chicken.isDead ? (
        <Typography>🐔 Ready for battle</Typography>
      ) : (
        <Typography>💀 Resting in peace</Typography>
      )}
      <Button
        variant="contained"
        onClick={onFight}
        disabled={chicken.isDead || isLoading}
      >
        {isLoading ? "Battling..." : "Fight!"}
      </Button>
    </Box>
  );
};

const ChickenFightClub = () => {
  const { active, account, library } = useWeb3React();
  const [message, setMessage] = useState("");
  const [fightResult, setFightResult] = useState("");
  const [chickens, setChickens] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadChickens = async () => {
      if (active && account) {
        const nfts = await utils.loadNfts(
          library,
          NftContract.address,
          account
        );
        const provider = new ethers.providers.Web3Provider(library.provider);
        const nftContract = new ethers.Contract(
          NftContract.address,
          NftContract.abi,
          provider
        );

        let chickens: any[] = [];

        for (let i = 0; i < nfts.length; i++) {
          const chicken = await nftContract.getChickenDetails(nfts[i].tokenId);
          console.log("details", chicken);
          chickens.push({
            ...nfts[i],
            ...chicken,
          });
        }
        console.log(chickens);
        setChickens(chickens);
      }
    };
    loadChickens();
  }, [active, account]);

  const handleFight = async (chickenId: number) => {
    setIsLoading(true);
    try {
      // Hier wird angenommen, dass es eine Methode "fight" im Smart Contract gibt
      const provider = new ethers.providers.Web3Provider(library.provider);
      const nftContract = new ethers.Contract(
        NftContract.address,
        NftContract.abi,
        provider.getSigner()
      );
      const result = await nftContract.fight(chickenId, { gasLimit: 30000000, value: ethers.utils.parseEther("10") });
      //setFightResult(result); // Angenommen, dass der "fight" eine Nachricht zurückgibt
      let res = await result.wait()
      console.log("res", res)
      setMessage(`🎉 Chicken #{chickenId} just battled!`);
    } catch (error: any) {
      setMessage(extractErrorMessage(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  function extractErrorMessage(log: string) {
    const errorMsgPrefix = "reverted with reason string '";
    const errorMsgSuffix = "'";

    if (log.includes(errorMsgPrefix)) {
      const start = log.indexOf(errorMsgPrefix) + errorMsgPrefix.length;
      const end = log.indexOf(errorMsgSuffix, start);
      return log.substring(start, end);
    }
    return "null"; // Return null or some default value if no error message is found
  }

  return (
    <Base>
      <Typography variant="h1">Chicken Fight Club</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
          mb: 4,
          alignItems: "center",
          justifyContent:
            account && chickens && chickens.length > 0
              ? "flex-start"
              : "center",
        }}
      >
        {message && <Alert severity="info">{message}</Alert>}
        {fightResult && <Alert severity="success">{fightResult}</Alert>}
        {account && chickens && chickens.length > 0 ? (
          chickens.map((chicken) => (
            <ChickenFight
              key={chicken.tokenId}
              chicken={chicken}
              onFight={() => handleFight(chicken.tokenId)}
              isLoading={isLoading}
            />
          ))
        ) : (
          <Typography variant="h6" color="textSecondary">
            🥺 You have no chickens ready for the battle.
          </Typography>
        )}
      </Box>
    </Base>
  );
};

export default ChickenFightClub;
