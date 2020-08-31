// function sum() {
//     let total = 0;
//     for (let i=0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

function sum(...theArgs) {
    return theArgs.reduce((acc, el) => acc + el);
};


// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

// Function.prototype.myBind = function(...args){
//     const fn = this;
//     const boundArgs = args.slice(1,args.length);
//     return function(...moreArgs){
//         fn.apply(args[0],boundArgs.concat(moreArgs));
//     };
// };

Function.prototype.myBind = function (...args) {
    const fn = this;
    return function (...moreArgs) {
        fn.call(...args, ...moreArgs);
    };
};

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   binded_func = markov.says.myBind(pavlov, "meow", "Kush")();

//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true
  
// function curriedSum(n) {
//     let total = 0;
//     return function currySum(num) {
//         if (n === 1) {
//             total += num;
//             return total;
//         } else {
//             total += num;
//             n--;
//             return currySum;
//         }
//     }
// }

function curriedSum(n) {
    let arr = [];
    return function currySum(num) {
        arr.push(num);
        return (arr.length === n) ? arr.reduce((ac, el) => ac + el) : currySum;
    }
}

//const gum = curriedSum(4);
//console.log(gum(5)(30)(20)(1));
// 5   4   3
// 30  3   2
// 20  2   1
// 1   1   0

Function.prototype.curry = function (numArgs){
    const fn = this;
    const arr = [];
    return function qurry(n){
        arr.push(n);
        if (arr.length === numArgs) {
            // return fn.apply(this,arr);
            return fn(...arr);
        }else{
            return qurry;
        }
    };
};

const newNewCurrySum = sum.curry(4);
console.log(newNewCurrySum(5)(30)(20)(1));