# Smart Wallets Quickstart (Next.js)

Use this template to get started with **embedded smart wallets** using [Alchemy Account Kit](https://www.alchemy.com/docs/wallets).

## ✨ Features

- Email, passkey & social login using pre‑built UI components
- Flexible, secure, and cheap smart accounts
- Gasless transactions powered by ERC-4337 Account Abstraction
- One‑click NFT mint (no ETH required)
- Server‑side rendering ready – session persisted with cookies
- TailwindCSS + shadcn/ui components, React Query, TypeScript
# Smart Wallets

> Build zero-friction user onboarding and transactions end-to-end with one SDK.

<img
  src="https://alchemyapi-res.cloudinary.com/image/upload/v1764187314/docs/aa-sdk/images/overviewHeader.png"
  alt="smart wallets overview"
  className="hero-image-desktop"
/>

<Card title="Quickstart" icon="bolt" href="/docs/wallets/reference/smart-wallet-quickstart">
  Send your first transaction using the SDK or API.
</Card>

## Everything You Need for Onchain Applications

<CardGroup cols={3}>
  <Card
    small
    title="User onboarding"
    icon="user-plus"
    href="/docs/wallets/authentication/login-methods/email-otp"
  >
    Email, social, biometric, or EOA login.
  </Card>
  <Card
    title="Gasless transactions"
    icon="gas-pump"
    href="/docs/wallets/transactions/sponsor-gas"
  >
    Remove gas fees for users.
  </Card>
  <Card
    title="Batching"
    icon="bolt"
    href="/docs/wallets/transactions/send-batch-transactions"
  >
    Multiple transactions in 1 click on EVM & Solana.
  </Card>
  <Card
    title="Whitelabel UI"
    icon="fa-solid fa-pencil"
    href="/docs/wallets/react/customization/theme"
  >
    Pre-built UI components or fully whitelabel.
  </Card>
</CardGroup>

## Frameworks

<CardGroup cols={4}>
  <Card
    title="React"
    icon="fa-brands fa-react"
    href="/docs/wallets/react/quickstart"
  >
    Pre-built React components and hooks.
  </Card>
  <Card
    title="React Native"
    icon="fa-brands fa-react"
    href="/docs/wallets/react-native/overview"
  >
    Native mobile wallet experiences.
  </Card>
  <Card title="Javascript" icon="fa-brands fa-js" href="/docs/wallets/core/overview">
    Framework-agnostic implementation.
  </Card>
  <Card
    title="APIs"
    icon="fa-solid fa-code"
    href="/docs/reference/smart-wallet-quickstart"
  >
    Server-side wallet management.
  </Card>
</CardGroup>

## Common Starting Places

<CardGroup cols={2}>
  <Card title="Build a new app" icon="wrench" href="/docs/wallets/react/quickstart">
    Build an onchain app from scratch with wallets and transactions.
  </Card>
  <Card
    title="Upgrade existing wallets"
    icon="fa-solid fa-chevrons-up"
    href="/docs/wallets/recipes/upgrade-to-smart-accounts"
  >
    Upgrade to smart wallets using EIP-7702 or direct wagmi integration.
  </Card>
  <Card
    title="Bring your app onchain"
    icon="fa-regular fa-globe-pointer"
    href="/docs/wallets/authentication/login-methods/bring-your-own-auth"
  >
    Add wallet and transaction functionality to existing web2 applications.
  </Card>
  <Card
    title="Manage wallets in backend"
    icon="fa-solid fa-server"
    href="/docs/reference/smart-wallet-quickstart"
  >
    Server-side applications with signing and sending on your backend.
  </Card>
</CardGroup>

## Resources

<CardGroup cols={3}>
  <Card
    title="Support"
    icon="fa-solid fa-question"
    href="/docs/wallets/resources/faqs"
  >
    Troubleshoot issues or get in touch.
  </Card>
  <Card
    title="Recipes"
    icon="fa-solid fa-book"
    href="/docs/wallets/recipes/overview"
  >
    End-to-end guides for common features.
  </Card>
  <Card
    title="Pricing"
    icon="fa-solid fa-dollar-sign"
    href="https://wallet-calculator.alchemy.com/"
  >
    Save costs as you scale.
  </Card>
</CardGroup>

# Choose Your Starting Point

> Overview of our product offerings

<CardGroup cols={4}>
  <Card title="Node API" icon="fa-solid fa-diagram-project" href="/docs/reference/node-api-overview">
    Low-level JSON-RPC for reading & writing blockchain data.
  </Card>

  <Card title="Data APIs" icon="fa-solid fa-database" href="/docs/reference/data-overview">
    Structured, indexed data for balances, NFTs, prices, and more.
  </Card>

  <Card title="Wallet APIs" icon="fa-solid fa-wallet" href="/docs/wallets">
    Account abstraction infrastructure for smart wallets.
  </Card>

  <Card title="Rollups" icon="fa-solid fa-layer-group" href="/docs/reference/rollups-quickstart">
    Launch dedicated rollups with full control over your L2.
  </Card>
</CardGroup>

<Tip title="Don't have an API key?" icon="star">
  Build faster with production-ready APIs, smart wallets and rollup infrastructure across 70+ chains. Create your free Alchemy API key and
  <a href="https://dashboard.alchemy.com/signup"> get started today</a>.
</Tip>

***

## 1. Node API

The [Node API](/docs/reference/node-api-overview) gives you low-level access to standard JSON-RPC methods for interacting with blockchains.

Use it for sending transactions, querying blocks and logs, and accessing state. It supports multiple chains; see the [Chain APIs Overview](/docs/reference/chain-apis-overview) page for the full list.

<CardGroup cols={3}>
  <Card title="Chain APIs" icon="fa-solid fa-diagram-project" href="/docs/chains">
    Read & write interface for all blockchains supported by us.
  </Card>

  <Card title="WebSockets" icon="fa-solid fa-wave-square" href="/docs/reference/subscription-api">
    Subscribe to pending transactions, log events, new blocks, and more.
  </Card>

  <Card title="Trace API" icon="fa-solid fa-magnifying-glass-arrow-right" href="/docs/reference/trace-api-quickstart">
    Get insights into transaction processing and onchain activity.
  </Card>

  <Card title="Debug API" icon="fa-solid fa-bug" href="/docs/reference/debug-api-quickstart">
    Non-standard RPC methods for inspecting and debugging transactions.
  </Card>

  <Card title="Yellowstone gRPC" icon="fa-solid fa-bolt" href="/docs/reference/yellowstone-grpc-overview">
    High-performance real-time Solana data streaming interface.
  </Card>
</CardGroup>

***

## 2. Data APIs

The [Data APIs](/docs/reference/data-overview) provide structured, indexed data that would be difficult to get via RPC alone.

Use it for NFT metadata, token balances, transaction histories, enriched transfers, and analytics. Optimized for high-volume reads, dashboards, and data-heavy applications.

<CardGroup cols={3}>
  <Card title="Portfolio API" icon="fa-solid fa-chart-pie" href="/docs/reference/portfolio-apis">
    Build a complete portfolio view of a user's wallet across tokens and NFTs.
  </Card>

  <Card title="Transfers API" icon="fa-solid fa-arrow-right-arrow-left" href="/docs/reference/transfers-api-quickstart">
    Get historical transactions for any address in a single request.
  </Card>

  <Card title="Prices API" icon="fa-solid fa-chart-line" href="/docs/reference/prices-api-quickstart">
    Access real-time and historical token prices.
  </Card>

  <Card title="NFT API" icon="fa-solid fa-image" href="/docs/reference/nft-api-quickstart">
    Find, verify, and display NFTs across major blockchains.
  </Card>

  <Card title="Webhooks" icon="fa-solid fa-bell" href="/docs/reference/notify-api-quickstart">
    Subscribe to onchain events like transfers, transactions, and balance changes.
  </Card>

  <Card title="Simulation API" icon="fa-solid fa-flask" href="/docs/reference/simulation">
    Simulate transactions and see their effects before you send them.
  </Card>
</CardGroup>

***

## 3. Wallet APIs / Account Abstraction Infrastructure

Our [Smart Wallets](/docs/wallets) product gives you everything you need to build zero-friction user flows, from sign-up to checkout, using smart contract accounts.

Use these APIs to handle user operations, sponsor gas, and implement smart accounts with account abstraction.

<CardGroup cols={3}>
  <Card title="Bundler" icon="fa-solid fa-layer-group" href="/docs/reference/bundler-api-quickstart">
    Bundler API Quickstart for handling user operations.
  </Card>

  <Card title="Gas Manager" icon="fa-solid fa-gas-pump" href="https://www.alchemy.com/docs/reference/how-to-sponsor-gas-on-evm">
    Gas Manager API Quickstart for sponsoring gas fees.
  </Card>

  <Card title="Transaction APIs" icon="fa-solid fa-toolbox" href="/docs/wallets/transactions/overview">
    Send transactions with smart accounts.
  </Card>
</CardGroup>

***

## 4. Rollups

Our [Rollups](/docs/reference/rollups-quickstart) product helps you run a dedicated rollup with full control over transaction speed, cost, and functionality.

Launching a rollup can unlock new revenue streams, enable novel use cases, and provide a better user experience.

# View the Stack rollup framework.
 
<Card title="Quickstart" icon="bolt" href="/docs/wallets/reference/smart-wallet-quickstart">
  Send your first transaction using the SDK or API.
</Card>

## Everything You Need for Onchain Applications

<CardGroup cols={3}>
  <Card
    small
    title="User onboarding"
    icon="user-plus"
    href="/docs/wallets/authentication/login-methods/email-otp"
  >
    Email, social, biometric, or EOA login.
  </Card>
  <Card
    title="Gasless transactions"
    icon="gas-pump"
    href="/docs/wallets/transactions/sponsor-gas"
  >
    Remove gas fees for users.
  </Card>
  <Card
    title="Batching"
    icon="bolt"
    href="/docs/wallets/transactions/send-batch-transactions"
  >
    Multiple transactions in 1 click on EVM & Solana.
  </Card>
  <Card
    title="Whitelabel UI"
    icon="fa-solid fa-pencil"
    href="/docs/wallets/react/customization/theme"
  >
    Pre-built UI components or fully whitelabel.
  </Card>
</CardGroup>

## Frameworks

<CardGroup cols={4}>
  <Card
    title="React"
    icon="fa-brands fa-react"
    href="/docs/wallets/react/quickstart"
  >
    Pre-built React components and hooks.
  </Card>
  <Card
    title="React Native"
    icon="fa-brands fa-react"
    href="/docs/wallets/react-native/overview"
  >
    Native mobile wallet experiences.
  </Card>
  <Card title="Javascript" icon="fa-brands fa-js" href="/docs/wallets/core/overview">
    Framework-agnostic implementation.
  </Card>
  <Card
    title="APIs"
    icon="fa-solid fa-code"
    href="/docs/reference/smart-wallet-quickstart"
  >
    Server-side wallet management.
  </Card>
</CardGroup>

![Smart Wallet Quickstart](https://github.com/user-attachments/assets/2903fb78-e632-4aaa-befd-5775c60e1ca2)

# Feature Support By Chain

> Alchemy's current feature availability for each of its supported chains

<Info>

  ![[Chains](https://dashboard.alchemy.com/chains)](https://alchemyapi-res.cloudinary.com/image/upload/v1764179964/docs/api-reference/alchemy-transact/transaction-simulation/523fb8a9a9d899921ee1046d0ff1b389967a9976d1c6112ebbbe071ddd1ef374-image.png)
  
</Info>

## 📍 Network & Demo Contract

This quickstart is configured to run on **Arbitrum Sepolia** testnet, by default. A free demo NFT contract has been deployed specifically for this quickstart, allowing you to mint NFTs without any setup or deployment steps. The contract is pre-configured and ready to use out of the box.

## 🚀 Quick start

### Scaffold a new app

```bash
npm create next-app smart-wallets-quickstart -- --example https://github.com/alchemyplatform/smart-wallets-quickstart
cd smart-wallets-quickstart
```

### 🔧 Configure

Get your pre-configured API key and policy ID from the [Smart Wallets dashboard](https://dashboard.alchemy.com/services/smart-wallets/configuration) by viewing one of your configurations. You will get a default app, configuration, and sponsorship policy created for you to quickly start testing.

Once you have your keys, add them to your `.env.local ` file.

```bash
cp .env.example .env.local      # create if missing
# add NEXT_PUBLIC_ALCHEMY_API_KEY=...
# add NEXT_PUBLIC_ALCHEMY_POLICY_ID=...
```

| Variable                        | Purpose                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_ALCHEMY_API_KEY`   | API key for your Alchemy [app](https://dashboard.alchemy.com/services/smart-wallets/configuration)          |
| `NEXT_PUBLIC_ALCHEMY_POLICY_ID` | Gas Manager policy ID for [sponsorship](https://dashboard.alchemy.com/services/smart-wallets/configuration) |

If instead you want to set up your own configurations from scratch you should:

1. Create a new Alchemy [app](https://dashboard.alchemy.com/apps)
2. Set up a new Smart Wallet [configruation](https://dashboard.alchemy.com/services/smart-wallets/configuration) for your app to specify login methods
3. Create a gas sponsorship [policy](https://dashboard.alchemy.com/services/gas-manager/configuration) for your app

Note: for production, you should [protect](https://www.alchemy.com/docs/wallets/resources/faqs#how-should-i-protect-my-api-key-and-policy-id-in-the-frontend) your API key and policy ID behind a server rather than exposing client side.

### Run your app!

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), first **Login**, then try minting a new NFT.

Congrats! You've created a new smart wallet and sent your first sponsored transaction!

See what else you can do with [smart wallets](https://www.alchemy.com/docs/wallets/react/overview).

## 🗂 Project layout

```
app/           # Next.js pages & components
components/ui/ # shadcn/ui primitives
lib/           # constants & helpers
config.ts      # Account Kit + Gas Sponsorship setup
tailwind.config.ts
```

## 🏗️ How it works

1. `config.ts` initializes Account Kit with your API key, chain, and Gas Sponsorship policy.
2. `Providers` wraps the app with `AlchemyAccountProvider` & React Query.
3. `LoginCard` opens the authentication modal (`useAuthModal`).
4. After login, `useSmartAccountClient` exposes the smart wallet.
5. `NftMintCard` uses `useSendUserOperation` to call `mintTo()` on the demo ERC‑721, with gas paid by the Paymaster.

## 📚 Docs & resources

- React Quickstart → [https://www.alchemy.com/docs/wallets/react/quickstart](https://www.alchemy.com/docs/wallets/react/quickstart)
- Gas Manager quickstart → [https://www.alchemy.com/docs/wallets/infra/quickstart](https://www.alchemy.com/docs/wallets/infra/quickstart)

## 🖥 Scripts

```bash
npm run dev     # start development server
npm run build   # production build
npm run start   # run production build
npm run lint    # lint code
```

## 🛂 License

MIT
