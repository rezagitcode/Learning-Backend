/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
MAP FILTER AND REDUCE

function arrDouble(elt){
    return elt*2;
}
function arrHalf(elt){
    return elt/2;
}
function binary(elt){
    return elt.toString(2);
}
let output = arr.map(binary);
// function isOdd(elt){
    //     return elt%2!=0;
    // }
    // let output = arr.filter(isOdd);
    let output = arr.reduce(function(max, curr){
        if(curr>max){
            max = curr;
        }
        return max;
    },0)
    console.log(output);

    MAP IN DEPTH:

    const users = [
        {firstName:"Mahmud", lastName:"Reza", age:24},
        {firstName:"Mubarak", lastName:"Khan", age:35},
        {firstName:"Suroj", lastName:"Miah", age:13},
        {firstName:"Asif", lastName:"Khan", age:13},
    ];
    // map the users array to get a new array of fullnames
    function getFullNames(elt){
        return `${elt.firstName} ${elt.lastName}`;
    }
    let output = users.map(getFullNames);
    console.log(output);

    REDUCE IN DEPTH:

    const users = [
        {firstName:"Mahmud", lastName:"Reza", age:24},
        {firstName:"Mubarak", lastName:"Khan", age:35},
        {firstName:"Suroj", lastName:"Miah", age:13},
        {firstName:"Asif", lastName:"Khan", age:13},
    ];
    // reduce the array of objects to a single object which contains how many times a 
    // particular age occurs
    // {24:1, 35:1, 13:2}
    const output = users.reduce(function(acc, curr){
        if(acc[curr.age]){
            acc[curr.age] = ++acc[curr.age];
        }else{
            acc[curr.age] = 1;
        }
        return acc;
    },{});
    console.log(output);

    FILTER IN DEPTH:
    // filter those objects with firstName whose age is less than 20;
    const users = [
        {firstName:"Mahmud", lastName:"Reza", age:24},
        {firstName:"Mubarak", lastName:"Khan", age:35},
        {firstName:"Suroj", lastName:"Miah", age:13},
        {firstName:"Asif", lastName:"Khan", age:13},
    ];
    USING FILTER AND MAP:

    // const output = users.filter((elt)=> elt.age<20).map((elt)=> elt.firstName);
    // console.log(output);

    USING REDUCE:
    
    const output = users.reduce(function(acc, curr){
        if(curr.age < 20){
            acc.push(curr.firstName);
        }
        return acc;
    },[]);
    console.log(output);
    */