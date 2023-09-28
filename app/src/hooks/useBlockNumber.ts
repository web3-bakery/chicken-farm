import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useQuery } from "@tanstack/react-query";

export default function useBlockNumber() {
  const { library } = useWeb3React<Web3Provider>();

  const queryFn = () => {
    if (!library) {
      return;
    }
    return library.getBlockNumber();
  };

  const query = useQuery({
    queryKey: ["BlockNumber"],
    queryFn,
  });

  return query;
}
