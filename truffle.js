require('babel-register');
let secrets = require("./secrets");
//const dotenv = require('dotenv').config();
var HDWalletProvider = require('truffle-hdwallet-provider');
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

let mainNetPrivateKey = new Buffer(secrets.mainnetPK, "hex");
let mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
console.log(mainNetPrivateKey);
let mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/v3/" + secrets.infura_apikey);

let ropstenPrivateKey = new Buffer(secrets.ropstenPK, "hex");
let ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
console.log(ropstenPrivateKey);
let ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/v3/" + secrets.infura_apikey);

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*",
            gas: 4465030
        },
        ropsten: {
            provider: ropstenProvider,
            network_id: "3",
            gas: 3000000,
            gasPrice: 2000000000
        },
        live: {
            provider: mainNetProvider,
            network_id: "1",
            gas: 500000,
            gasPrice: 30000000000
        }
    }
};