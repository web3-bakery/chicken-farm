import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import CHICKEN_CONTRACT from "../contracts/ChickenNFT.json";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

const WoodenBackground = styled.div`
    background: url('/path-to-your-wooden-texture.jpg') no-repeat center center fixed; 
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AliveChickensCount = ({provider}: any) => {

    const [aliveChickensCount, setAliveChickensCount] = useState(0);
    const fetchAliveChickensCount = async () => {
        const contract = new ethers.Contract(
            CHICKEN_CONTRACT.address,
            CHICKEN_CONTRACT.abi,
            provider
          );
      
        const count = await contract.totalAliveChickens();
        setAliveChickensCount(Number(count));
    };
    useEffect(() => {
        

        fetchAliveChickensCount();
    }, []);

    return (
        <WoodenBackground>
            <Typography variant="h4" component="h1" gutterBottom>
                Total Alive Chickens:
            </Typography>
            <Typography variant="h2" component="h2">
                {aliveChickensCount}
            </Typography>
            {/* You can also add other elements here like a button to refresh the count */}
            <Button variant="contained" onClick={() => fetchAliveChickensCount()}>
                Refresh Count
            </Button>
        </WoodenBackground>
    );
};

export default AliveChickensCount;
