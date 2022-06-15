// https://eth-mainnet.alchemyapi.io/v2/DsYKBeI-XScKl9WICHAG5wXqpzFNEAdP

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: " https://eth-mainnet.alchemyapi.io/v2/DsYKBeI-XScKl9WICHAG5wXqpzFNEAdP",
      accounts: [
        "91009598924499a6af0581c06ebe2efbb3b4825f6b7880f5b2360f266b6f0d24",
      ],
    },
  },
};
