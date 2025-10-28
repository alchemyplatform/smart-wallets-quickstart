import {
  AlchemyAccountsUIConfig,
  cookieStorage,
  createConfig,
} from "@account-kit/react";
import { alchemy, arbitrum, arbitrumGoerli, arbitrumNova, arbitrumSepolia, base, baseGoerli, baseSepolia, fraxtal, fraxtalSepolia, goerli, mainnet, optimism, optimismGoerli, optimismSepolia, polygon, polygonAmoy, polygonMumbai, sepolia, shape, shapeSepolia, worldChain, worldChainSepolia, zora, zoraSepolia, beraChainBartio, opbnbMainnet, opbnbTestnet, soneiumMinato, soneiumMainnet, unichainMainnet, unichainSepolia, inkMainnet, inkSepolia, mekong, monadTestnet, openlootSepolia, gensynTestnet, riseTestnet, storyMainnet, storyAeneid, celoAlfajores, celoMainnet, teaSepolia, bobaSepolia, bobaMainnet } from "@account-kit/infra";
import { QueryClient } from "@tanstack/react-query";

const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
if (!API_KEY) {
  throw new Error("NEXT_PUBLIC_ALCHEMY_API_KEY is not set");
}

const SPONSORSHIP_POLICY_ID = process.env.NEXT_PUBLIC_ALCHEMY_POLICY_ID;
if (!SPONSORSHIP_POLICY_ID) {
  throw new Error("NEXT_PUBLIC_ALCHEMY_POLICY_ID is not set");
}

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID || "arbitrumSepolia";

const allChains = {
  arbitrum,
  arbitrumGoerli,
  arbitrumNova,
  arbitrumSepolia,
  base,
  baseGoerli,
  baseSepolia,
  fraxtal,
  fraxtalSepolia,
  goerli,
  mainnet,
  optimism,
  optimismGoerli,
  optimismSepolia,
  polygon,
  polygonAmoy,
  polygonMumbai,
  sepolia,
  shape,
  shapeSepolia,
  worldChain,
  worldChainSepolia,
  zora,
  zoraSepolia,
  beraChainBartio,
  opbnbMainnet,
  opbnbTestnet,
  soneiumMinato,
  soneiumMainnet,
  unichainMainnet,
  unichainSepolia,
  inkMainnet,
  inkSepolia,
  mekong,
  monadTestnet,
  openlootSepolia,
  gensynTestnet,
  riseTestnet,
  storyMainnet,
  storyAeneid,
  celoAlfajores,
  celoMainnet,
  teaSepolia,
  bobaSepolia,
  bobaMainnet
}

const chain = allChains[CHAIN_ID as keyof typeof allChains];
if (!chain) {
  throw new Error(`Unsupported chain ID: ${CHAIN_ID}. Supported chains: ${Object.keys(allChains).join(", ")}`);
}

const uiConfig: AlchemyAccountsUIConfig = {
  illustrationStyle: "outline",
  auth: {
    sections: [
      [{ type: "email" }],
      [
        { type: "passkey" },
        { type: "social", authProviderId: "google", mode: "popup" },
        { type: "social", authProviderId: "facebook", mode: "popup" },
      ],
    ],
    addPasskeyOnSignup: false,
  },
};

export const config = createConfig(
  {
    transport: alchemy({ apiKey: API_KEY }),
    chain,
    ssr: true, // more about ssr: https://www.alchemy.com/docs/wallets/react/ssr
    storage: cookieStorage, // more about persisting state with cookies: https://www.alchemy.com/docs/wallets/react/ssr#persisting-the-account-state
    enablePopupOauth: true, // must be set to "true" if you plan on using popup rather than redirect in the social login flow
    policyId: SPONSORSHIP_POLICY_ID,
  },
  uiConfig
);

export const queryClient = new QueryClient();
