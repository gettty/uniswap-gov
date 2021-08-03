async function main() {
    const Uni = await ethers.getContractFactory("Uni");
    const uni = await Uni.deploy("0x0db512f899fc54df34dde5c6ba136ecd52a8dc38","0x0db512f899fc54df34dde5c6ba136ecd52a8dc38",1704067200);
  
    console.log("uni address:", uni.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });