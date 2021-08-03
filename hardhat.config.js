require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    version: "0.5.16",
    settings : {
      "evmVersion": "istanbul",
        "libraries": {},
        "metadata": {
          "useLiteralContent": true
        },
        "optimizer": {
          "enabled": true,
          "runs": 200
        },
        "remappings": [],
        "outputSelection": {
          "*": {
            "*": [
              "evm.bytecode",
              "evm.deployedBytecode",
              "abi"
            ]
          }
        }
    }
  },
  networks: {
    ropsten: {
      url: process.env.infura,
      accounts: [process.env.pk],
      gasPrice: 20000000000
    },
    mainnet: {
      url: process.env.infuraMain,
      accounts: [process.env.pkMainnet],
      gasPrice: 19500000000
    }
  },
  etherscan: {
    apiKey: process.env.etherscan
  }
  
};