import { Address, Chain } from "viem";
import {
    arbitrumSepolia,
    baseSepolia,
    sepolia,
    polygonAmoy,
    shapeSepolia,
    soneiumMinato,
    unichainSepolia,
    inkSepolia,
    monadTestnet,
    riseTestnet,
    storyAeneid,
    teaSepolia
} from "@account-kit/infra";

export interface ChainData {
    chain: Chain;
    nftContractAddress: Address;
}

export const chainNFTMintContractData: Record<Chain['id'], ChainData> = {
    [arbitrumSepolia.id]: {
        chain: arbitrumSepolia,
        nftContractAddress: "0x6D1BaA7951f26f600b4ABc3a9CF8F18aBf36fac1",
    },
    [baseSepolia.id]: {
        chain: baseSepolia,
        nftContractAddress: "0x6d15c130d9B2548597C1d2D0c8CB2067Ce9C4525",
    },
    [polygonAmoy.id]: {
        chain: polygonAmoy,
        nftContractAddress: "0x6d15c130d9B2548597C1d2D0c8CB2067Ce9C4525",
    },
    [sepolia.id]: {
        chain: sepolia,
        nftContractAddress: "0xc59b508C90425C8e25e3F9dA30e52057908E2838",
    },
    [shapeSepolia.id]: {
        chain: shapeSepolia,
        nftContractAddress: "0x6d15c130d9B2548597C1d2D0c8CB2067Ce9C4525",
    },
    [soneiumMinato.id]: {
        chain: soneiumMinato,
        nftContractAddress: "0x6d15c130d9B2548597C1d2D0c8CB2067Ce9C4525",
    },
    [unichainSepolia.id]: {
        chain: unichainSepolia,
        nftContractAddress: "0x6d15c130d9B2548597C1d2D0c8CB2067Ce9C4525",
    },
    [inkSepolia.id]: {
        chain: inkSepolia,
        nftContractAddress: "0x6d15c130d9B2548597C1d2D0c8CB2067Ce9C4525",
    },
    [monadTestnet.id]: {
        chain: monadTestnet,
        nftContractAddress: "0x6d15c130d9B2548597C1d2D0c8CB2067Ce9C4525",
    },
    [riseTestnet.id]: {
        chain: riseTestnet,
        nftContractAddress: "0x6d15c130d9B2548597C1d2D0c8CB2067Ce9C4525",
    },
    [storyAeneid.id]: {
        chain: storyAeneid,
        nftContractAddress: "0x6d15c130d9B2548597C1d2D0c8CB2067Ce9C4525",
    },
    [teaSepolia.id]: {
        chain: teaSepolia,
        nftContractAddress: "0x6d15c130d9B2548597C1d2D0c8CB2067Ce9C4525",
    },
}
