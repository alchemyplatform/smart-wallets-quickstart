import { parseAbi } from "viem";
import { arbitrumSepolia } from "@account-kit/infra";

export const DEFAULT_CHAIN_ID = arbitrumSepolia.id;

export const NFT_MINTABLE_ABI_PARSED = parseAbi([
  "function mintTo(address recipient) returns (uint256)",
  "function baseURI() view returns (string)",
  "function balanceOf(address owner) view returns (uint256)",
] as const);
