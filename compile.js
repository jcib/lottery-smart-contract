const path = require('path'); //nos asegura compatibilidad entre sistemas
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8'); //leemos el código fuente del contrato

module.exports = solc.compile(source, 1).contracts[':Lottery']; //lo hacemos visible para cualquier otro archivo
//nos interesan sólo el bytecode y el ABI