async function main() {
    const Delegate = await ethers.getContractFactory("GovernorBravoDelegate");
    const delegate = await Delegate.deploy();
  
    console.log("Delegate address:", delegate.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });