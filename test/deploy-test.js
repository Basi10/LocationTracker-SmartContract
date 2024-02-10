const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("Refund", () => {
  let refundFactory, refund, owner;
  
  beforeEach(async () => {
    refundFactory = await ethers.getContractFactory("Refund");
    refund = await refundFactory.deploy();
    [owner] = await ethers.getSigners(); // Retrieve the first account as owner
  });

  it("should deploy the contract", async () => {
    const Refund = await ethers.getContractFactory("Refund");
    const refund = await Refund.deploy();
    assert.isDefined(refund.address);
  }).timeout(5000);

  it("Should have the correct owner address", async () => {
    const currentValue = await refund.getOwner();
    assert.equal(currentValue, owner.address, "Incorrect owner address");
  });

  it("Should create an employee with the given details", async () => {
    const tx = await refund.createEmployee(
      "0x3AB46836Ca9e5A5b517017bE886b6deB7Bab575F",
      "Abe",
      142,
      56,
      1
    );
    await tx.wait(1);
    const currentValue = await refund.getEmployeeDetail(
      "0x3AB46836Ca9e5A5b517017bE886b6deB7Bab575F"
    );
    const expectValue = ["Abe", 142, 56, 1];
    // assert
    assert.equal(currentValue[0], expectValue[0]);
    assert.equal(Number(currentValue[1]), expectValue[1]);
    assert.equal(Number(currentValue[2]), expectValue[2]);
    assert.equal(Number(currentValue[3]), expectValue[3]);
  });
});
