import {ARB_SEPOLIA} from "@/lib/constants";

export const useChainId = () => {
    return process.env.NEXT_PUBLIC_CHAIN_ID || ARB_SEPOLIA;
}