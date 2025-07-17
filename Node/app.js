// // const addfuntion = require('./math')
// import addfuntion from './math.js'

// // console.log(addfuntion(4,56));
// addfuntion.add(43,5)
// addfuntion.sub(43,5)
// addfuntion.Mul(43,5)
// addfuntion.Div(43,5)


let args = process.argv;
for (let i = 2; i < args.length; i++) {
    console.log('Hello ' + args[i]);
}

