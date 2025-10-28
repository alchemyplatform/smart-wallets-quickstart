import {allChains} from "@/lib/chains";

export const useChainId = () => {
    const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID || "arbitrumSepolia";
    const envChain = allChains[CHAIN_ID as keyof typeof allChains];
    if (!envChain) {
        throw new Error(`Unsupported chain ID: ${CHAIN_ID}. Supported chains: ${Object.keys(allChains).join(", ")}`);
    }
    return CHAIN_ID;
}