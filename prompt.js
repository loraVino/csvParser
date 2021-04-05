const Enquirer = require('enquirer');
const enquirer = new Enquirer();
const { toCsv, fromCsv } = require('./parser')

async function runPrompt(){
  const answer = await enquirer.prompt({
    name: 'command',
    type: 'select',
    choices: ['fromCsv', 'toCsv'],
    message: 'What do you want to do?'
  });
    if(answer.command === 'toCsv'){
      const { filePath, outputPath } = await enquirer.prompt([{
        name: 'filePath',
        type: 'input',
        message: 'Enter the the path to file containing JSON'
      },  {
        name: 'outputPath',
        type: 'input',
        message: 'Choose the output path'
      }]);
      toCsv(filePath, outputPath);
    }
    else{
      const { filePath, outputPath } = await enquirer.prompt([{
        name: 'filePath',
        type: 'input',
        message: 'Enter the the path to file containing csv'
      }, {
        name: 'outputPath',
        type: 'input',
        message: 'Choose the output path'
      }]);
      fromCsv(filePath, outputPath);
    }
}

module.exports = {runPrompt}
