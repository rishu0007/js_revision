// *************** let and const ***********************

/*  let and const dono se hum value store kar sakte hai, but
  dono differently behave karte hai, let change ho sakta hai
  and const nahi ho sakta, let ko first time value dena 
  jaruri nhi hai and const ko hai */

/* let and const dono different hai, matlab let makes a 
variable and const makes a constant */

// let and const are similar in few things :

// let and const dono es6 se hai

// let and const dono khudko window object mein add nhi krte hai

// let and const dono braces scoped hote hai





// ***************** arrow functions ******************

// old js had 3 types of functions, they were :

/* 1. function statement
   2. function expression
   3. anonymous function */

// new js have only one type of function but can be written in 3 ways

// arrow function :-
//  1. basic fat arrow function
    var fnc = () => {};

//  2. fat arrow function with one parameter
    var b = (parm) => {};
    b(12);

    // if only one parameter is needed then we can remove fat eg :-

    var a = parm => {};

//  3. fat arrow function with implicit return

    var g = () => 12;
    console.log(g());





// ******************* template literals backtick `` ***************

/* if we have to print something like this :-
  "hey 2+2 is 4 and 2-2 is 0 and if 2 is 3+2 and 6 is 3-4 print hello" */

console.log(`hey ${2+2} is 4 and ${2-2}....`);





// ************** default parameters *******************

// parameter me value dena default parameter h

function abcd (prm = 0) {
    console.log(prm);
}

abcd(12); // 12
abcd(122); // 122
abcd(); // 0





// ********************** rest and spread ********************

var aaa = [1,2,3,4,5,6];
var bbb = aaa; // this is not copy, this is refrencing
// to copy, we use spread 

/* NOTE :- spread and rest are different things with same symbol
 like "+" is used for addition as well as for concatenation  */

// ... spread/rest

var aa = [1,3,4,5,9,7,4,1];
var bb = [...aa]; // through this we can copy an array

// spread ka matlab hai element ke saare values ko us jagah par bikher dega 😄

/* -->> spred use hota hai copy ya fir us location pr kisi aur
         ki balues bikherne ke liye but,

   -->> rest use hota hai jab hame bache hue values ek variabe mai dalne ho eg below */

function abcde(u,v,w,...x) {
    console.log(u,v,w, x);
};

abcde(1,2,3,4,5,6,7);





// ******************** destructuring ******************************

var a = [1,2,3];
var [b,c] = a; // var [b,c] se array nhi bann rha, isse 2 variables bann rhe
var [d,,e] = a; // output : d = 1, e = 3
console.log(b,c);

var obj = {name: "Rishu", age: 21};
var {age} = obj; // age = 21
var {name} = obj; // name = Rishu
var {test} = obj; // undefined





// ********************** classes *********************************





// *********************** promise ********************************

var ans = new Promise((res, rej) => {
    if(true) {
        return res();
    }
    else {
        return rej();
    }
});

ans 
  .then(function() {
    console.log("resolve ho gya tha");
  })

  .catch(function() {
    console.log("reject hua tha");
  })


/* user will ask for number between 0 to 9 and if the number is
  below 5 then resolve if not, then reject */

var ans = new Promise((res, rej) => {
    var n = Math.floor(Math.random()*10);
    console.log(n);
    if(n < 5) {
        return res();
    }
    else {
        return rej();
    }
});

ans
    .then(function() {
        console.log("below");
    })
    .catch(function() {
        console.log("above");
    });


/* sabse pahle ghar par aao, 
    gate kholo aur gate lagao,
    khana pakao aur khana khao,
    phone chalao,
    aur sojao kyuki hum thak gaye hai */

// the above tasks are asynchronous but we want them in order

var ans = new Promise(function(res, rej) {
    return res("sabse pahle ghar par aao");
})

   // our promise is resolved fir uska then wla part chalega, matlab jab hamara ek asynchronous task 
   // complete ho jaye fir agle then ke andar hamara agla asynchronous task suru hoga

var p2 = ans.then(function(data) {  
    console.log(data);
    return new Promise(function(res, rej) {
        return res("gate kholo aur gate lagao");
    })
})

var p3 = p2.then(function(data) {
    console.log(data);
    return new Promise(function(res,rej) {
        return res("khana pakao aur khana khao");
    })
})

var p4 = p3.then(function(data) {
    console.log(data);
    return new Promise(function(res, rej) {
        return res("phone chalao");
    })
})

var p5 = p4.then(function(data) {
    console.log(data);
    return new Promise(function(res, rej) {
        return res("aur sojao kyuki hum thakk gaye hai");
    })
})

p5.then(function(data) {
    console.log(data);
})





// ************************* async await ********************************


/* koi bhi aisa function jisme hum async code likhenge, kyoki
    async code hai to hum promises ka uses kar sakte hai, jab uska answer
    ayega  to hume "then" lagana padega, uss "then" ko laganne se bachne k
    liye hum async await ka use kar sakte hai. */

/*

function abc() {
    fetch(`https://randomuser.me/api/`)
    .then(function(raw) {
        return raw.json();
    })
    .then(function(data) {
        console.log(data);
    });
}

abc();

*/

// the above code is used when we don't use async await

async function abc() {
    let raw = await fetch(`https://randomuser.me/api/`);
    let ans = await raw.json();
    console.log(ans)
};

abc();

/* ***** NOTE **** : jab bhi koi code async hai to hame useke liye wait karna padtha h
    kyuki hame nhi pta uska answer kab ayega */





// *************************** try catch *************************

console.log("hey");
try {
    console.log(hey);
} catch(err) {
    console.log(err);
}
console.log("hey");