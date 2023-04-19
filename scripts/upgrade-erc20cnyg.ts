import { ethers, upgrades } from "hardhat"

async function main() {
    // CNYG合约代理地址
    const proxyAddress = "0x51E829dE2ddA29608b764cdAA03aFC133Ca345D3"

    const CNYGV2 = await ethers.getContractFactory("ERC20CNYG")
    console.log("CNYGV2 upgrade...")
    const cnygV2 = await upgrades.upgradeProxy(proxyAddress, CNYGV2)
    console.log("CNYGV2 at:", cnygV2.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
