async function main() {
  const MySepolia = await ethers.getContractFactory("MySepolia");
  console.log("Deploying Contract...")
  const mySepolia = await MySepolia.deploy("This works! :O");
  const txHash = mySepolia.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  console.log("Contract deployed to address:",  txReceipt.contractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
