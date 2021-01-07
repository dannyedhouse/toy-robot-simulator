const chalk = require('chalk');

function displayInfo(infoMsg) {
    console.error(chalk.cyan(infoMsg));
}

function displayError(errorMsg) {
    console.error(chalk.red(errorMsg));
}

module.exports = {displayError, displayInfo}