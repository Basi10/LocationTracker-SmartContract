import React, { useState, useEffect } from "react";
import Web3 from "web3";

function CreateEmployee(){
    const [balance, setBalance] = useState(0);

  useEffect(() => {
    initWeb3();
  }, []);

  const initWeb3 = async () => {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        console.error("No Ethereum provider detected. Please install MetaMask.");
      }
    } catch (error) {
      console.error("Error initializing Web3:", error);
    }
  };

  const getBalance = async () => {
    try {
      const address = '0x571B3E5FC25BDE17fB190Cc7fDF5e664823e5251';
      const abi = [ 
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "amt",
              "type": "int256"
            }
          ],
          "name": "deposit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "getBalance",
          "outputs": [
            {
              "internalType": "int256",
              "name": "",
              "type": "int256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ];

      const contract = new window.web3.eth.Contract(abi, address);

      const result = await contract.methods.getBalance().call();
      setBalance(() => result); // Use a callback function
      console.log(result);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <button onClick={getBalance}>Get Balance</button>
      <p>Balance: {balance.toString()}</p>
    </div>
  );

}

export default CreateEmployee;