var Bankstatment = artifacts.require("./BankstatmentContract.sol");

module.exports = (deployer, network, accounts) => {
    let deployAddress = accounts[0];
    deployer.deploy(Bankstatment, { from: deployAddress });
};