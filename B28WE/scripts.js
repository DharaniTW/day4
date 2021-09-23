var  request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);
for(var i=0;i<result.length;i++){
    console.log(result[i].flag,
        result[i].name,
        result[i].region,
        result[i].subregion,
        result[i].population)
    
}
}
