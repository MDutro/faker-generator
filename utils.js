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

    // Inquiry date
    dateArr.push(faker.date.past());
    // Active date
    dateArr.push(faker.date.recent({days: 20}));
    // Assigned date
    dateArr.push(faker.date.recent({days: 5, refDate: dateArr[1]}));

    console.log(dateArr);
    return dateArr;
}
getDates();
module.exports = { getRandomValuesString, getDates }