var arr = [[1,2], [3,4], [4,5]];
var finArr = [];
arr.map( ele =>{     
    if(ele.length > 1){
        ele.map(cele =>{
            finArr.push(cele);
        });
    }else{
        finArr.push(ele);
    }
});

finArr.sort();

console.log(finArr);