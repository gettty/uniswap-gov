async function main() {
    const Timelock = await ethers.getContractFactory("Timelock");
    const timelock = await Timelock.deploy('0x0Db512F899Fc54Df34DdE5C6Ba136EcD52a8DC38',600);
  
    console.log("timelock address:", timelock.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });