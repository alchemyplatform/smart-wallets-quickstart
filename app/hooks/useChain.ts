import { useSmartAccountClient } from "@account-kit/react";
import { ARB_SEPOLIA } from "@/lib/constants";

export const useChainId = () => {
    const { client } = useSmartAccountClient({});

    return client?.chain?.id || ARB_SEPOLIA;
}