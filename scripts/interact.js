const { ethers } = require("hardhat");
require("dotenv").config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
  const MySepoliaFactory = await ethers.getContractFactory("MySepolia");
  MySepoliaContract = await MySepoliaFactory.attach(CONTRACT_ADDRESS);

  // Reading the current message stored
  const message = await MySepoliaContract.message();
  console.log("the message is " + message);

  // Updating the current message
  const tx = await MySepoliaContract.update("Second tx :>");
  await tx.wait();

  const nmessage = await MySepoliaContract.message();
  console.log("the new message is " + nmessage);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
