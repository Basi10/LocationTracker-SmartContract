require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    localhost: {
      url: "http://localhost:7545", // Use the default Hardhat network URL
      accounts: [
        "0x5b2acb5861269f6a10f6889d734b484719a11e74410decb7b91f9bc3a91657da"
      ]
    }
  }
};
