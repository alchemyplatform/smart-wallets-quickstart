import { useSmartAccountClient } from "@account-kit/react";
import { arbitrumSepolia } from "@account-kit/infra";
import { ChainData, chainNFTMintContractData } from "@/lib/chains";

export const useNftContractAddress = (): ChainData['nftContractAddress'] | undefined => {
    const { client } = useSmartAccountClient({});
    const chain = client?.chain || arbitrumSepolia;

    return chainNFTMintContractData[chain.id]?.nftContractAddress;
}