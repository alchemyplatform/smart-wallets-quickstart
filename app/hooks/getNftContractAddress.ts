import { useSmartAccountClient } from "@account-kit/react";
import { arbitrumSepolia } from "@account-kit/infra";
import { chainNFTMintContractData } from "@/lib/chains";
import { DEFAULT_CHAIN_ID } from "@/lib/constants";

export const getNftContractAddress = () => {
    const { client } = useSmartAccountClient({});
    const chain = client?.chain || arbitrumSepolia;

    return chainNFTMintContractData[chain.id] || chainNFTMintContractData[DEFAULT_CHAIN_ID];
}