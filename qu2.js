 console.log("hello")


// // question 1:
// // ===========
 for (i=0;i<=100;i++){
if(i%3==0){
    console.log("fizz")
}
if(i%5==0){
    console.log("fizz")
}
if(i%3==0 && i%5==0){
    console.log("fizbuzzz")
}
console.log(i);
}


// // question 2:
// // ===========
let student =[
    name="sneha",
    age="18",
    projects=[
        diceGame="two player game using javascript"
    ]
];
console.log(`${name} ${age} ${projects}`);


// // question 3:
// // ==========

let  shoppinglist=['chips packet','chocolates','biscuits'];
let shoppingbasket=['maggi packets','mentos','cool drinks',...shoppinglist ];
// console.log(shoppinglist);
console.log(shoppingbasket);


// //question 4:
// //==========

a=5,b=6
{
    if(addition=a+b){
        console.log(addition);
    }
    if(sub=a-b){
        console.log(sub);
    }
    if(mul=a*b){
        console.log(mul);
    }
    if (div=a/b){
        console.log(div);
    }
    if (sqrt=a^b){
        console.log(sqrt)
    }
    if (per=((a+b)*100)/2){
        console.log(per);
    }

} 


//question 5:
//==========

let sales= ['2%','5%','7%','10%'] ;
let employeesales=sales
console.log(sales);


//question 6:
//==========




//question 7:
//==========

let n=10;
for(let i=2;i<=n;i++){
    for (let j=2;j<i;j++){
        if(i%j==0)
        continue;
    }
    alert(i);
}


//question 8:
//==========

function ask(question,yes,no){
    if(confirm(question))yes()
    else no();
}
ask(
    "Do you agree?",
  ()=>{alert(
      "you agreed.");},
   ()=>{alert("you cancelled the execution.");}
)
