require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind around good kite orange genius'; 
let testAccounts = [
"0x98c56bcd7af4ffddd634c5aaf8150dafe54b73b9e07f455393af48e5d050ba07",
"0x038f4956e52add14b6507a7fbb8b29bb80a3867c613d946a1a8915456012af1e",
"0x02d6e8e077fd97299e75c1fd08ad87a70b7b5092c461883cd8dca0569708b960",
"0xf5cfc5d1ff9f11186514d74e42f5691fea74933743b817a84bd4bcce4e9ac821",
"0xb11cb5c045fc918c026681d4019b14e1c7c9efe7bf69a5698fbfb717e17feaae",
"0x0ad4b5d65dbd618e58fa799bc390da47e317323e81b677112474de028540d255",
"0x10e4fb6b2b4dbcb6e2331093dcb3c9ac8b4451c2b36fdcdf4dc4d03567fe3dcb",
"0x2d561d2cd0fa07d5a2ba2a1eec8fe6b7856d82cd0b533b7aa1ea1e16ba1ad0e0",
"0x3c338ac2ae071022c78a49c45676d483f2c8577f5148d4a1263a9d5463067c09",
"0xbd4d0d486d65adbeaa59be5e0a0abac167329908c267e9292098225482e65807"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
