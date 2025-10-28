import { parseAbi } from "viem";
import {chainNFTMintContract} from "@/lib/chains";
import {arbitrumSepolia} from "@account-kit/infra";

export const ARB_SEPOLIA = arbitrumSepolia.id;

export const getNftContractAddress = (chain?: string) => {
    return chainNFTMintContract[chain as keyof typeof chainNFTMintContract] || chainNFTMintContract[`${ARB_SEPOLIA}`];
}

export const NFT_MINTABLE_ABI_PARSED = parseAbi([
  "function mintTo(address recipient) returns (uint256)",
  "function baseURI() view returns (string)",
  "function balanceOf(address owner) view returns (uint256)",
] as const);
