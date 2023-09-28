import NftStake from "./contracts/NftStake.json";
import IERC721Enumerable from "./contracts/IERC721Enumerable.json";
import { ethers } from "ethers";

const getStakedNFTs = async (
  library: any,
  contractAddr: any,
  account: string
) => {
  try {
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(contractAddr, NftStake.abi, signer);
    const stakedNFTs = await contract.getStakedNFTsByOwner(account);
    let array: any = [];
    stakedNFTs.forEach((nft: any) => {
      let obj = {
        tokenId: nft.toNumber(),
        url: "",
      };
      array.push(obj);
    });
    return array;
  } catch (error) {
    console.error("Error getting staked NFTs:", error);
    return [null];
  }
};

const loadNfts = async function (
  library: any,
  contractAddr: any,
  account: string
) {
  //tokenOfOwnerByIndex
  const provider = new ethers.providers.Web3Provider(library.provider);
  let contract_Enumerable = new ethers.Contract(
    contractAddr,
    IERC721Enumerable.abi,
    provider
  );
  const data1 = await contract_Enumerable.supportsInterface("0x80ac58cd");
  const balance = await contract_Enumerable.balanceOf(account);
  let array = [];
  for (let index = 0; index < balance.toNumber(); index++) {
    const data = await contract_Enumerable.tokenOfOwnerByIndex(account, index);
    const token_index = data.toNumber();

    let obj = {
      tokenId: token_index,
      url: "",
    };
    array.push(obj);
  }
  return array;
};

const utils = { getStakedNFTs, loadNfts };

export default utils
