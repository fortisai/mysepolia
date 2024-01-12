require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY, RPC_URL } = process.env;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
