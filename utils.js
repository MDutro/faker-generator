function getRandomValuesString(arr, specialValue="") {
    let result = []
    let max = Math.floor(Math.random() * (arr.length - 1) +1)

    for (let i = 0; i <= max; i++) {
        result.push(arr[Math.floor(Math.random() * arr.length)])
    }
    let uniqueResult = [...new Set(result)]

    // i.e. "all of the above" or similar value in a multiselect
    if (specialValue && uniqueResult.includes(specialValue)) return specialValue;

    let resultString = uniqueResult.join(",")
   
    return resultString
}

module.exports = { getRandomValuesString }