import { useSmartAccountClient } from "@account-kit/react";
import { arbitrumSepolia } from "@account-kit/infra";
import { chainNFTMintContractData } from "@/lib/chains";

export const useNftContractAddress = () => {
    const { client } = useSmartAccountClient({});
    const chain = client?.chain || arbitrumSepolia;

    return chainNFTMintContractData[chain.id];
}