const findingXYZ = (req, res) => {
    let number = [5, 9, 15, 23]

    for (let index = 0; index < 6; index++) {

        if(index === 0 || index === 1)
            number.unshift(number[index] - (number[index + 1] - number[index] - 2))

        if(index === 5)
            number.push(number[index] + (number[index] - number[index - 1] + 2))    
  
    }

    let x = number[0]
    let y = number[1]
    let z = number[6]

    res.json({answer: 'X = ' + x + ', Y = ' + y + ', Z = ' + z})
}

const findingBC = (req, res) => {
    let a = 21
    let b = 23 - a
    let c = -21 - a

    res.json({answer: 'B = ' + a + ', C = ' + b})
}

module.exports = { findingXYZ, findingBC }