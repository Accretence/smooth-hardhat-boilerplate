const hre = require('hardhat')

async function main() {
    const Contract = await hre.ethers.getContractFactory('NFT')
    const contract = await Contract.deploy()

    await contract.deployed()

    console.log('Contract deployed to:', contract.address)

    const network = await ethers.provider.getNetwork()
    const networkName = network.name == 'unknown' ? 'localhost' : network.name

    console.log(`Network: ${networkName} (chainId=${network.chainId})`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
