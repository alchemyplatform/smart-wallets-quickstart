import { useCallback, useMemo, useState } from "react";
import {
  useSmartAccountClient,
  useSendUserOperation,
} from "@account-kit/react";
import { encodeFunctionData } from "viem";
import { NFT_MINTABLE_ABI_PARSED } from "@/lib/constants";
import { getNftContractAddress } from "@/app/hooks/getNftContractAddress";

export interface UseMintNFTParams {
  onSuccess?: () => void;
}
export interface UseMintReturn {
  isMinting: boolean;
  handleMint: () => void;
  transactionUrl?: string;
  error?: string;
}

export const useMint = ({ onSuccess }: UseMintNFTParams): UseMintReturn => {
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState<string>();
  const chainData = getNftContractAddress();

  const { client } = useSmartAccountClient({});

  const handleSuccess = () => {
    setIsMinting(false);
    setError(undefined);
    onSuccess?.();
  };

  const handleError = (error: Error) => {
    console.error("Mint error:", error);
    setIsMinting(false);
    setError(error.message || "Failed to mint NFT");
  };

  const { sendUserOperationResult, sendUserOperation } = useSendUserOperation({
    client,
    waitForTxn: true,
    onError: handleError,
    onSuccess: handleSuccess,
    onMutate: () => {
      setIsMinting(true);
      setError(undefined);
    },
  });

  const handleMint = useCallback(async () => {
    if (!client) {
      setError("Wallet not connected");
      return;
    }

    if (!chainData.nftContractAddress) {
        setError("Contract address is not defined.");
        return;
    }

    sendUserOperation({
      uo: {
        target: chainData.nftContractAddress,
        data: encodeFunctionData({
          abi: NFT_MINTABLE_ABI_PARSED,
          functionName: "mintTo",
          args: [client.getAddress()],
        }),
      },
    });
  }, [client, sendUserOperation, chainData]);

  const transactionUrl = useMemo(() => {
    if (!client?.chain?.blockExplorers || !sendUserOperationResult?.hash) {
      return undefined;
    }
    return `${client.chain.blockExplorers.default.url}/tx/${sendUserOperationResult.hash}`;
  }, [client, sendUserOperationResult?.hash]);

  return {
    isMinting,
    handleMint,
    transactionUrl,
    error,
  };
};
