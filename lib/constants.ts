import { parseAbi } from "viem";
import {chainNFTMintContract} from "@/lib/chains";

export const NFT_CONTRACT_ADDRESS =
  "0xe8c25Ba6343C586648f3462dA000A86267724f24";

export const getNftContractAddress = (chain?: string) => {
    return chainNFTMintContract[chain as keyof typeof chainNFTMintContract] || chainNFTMintContract['arbitrumSepolia'];
}

export const NFT_MINTABLE_ABI_PARSED = parseAbi([
  "function mintTo(address recipient) returns (uint256)",
  "function baseURI() view returns (string)",
  "function balanceOf(address owner) view returns (uint256)",
] as const);
