import { ethers, upgrades } from "hardhat";

async function main() {
    // goerli Deployed AGICoin to 0xa49573920bd91e61bd46669059E80288FB44FAa0
    // goerli Deployed ESAGIToken to 0x6bCdeB6457982b26A244521CC3A129571BAB8D22 
    const ESAGIToken = await ethers.getContractFactory('ESAGIToken');
    const contract = await ESAGIToken.deploy('0xa49573920bd91e61bd46669059E80288FB44FAa0');
    console.log(`Deployed ESAGIToken to ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});