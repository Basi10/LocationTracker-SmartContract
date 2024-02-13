const Web3 = require('web3');
const abi = require('./constants/contractABI.json');

const address = '0x571B3E5FC25BDE17fB190Cc7fDF5e664823e5251';

// Replace 'yourPrivateKey' with the private key of the account you're using to interact with the contract
const privateKey = 'yourPrivateKey';

// Create a contract instance
try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
      } else {
        console.error("No Ethereum provider detected. Please install MetaMask.");
      }
       const contract = new window.web3.eth.Contract(abi, address);

    } catch (error) {
      console.error("Error initializing Web3:", error);
    }

// Get current location using the browser's geolocation API
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        error => reject(error)
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}

// Replace 'yourAddress' with the address of the employee for whom you want to ingest coordinates
const empAddress = 'yourAddress';

// Example function to ingest current coordinates
async function ingestCurrentCoordinates() {
  try {
    const currentLocation = await getCurrentLocation();
    const { lat, lon } = currentLocation;

    // Replace 'yourGasPrice' and 'yourGasLimit' with appropriate values
    const gasPrice = 'yourGasPrice';
    const gasLimit = 'yourGasLimit';

    // Build the transaction
    const transaction = contractInstance.methods.ingestCoordinate(empAddress, lat, lon, 0);
    const encodedTransaction = transaction.encodeABI();

    // Estimate gas
    const gasEstimate = await transaction.estimateGas({ from: 'yourAddress' });

    // Build the transaction object
    const transactionObject = {
      gasPrice: web3.utils.toWei(gasPrice, 'gwei'),
      gasLimit: gasEstimate,
      data: encodedTransaction,
      from: 'yourAddress',
      to: contractAddress
    };

    // Sign and send the transaction
    const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

    console.log('Transaction Hash:', receipt.transactionHash);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to ingest current coordinates
ingestCurrentCoordinates();


