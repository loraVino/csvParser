const papaparse = require('papaparse');
const fs = require('fs');

function fromCsv(filePath, outputPath) {
  const file = fs.readFileSync(filePath);
  const csv = papaparse.parse(file.toString(), { header: true, fastMode: true, skipEmptyLines: true });
  fs.writeFileSync(outputPath, JSON.stringify(csv.data));
}

function toCsv(filePath, outputPath) {
  const file = fs.readFileSync(filePath);
  const csv = papaparse.unparse(JSON.parse(file.toString()));
  fs.writeFileSync(outputPath, csv);
}


module.exports = { fromCsv, toCsv }
