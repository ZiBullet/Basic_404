// Task 1
let carArr = [
    {
        name: 'Lacetti',
        price: 10666.83
    },
    {
        name: 'Tico',
        price: 2200
    },
    {
        name: 'BMW X5',
        price: 38000
    },
    {
        name: 'Mercedes-Benz E-320',
        price: 18500
    },
    {
        name: 'Nexia R3',
        price: 10059.52
    },
    {
        name: 'Spark 2',
        price: 8722.83
    },
    {
        name: 'Тележка из супермаркета',
        price: 120
    },
    {
        name: 'Ваз Lada',
        price: 3500
    },
    {
        name: 'Волга 31105',
        price: 4000
    },
    {
        name: 'Осел',
        price: 2487
    },
    {
        name: 'Запарож',
        price: 650
    },
    {
        name: 'Lamborghini Aventador',
        price: 454930
    },
    {
        name: 'Ferrari F8 Tributo V8',
        price: 368000
    },
    {
        name: 'Captiva Lux',
        price: 24031.75
    }
]
let cheap = []
let expensive = []
carArr.filter(item => {
    if (item.price >= 7000) {
        cheap.push(item)
    } else {
        expensive.push(item)
    }
})
console.log(expensive, cheap)
// Task 2
let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, true, 'error', 22]
let num = []
let bool = []
let str = []
let err = []
arr.filter(item => {
    if (typeof(item) === 'number') {
        num.push(item)
    } else if (typeof(item) === 'boolean') {
        bool.push(item)
    } else if (typeof(item) === 'string') {
        str.push(item)
    } else {
        err.push(item)
    }
})
console.log(num, bool, str, err)



// Task 3 Status: Not done at all




let arr2 = [1, 2, false, 'hello', 24, 2,  'world', undefined, null, 'error', 22] 
arr2.filter(item => {
    if (typeof(item) === 'number' || item >= 5) {
        console.log('Good')
    } else {
        console.log('Delete')
    }
})





// // Task 4 Status: Failed

// let arr3 = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']
// longStr = []
// let longString = arr3.filter(item => item.length < arr3[0].length ? longStr.push(item) : arr3)
// console.log(longStr)
