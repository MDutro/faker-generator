function getRandomValuesString(arr) {
    let result = []
    let max = Math.floor(Math.random() * (arr.length - 1) +1)

    for (let i = 0; i <= max; i++) {
        result.push(arr[Math.floor(Math.random() * arr.length)])
    }
    let uniqueResult = [...new Set(result)]

    let resultString = uniqueResult.join(",")
   
    return resultString
}

module.exports = { getRandomValuesString }