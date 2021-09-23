var obj1 = {
    name : "Person 1",
    age : 5
};

var obj2 = {
    age : 5,
    name : "Person 2",
}
var flag = true;

// if(obj1 = obj2){
//     console.log(obj1,obj2)
// };


if (Object.keys(obj1).length == Object.keys(obj2).length){
    for (key in obj1){
        if(obj1[key] == obj2[key]){
            continue;
        }
        else{
            flag = true;
            break;
        }
    }
}
else{
    flag = flase;
}
console.log("Is object equals? " + flag);
