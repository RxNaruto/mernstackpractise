const transaction = [{
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
},
{
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'cloth',
    itemName: 'Pizza',
},
{
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'electronics',
    itemName: 'Pizza',
}]

let totalamount=0;
totalamount=totalamount+transaction[0].price;
console.log(transaction[0].category);
console.log(totalamount);
let obj1={
    category: transaction[0].category,
    totalspent: totalamount,

}
let obj2={
    category: transaction[1].category,
    totalspent: totalamount+10,

}
let obj3={
    category: transaction[2].category,
    totalspent: totalamount+20,

}

let obj4 = Object.assign({},obj1,obj2,obj3);
console.log(obj4);

