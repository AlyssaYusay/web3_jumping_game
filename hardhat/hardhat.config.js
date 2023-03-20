require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    // goerli: {
    //   url: process.env.GOERLI_URL,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    // mumbai: {
    //   url: process.env.MUMBAI_URL,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    binance: {
      url: process.env.BINANCE_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
