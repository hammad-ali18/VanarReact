import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "solidity-coverage";


import { resolve } from "path";

import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-etherscan";


require("@nomiclabs/hardhat-ethers");

dotenvConfig({ path: resolve(__dirname, "./.env") });

const chainIds = {
  ganache: 31337,
  goerli: 5,
  hardhat: 1337,
  kovan: 42,
  mainnet: 1,
  bscmainnet: 56,
  matic: 137,
  rinkeby: 4,
  ropsten: 3,
  bsctestnet: 97,
  mumbai:80001 ,
};

// Ensure that we have all the environment variables we need.
let privateKey: string;
if (!process.env.PRIVATE_KEY) {
  throw new Error("Please set your PRIVATE_KEY in a .env file");
} else {
  privateKey = process.env.PRIVATE_KEY;
}

let infuraApiKey: string;
if (!process.env.INFURA_API_KEY) {
  throw new Error("Please set your INFURA_API_KEY in a .env file");
} else {
  infuraApiKey = process.env.INFURA_API_KEY;
}



const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {

    localhost: {
      url: "http://127.0.0.1:8545",
     
      // forking:{
      //   url:"https://mainnet.infura.io/v3/01b94e7cd6fb4a8998e35d74593f3fac",
      //   blockNumber:18233332

      // }
    },
    hardhat:{
    
      forking:{
      
        url:"https://mainnet.infura.io/v3/01b94e7cd6fb4a8998e35d74593f3fac",
        blockNumber:18233332
        
      }
    }
  },
  
  paths: {
    artifacts: "./src/react-app/src/artifacts",
    cache: "./src/react-app/src/cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          // https://hardhat.org/hardhat-network/#solidity-optimizer-support
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
      {
        version: "0.5.17",
        settings: {
          // https://hardhat.org/hardhat-network/#solidity-optimizer-support
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
      {
        version: "0.7.5",
        settings: {
          // https://hardhat.org/hardhat-network/#solidity-optimizer-support
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.4.17",
      },
    ],
  },

};

export default config;