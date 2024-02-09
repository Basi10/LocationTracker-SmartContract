// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // State variable to store an integer value
    int private bal;

    constructor() public
    {
        bal = 1;
    }

    function getBalance() view public returns(int)
    {
        return bal;
    }

    function deposit(int amt) public
    {
        bal = bal + amt;
    }
}
