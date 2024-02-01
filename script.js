function abc(r = 0) {
    // () = Argument operatori
    return 2 * 3,14 * r;
}

let a = abc(5)
let b = abc(12)
let c = abc()
console.log(a);
console.log(b);
console.log(c);
//? Parametr Operatori
// console.log('Salom Dunyo');
// Funksiyalar turlari

// Deklarativ
test()
function test(){
    console.log('test');
}
test()

 // EXPRESS
let g = function () {
    console.log("EXPRESS");
    console.log(this);
}
g()

// ARROW
let h = () => {
    console.log('ARROW');
}

let k = text => text
// 1. Agar kod bir qator bo`lsa {} aqvs kerak emas
// 2. Agar kod bir qator bo`lsa return operatori kerak emas
// 3. Agar argument 1 ta bo`lsa u holda () operatori kerak emas
// 4. ARROWda this operatori ishlamaydi
h()

let fn = {
    a:function () {
        console.log("EXPRESS");
        console.log(this);
    },
    b: () => {
        console.log('ARROW');
        console.log(this);
    } 
}

fn.a()
fn.b()
function fn1(){
    console.log('2');
}
function fn2(fn){
    console.log(1);
    fn()
}

fn2(fn1)

fn2 (()=>{
    console.log('jhbcjh');
})

fn2 ( function() {
    console.log(1234568798);
})

setTimeout(fn1,3000)



// function summ(a, b){
//     return a + b
// }

// let s = summ(15, 25)
// console.log(s);
