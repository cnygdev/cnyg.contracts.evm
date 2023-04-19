import { HardhatUserConfig } from "hardhat/types"
import "hardhat-deploy"
import "hardhat-deploy-ethers"
import "hardhat-contract-sizer"
import "hardhat-gas-reporter"
import "solidity-coverage"
import { node_url, accounts } from "./utils/network"
import "@openzeppelin/hardhat-upgrades"
import "hardhat-abi-exporter"
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.4.18",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.5.16",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.6.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.8",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    defaultNetwork: "localhost",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        ethtest: {
            url: node_url("ethtest"),
            accounts: accounts("ethtest"),
            chainId: 5,
            // chainId: 11155111,
        },
        ethmain: {
            url: node_url("ethmain"),
            accounts: accounts("ethmain"),
        },
        bsctest: {
            url: node_url("bsctest"),
            accounts: accounts("bsctest"),
        },
        bscmain: {
            url: node_url("bscmain"),
            accounts: accounts("bscmain"),
        },
        evatest: {
            url: node_url("evatest"),
            accounts: accounts("evatest"),
            gas: 20000000,
            gasPrice: 1500000000,
            // default value
            // gas: "auto",
        },
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/MVArgf3CMjoibDeLTTbf-x3gLg5rKm4R",
            accounts: ["0x9b5e64ac67d3dd0ce8681cfaecdaa649fd59e32d22e6bda84ff9ea9eac0fd8b0"],
            chainId: 5,
        },
    },
    namedAccounts: {
        deployer: 0,
        tokenOwner: 1,
    },
    paths: {
        sources: "contracts",
    },
    contractSizer: {
        alphaSort: true,
        disambiguatePaths: false,
        runOnCompile: true,
        strict: true,
        only: ["NFTOne", "ERC20CNYG"],
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-reporter.txt",
        noColors: true,
    },
    abiExporter: {
        path: "./abi",
        runOnCompile: true,
        clear: true,
        flat: true,
        only: [
            "NFTOneERC721$",
            "NFTOneERC1155$",
            "NFTOneMarket$",
            "NFTOneMarketV2$",
            "TetherToken$",
            "FiatTokenV1$",
            "NFTOneIPZone$",
            "ERC20CNYG$",
        ],
        spacing: 2,
        pretty: false,
        format: "json",
    },
    etherscan: {
        apiKey: "5BF1FUCMVGY3M9EI4DT8NQ1ZAKBFP9RFYG"
    }
}

export default config
