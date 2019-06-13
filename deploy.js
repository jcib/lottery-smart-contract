const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode } = require('./compile');

const provider = new HDWalletProvider (
    'endless employ shrug judge member process enough bullet cushion violin fiction recall',
    'https://rinkeby.infura.io/v3/f47abf04748e4caab8e75b9dfef6128e'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to:', result.options.address);
};

deploy();