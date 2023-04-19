
## CNYG contract (EVM)

### 环境安装

1. nodejs(安装长期支持版本)

https://nodejs.org/en

https://nodejs.org/dist/v18.16.0/node-v18.16.0.pkg

安装 yarn

```
npm install -g yarn
```

2. 进入当前目录运行

```
yarn install
```

3. 编辑CNYG合约

```
yarn compile
```

### 部署合约

2.1 部署cnyg合约

请替换.env文件中的助记词

请替换 scripts/deploy-erc20cnyg.ts 部署配置项

```
// 转账100CNYG起收税 
// 收税上限50CNYG 
// 0.05% 
// 收税钱包（推荐使用多签钱包）
const market = await upgrades.deployProxy(CNYG, [
    "100000000", 
    "50000000", 
    5, 
    "0x8E7fc78e30627Be46A6a69dAbcac23b2534F843a"
],
```

```
yarn deploy-cnyg-ethtest

Deploying ERC20CNYG...
ERC20CNYG Proxy deployed address 0x51E829dE2ddA29608b764cdAA03aFC133Ca345D3
✨  Done in 60.15s.
```

部署成功 https://goerli.etherscan.io/address/0x51e829de2dda29608b764cdaa03afc133ca345d3


2.2 升级cnyg合约

```
yarn upgrade-cnyg-ethtest
```

2.3 合约验证（合约代码开源）

* hardhat.config.ts 文件中替换 apiKey 参数

```
etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY"
}
```

* CNYG合约开源

```
yarn hardhat verify --network ethtest 0xB818438A5d38966B5f9F6F785CE7cDF67d45E346

Successfully submitted source code for contract
contracts/ERC20CNYG.sol:ERC20CNYG at 0xB818438A5d38966B5f9F6F785CE7cDF67d45E346
for verification on the block explorer. Waiting for verification result...
Successfully verified contract ERC20CNYG on Etherscan.
https://goerli.etherscan.io/address/0xB818438A5d38966B5f9F6F785CE7cDF67d45E346#code
✨  Done in 11.59s.
```

* 代理合约开源

```
yarn hardhat verify --network ethtest 0x51E829dE2ddA29608b764cdAA03aFC133Ca345D3
```

api-key获取

https://etherscan.io/

注册完账号，打开 https://etherscan.io/myapikey 添加一个apikey

### 多签钱包

https://app.safe.global/home

在线创建（支持eth Goerli测试链）
