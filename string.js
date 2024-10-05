// a="Rachana"
// console.log(a)
// val=a.toUpperCase();
// console.log(val)
// val=a.toLowerCase();
// console.log(val)
// val=a.charAt("2");
// console.log(val)
// val=a.indexOf('a');
// console.log(val)
// // val=a.lastindexOf('a');
// // console.log(val)
// val=a.split('');
// console.log(val)


// val=a.replace('Rachana','Rachu');
// console.log(val)

// b="Rachna"
// val=b.substring(1,4);
// console.log(val)

// // val=a.replace('Rachana','Rachu');
// // console.log(val)

// // b="Rachna"
// // val=b.substring(1,4);
// // console.log(val)

// val=a.includes('Rachana');
// console.log(val)


//Number and Methods

const num1=100;
const num2=50;
let val;

 val =num1+num2;
console.log(val)
 val =num1-num2;
 console.log(val)
 val =num1*num2;
 console.log(val)
 val =num1/num2;
 console.log(val)
val=num1%num2;
console.log(val)


val=Math.PI;
console.log(val)
val=Math.sqrt(64);
console.log(val)


val=Math.abs(-3);
console.log(val)


val=Math.round(2.4);
console.log(val)

val=Math.ceil(2.8);
console.log(val)

val=Math.floor(2.4);
console.log(val)


val=Math.sqrt(64);
console.log(val)


val=Math.abs(-3);
console.log(val)




val=Math.min(1,2,3,4,5,);
console.log(val)




val=Math.max(1,2,3,4,5,);
console.log(val)



val=Math.random();
console.log(val)


val=Math.random()*20;
console.log(val)



val=Math.floor(Math.random()*20);
console.log(val)

//Template Literals


const naame="Rachana";
const age=21;
const job="Senior software Developer";
const city="Banglore";


let html;
html='<ul><li>Name:'+ naame+'</li></ul>';
document.body.innerHTML=html;




// html=<ul>
//     <li>Name:{namee}</li>
// </ul>;
// document.body.innerHTML=html;

// html=<ul>
//         <li>Name:${namee}</li>
//  </ul>;


// document.body.innerHTML=html;
html = `<ul>
    <li>age: ${age}</li>
</ul>`;
document.body.innerHTML = html;

function hello(){
    return "hello";
}

html = `<ul>
    <li> ${hello()}</li>
</ul>`;
document.body.innerHTML = html;