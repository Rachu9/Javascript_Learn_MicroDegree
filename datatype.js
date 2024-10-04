//DataTypes
/*
1.Primitive Data type
2.Referenece Data type */

//1.Primitive Data type
//String
const namee="Rachana";
console.log(typeof namee);


//Number
const num=1;
console.log(typeof num);

//Number
const numm=100.0;
console.log(typeof numm);


//Boolean
const a=true;
console.log(a);

//null
const abc=null;
console.log( abc);


const ab=null;
console.log( typeof ab);

//undefined

let b;
console.log( b);

let bb;
console.log(typeof bb);



//2.Referenece Data type


//Array
const aa=["Movie","Playing"]
console.log(aa)
console.log(typeof aa)

//Object data
const person={
    name:"Rachu",
    age:21,
}
console.log(person)
console.log(typeof person)

//Date
const today=new Date();
console.log(today);



//Type Conversion

//Converting one datatype to another 

//Number to string
let d;
val=String(5+5);
console.log(val);
console.log(typeof val);
console.log(val.length);


//Boolean to string
val=String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

//Date to String
val=String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

//Array to String


val=String([1,2,3,4,5]);
console.log(val);
console.log(typeof val);
console.log(val.length);


//toString

val=(5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);




val=5;
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2)
);



val=Number("5");
console.log(val);
console.log(typeof val);
console.log(val.toFixed()
);



val=Number(true);
console.log(val);
console.log(typeof val);
console.log(val.toFixed()
);




val=Number(false);
console.log(val);
console.log(typeof val);
console.log(val.toFixed()
);




val=Number(null);
console.log(val);
console.log(typeof val);
console.log(val.toFixed()
);




val=parseInt("5");
console.log(val);
console.log(typeof val);
console.log(val.toFixed()
);


//Type Cohesion


//Javascript converts itself.



const val1=5;
const val2=5;
const  sum=val1+val2;
console.log(sum);
console.log(typeof sum);




const vall1="5";
const vall2=5;
const  summ=vall1+vall2;
console.log(summ);
console.log(typeof summ);






