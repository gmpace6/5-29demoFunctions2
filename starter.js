////////////////////////
////// CALCULATOR //////
////////////////////////

const a = (num1, num2) => num1 + num2
const s = (num1, num2) => num1 - num2
const m = (num1, num2) => num1 * num2
const d = (num1, num2) => num1 / num2

const calculator = (num1, num2, cb) => {
  return cb (num1, num2)
}
console.log(calculator(4, 5, d))

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'scratching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount)
}

const applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount
}

const applyDiscounts = (arr, cb, discount) => {
  arr.forEach(product => {
    cb(product, discount)
  })
}
applyDiscounts(dogProducts, applyPercentDiscount, .1)
console.log(dogProducts)

applyDiscounts(catProducts, applyFlatRateDiscount, .5)
console.log(catProducts)


////////////////////////
////// SANDWICHES //////
////////////////////////

function makeSandwich(bread) {
  return function(ingredients) {
    let order = `You ordered a ${bread} sandwich with: `

    for(let i = 0; i < ingredients.length; i++) {
      if(i === ingredients.length - 1 && i != 0) {
        order += `and ${ingredients[i]}.`
      }else if (ingredients.length === 1) {
        order += `${ingredients[i]} `
      }else {
        order += `${ingredients[i]}, `
      }
    }
    return order
  }
}

const makeWheatSandwich = makeSandwich('wheat')
const makeRyeSandwich = makeSandwich('rye')
const makeWhiteSandwich = makeSandwich('white bread')
const makeGarlicBreadSandwich = makeSandwich('garlic bread')

console.log(makeRyeSandwich(['corned beef', 'swiss', 'tomato', 'sauerkraut']))
console.log(makeGarlicBreadSandwich(['meatballs', 'mozzarella', 'marinara', 'stewed tomatoes']))
console.log(makeWhiteSandwich(['peanut butter', 'jelly']))

const lotr = ['biLbO BaGGINs', 'leGOlAS', 'gAndAlf tHE grEY']

const copyArrAndChange = (arr, cb) => {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    let newValue = cb(arr[i])
    result.push(newValue)
  }
  return result
}

const copyStrToCamelCase = str => {
  const splitStr = str.split(' ')
  let camelCaseStr = ''
  for (let x = 0; x < splitStr.length; x++) {
    let word = splitStr[x]
    word = word.toLowerCase()
    if (x !== 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1)
    }
    camelCaseStr += word
  }
  return camelCaseStr
}
console.log(copyArrAndChange(lotr, copyStrToCamelCase))

const copyStrToSnakeCase = str => {
  str = str.toLowerCase()
  const splitStr = str.split(' ')
  const snakeCaseStr = splitStr.join('_')
  return snakeCaseStr
}
console.log(copyArrAndChange(lotr, copyStrToSnakeCase))

const colors = ['red', 'blue', 'yellow', 'green', 'orange']
const mappedColors = colors.map(function(){
  return 'pink'
})
console.log(mappedColors)

const mappedColors1 = colors.map(() => 'pink')
console.log(mappedColors1)

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
  return names.map((name) => `Hello, ${name}`)
}
console.log(formalGreeting(formalNames))


const places = ['Albany', 'New York', 'Auburn']

const placesThatStartWithA = places.filter(city => city[0] === "A")
console.log(placesThatStartWithA)

let jobs = [
  {receptionist: "James"},
  {programmer: "Steve"},
  {designer: "Alicia"},
]

const identifier = arr => {
  const filteredArr = arr.filter(job => job.programmer)
  return filteredArr[0]
}
console.log(identifier(jobs))


const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
  return numbers.reduce((acc, curr) => acc * curr)
}
console.log(productOfArray(numsToReduce))


const budget = 2000

const expenses = [
  {
    tile: 'rent',
    amount: 1000
  },
  {
    title: 'car payment',
    amount: 250
  },
  {
    title: 'food',
    amount: 300
  },
]

const remaining = expenses.reduce((acc, curr) => acc - curr.amount, budget)
console.log(remaining)