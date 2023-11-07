// Print odd numbers in an array
let oddNumber = function(number){
    var temp =[];
        for(var i=0;i<number;i++){
            if(i%2 !=0){
                temp.push(i);    
            }   
        }
        return temp;
}

let result = oddNumber(10);
console.log(result);


//Convert all the strings to title caps in a string array
let value = function(val){
    var temp1 =[];
        var smallCase = val.toLowerCase().split(' ');

        for(var i=0;i<smallCase.length;i++){
           temp1.push(smallCase[i].charAt(0).toUpperCase().concat(smallCase[i].slice(1)))
        }
        return temp1
        
}

let result1 = value('Convert all the strings');
console.log(result1.toString().split(',').join(' '));


// Sum of all numbers in an array
let sumAll = function(val2){
    let temp=0;
    var sum = val2.toString().split(',')
    for(var i=0; i<sum.length;i++){
         var parseVal = parseInt(sum[i]);
         temp+=parseVal;
    }
    return temp;
}
var ele = sumAll([1,2,3,4]);
console.log(ele);


// Return all the prime numbers in an array
let prime = function(){
    let numberArr = 10;
    let temp=[];
    
    for(var i=2;i<numberArr;i++){
        if(numberArr%i==0){
                console.log(i)
        }

    }
}

prime();



