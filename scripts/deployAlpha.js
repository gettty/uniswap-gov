async function main() {
    const GovernorAlpha = await ethers.getContractFactory("contracts/GovernorAlpha.sol:GovernorAlpha");
    const governoralpha = await GovernorAlpha.deploy();
  
    console.log("governoralpha address:", governoralpha.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });