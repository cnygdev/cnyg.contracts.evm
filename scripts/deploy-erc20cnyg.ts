import { ethers, upgrades } from "hardhat"

async function main() {
    // Deploying
    const CNYG = await ethers.getContractFactory("ERC20CNYG")
    console.log("Deploying ERC20CNYG...")
    
    // 100CNYG起收税 
    // 收税上限50CNYG 
    // 0.05% 
    // 收税钱包（推荐使用多签钱包）
    const market = await upgrades.deployProxy(CNYG, [
        "100000000", 
        "50000000", 
        5, 
        "0x8E7fc78e30627Be46A6a69dAbcac23b2534F843a"
    ], {
        initializer: "initialize",
        kind: "uups",
    })
    await market.deployed()
    console.log("ERC20CNYG Proxy deployed address", market.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exitCode = 1
    })
