// Print odd numbers in an array
let oddNumber = (number) => {
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
let value = (val) => {
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
let sumAll = (val2) => {
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
let primeNo = (prim) => {
    let numberArr = prim
    let tempPrime=[];
    for(var i=2;i<numberArr;i++){
        var count =0;
        for(var j=2;j<numberArr;j++){
            if(i%j==0){
                count++;
                // console.log(i)
            }
        }  
        if(count==1){
            tempPrime.push(i);
            }
    }
    return tempPrime;
}

var final = primeNo(20);
console.log(final); 


//Return all the palindromes in an array
let palindrome = (palinVal) => {

    let paliTemp=[];
    
        for(let pali in palinVal){
          
          var palilen =palinVal[pali].split('');
          
            for(let i=0;i<palilen.length;i++){
              var boolean = false;
              var j = palilen.length-1;
              if(i!=(j-i)){
                  if(palilen[i]== palilen[j-i]){
                    boolean = true;
                    }
              }  
                 
            }
            
            if(boolean){
              paliTemp.push(palinVal[pali]);
              }
        }
    
    return paliTemp;
    }
    
    let finalPalindrome = palindrome(['abc','car','ada','racecar','cool']);    
    console.log(finalPalindrome);
