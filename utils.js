const { faker } = require("@faker-js/faker");

function getRandomValuesString(arr, specialValue="") {
    let result = []
    let max = Math.floor(Math.random() * (arr.length - 1) +1)

    for (let i = 0; i <= max; i++) {
        result.push(arr[Math.floor(Math.random() * arr.length)])
    }
    let uniqueResult = [...new Set(result)]

    // i.e. "all of the above" or similar value in a multiselect
    if (specialValue && uniqueResult.includes(specialValue)) return specialValue;

    let resultString = uniqueResult.join(";")
   
    return resultString
}


function getDates() {
    let dateArr = [];
    let dateSequence = []
    // Inquiry date
    dateArr.push(faker.date.between({ from: '2022-09-22T00:00:00.000Z', to: '2023-07-01T00:00:00.000Z' }))
    // count = number of dates to generate in sequential order
    dateSequence = faker.date.betweens({ from: dateArr[0], to: faker.date.recent(), count: 7 })
    return [...dateArr, ...dateSequence];
}

// console.log(getDates());
module.exports = { getRandomValuesString, getDates }