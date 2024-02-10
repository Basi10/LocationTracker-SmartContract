//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Refund {
    address owner;
    struct EmployeeDetail {
        string name;
        uint256 lat;
        uint256 lon;
        uint256 allowedDistance;
    }
    struct conditionDetail {
        string status;
        bool condition;
    }

    mapping (address => EmployeeDetail) employeeDetail;
    // mapping(address => bool) public employeeCondition;
    mapping(address => conditionDetail) public employeeCondition;
    address[] public employees;


    constructor() {
        owner = msg.sender;
        console.log("Deploying a Refund with Owner:", owner);
    }

    modifier onlyOwner() {
    require(msg.sender == owner, "Only the owner can call this function");
    _;
    }

    function createEmployee(address empAddress, string memory name, uint256 lat, uint256 lon, uint256 allowedDistance) public onlyOwner {
        // restrict employee creation to owner
        require(msg.sender == owner);
        // set User name using the employeeDetail mapping
        employeeDetail[empAddress].name = name;
        // set Employee lat using the userStructs mapping
        employeeDetail[empAddress].lat = lat;
        // set Employee lon using the employeeDetail mapping
        employeeDetail[empAddress].lon = lon;
        // set the Employee's allowed distance using the employeeDetail mapping
        employeeDetail[empAddress].allowedDistance = allowedDistance;

        // Set default employee condition to not verified
        employeeCondition[empAddress].status = "Not Verified";
        employeeCondition[empAddress].condition = false;

        // push user address into userAddresses array
        employees.push(empAddress);
    }



    
    function getEmployeeDetail(address empAddress) public view returns (string memory, uint256, uint256, uint256) {
        return (employeeDetail[empAddress].name, employeeDetail[empAddress].lat, employeeDetail[empAddress].lon, employeeDetail[empAddress].allowedDistance);
    }

    function ingestCoordinate(address empAdderss, uint256 lat, uint256 lon, uint256 etimestamp) public  {
       require(etimestamp >= 0 && etimestamp <= 12 || etimestamp >= 18 && etimestamp <= 22);
       uint256 distance = calculateDistance(lat, lon);
       
       if (distance > employeeDetail[empAdderss].allowedDistance) {
        //    employeeCondition[msg.sender] = false;
            // Set default employee condition to not verified
            employeeCondition[empAdderss].status = "Verified";
            employeeCondition[empAdderss].condition = false;

       } else {
           employeeCondition[empAdderss].status = "Verified";
           employeeCondition[empAdderss].condition = true;
       }

    }

    function getEmployees() public view returns (address[] memory) {
        return employees;
    }

    function calculateDistance(uint256 lat2, uint256 lon2) public view returns (uint256 dist) {
    (,uint256 lat1, uint256 lon1,) = getEmployeeDetail(msg.sender);
    uint256 distance = uint256(sqrt((lat2 - lat1)**2 + (lon2 - lon1)**2));
    return distance;
    }

}
