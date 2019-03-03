let increment1counter = 0

const funcGen = ()=>{ 
    let startNum=0
    const incrementFunc =()=>{
        startNum++
        increment1counter++
        console.log(`   startNum Value: ${startNum}`)
        console.log(`increment1counter: ${increment1counter}`)
    }
    return incrementFunc
}



// const incrementGenerator =(startNum)=>{
//     const incrementNum= (increment)=>{
//         startNum+=increment
//         return startNum
//     }
//     return incrementNum
// }

// const exponentSum = (num)=>{
//     const add=(a,b)=>{
//         return a+b
//     }
//     const oddOrEven = (number)=>{
//         console.log(number)
//         console.log(number %2 ===0 ? 'odd':'even');
//     }
//     const func =(param1, param2)=>{
//         let sum = add(param1, param2)
//         oddOrEven(sum)
//         return (num = num **2 +sum)
//     }
//     return func
// }






// `
// odd
// 7
// 7
// even
// 52
// 52
// odd
// 2707
// 2707
// even
// 7327853
// `
// const increment1 = funcGen()
// const increment10 = funcGen()

// start100 = incrementGenerator(100)
// start50 = incrementGenerator(50)

// increment1()
// increment1()
// console.log('===============================')
// increment10()
// increment10()



// console.log(start100(40))
// console.log(start100(200))

// console.log(start50(30))
// console.log(start50(1))

// const number= start50(1)
// const othernumber = start100(20)
// console.log(number+othernumber)



// const exp1= exponentSum(2)

// console.log(exp1(1,2))
// console.log(exp1(1,2))
// console.log(exp1(1,2))
// console.log(exp1(2,2))


let result = [];

for (let i = 0; i < 10; i++) {
    let num = 2
    
    i%2===0 
    ? result[i] = ()=>{
        
        return i= i **2
    }
    : result[i] = ()=>{
        return num = num+num
    }
 }

state1 = result[4]()
state2 = result[4]()

stateA = result[2]()
stateB = result[2]()

console.log(state1)
console.log(state1)

console.log(state2)
console.log(state2)

console.log(stateA)
console.log(stateA)
console.log(stateB)
console.log(stateB)



