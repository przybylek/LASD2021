const csv = require('csv-parser')
const fs = require('fs')

export function getCommittee() {
  const results = [];
  fs.createReadStream('./../documents/committee2021.csv')
  .pipe(csv({ separator: ';' }))
  .on('data', (data) => results.push(data));

  return results;
}