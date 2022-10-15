const main = async () => {
  //compiles our contract, generates nessesary files in /artifacts - needs to match contract name exactly
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  //deploys a fresh eth network for us every time we run
  const waveContract = await waveContractFactory.deploy();
  // waits until our contract is actually deployed to blockchain for our constuctor to run
  await waveContract.deployed();

  //will give us the address of the deployed contact, we need this address to find our contract on the blockchain`
  console.log("contract deployed to:", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();