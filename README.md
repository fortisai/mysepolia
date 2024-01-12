# MySepolia Sample ETH Sepolia Contract

## Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 10.16.0)

## Deployment

1. Install project

```bash
npm init --yes
npm install --force
npx hardhat init
```

2. Create an `.env` file from the `.env.example`

3. Deploy with

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

4. Fill out `CONTRACT_ADDRESS` in `.env` with the deployed contract address

5. _(Optional)_ Run interaction

```bash
npx hardhat run scripts/interact.js --network sepolia
```
