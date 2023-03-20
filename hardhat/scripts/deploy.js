const hre = require("hardhat");

async function main() {
  const skinsContract = await hre.ethers.getContractFactory("Skins");
  const skinsDeployed = await skinsContract.deploy();

  await skinsDeployed.deployed();

  console.log(`Deployed to ${skinsDeployed.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Goerli: 0xe937c538C86C3B220F53942aB6A045b926E654cf
// Mumbai: 0xeA917733cF4028B90b6229273446C057Bc681164
// Binance: 0xD58204267F48f61b3b0F8E1CC4c52F8fdf5eDb70
