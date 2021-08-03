async function main() {
    const Delegator = await ethers.getContractFactory("GovernorBravoDelegator");
    const delegator = await Delegator.deploy("0xB0f2C282603595836eF1625533d1456424F4C71c",
    "0x07284122ac3c6937511bD5791E594eaf7d3482a5",
    "0xB0f2C282603595836eF1625533d1456424F4C71c",
    "0xD8bf60dfC5115F6cB99bb50502346E7b863800f1",
    "40320",
    "1",
    "2500000000000000000000000");
  
    console.log("Delegator address:", delegator.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });