async function main() {
    const Delegator = await ethers.getContractFactory("GovernorBravoDelegator");
    const delegator = await Delegator.deploy("0x1a9C8182C09F50C8318d769245beA52c32BE35BC",
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    "0x1a9C8182C09F50C8318d769245beA52c32BE35BC",
    "0xaDc17CaBe2E4D9dF093C014E16AD15B085F3670e",
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