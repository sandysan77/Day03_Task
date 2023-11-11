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
let primeNo = function(prim){
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
let palindrome = function(palinVal){

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

// Remove duplicates from an array   

let duplicates = function(dupli){
    let tempDup=[];
      
      for(let dup in dupli){
          var boolean =false;
              for(let dup1 in dupli){
                var boolean =false;
                    if(dup!=dup1){
                        if(dupli[dup]==dupli[dup1]){
                          boolean =true;
                          break;
                       }
                    }
              }
              if(!boolean){
                tempDup.push(dupli[dup]);
                }
      }
      
      return tempDup;
  }
  
  let finalDuplicates = duplicates(['abc','car','abc','racecar','dog','abc']);    
  console.log(finalDuplicates);


  // Return median of two sorted arrays of the same size   

  let twoArr = function(arr1,arr2){
    
    let firstArray = arr1.toString().split(',');
    let secondArray = arr2.toString().split(',');

    if((firstArray.length)%2==0){
        var firstArr =0;
        for(let i=0;i<firstArray.length;i++){
            
            firstArr = firstArr + parseInt(firstArray[i]);  
            
    }
   
    var fa1 =firstArr/firstArray.length;

    }else{
            
    }

    if((secondArray.length)%2==0){
      var secArr =0;
        for(let j=0;j<secondArray.length;j++){
            
            secArr =secArr + parseInt(secondArray[j]);
        }
   
      var sa2 =secArr/secondArray.length;  

    }else{
            
    }

    return (fa1+sa2)/2;
 
}   

let arr1 = [4,2,];
let arr2 = [8,2];

let twoArrMedian = twoArr(arr1,arr2);
console.log(twoArrMedian);


// Rotate an array by k times

let rotate = function(arr,times){
  
    var normaArr = arr;
    var rotateTimes = times;
    
    for(var i=0;i<rotateTimes;i++){
      
      normaArr.unshift(normaArr[normaArr.length-1]);
      normaArr.pop();
      
    }
    return normaArr;
}
    
  let rotateFinal  = rotate([1,2,3,4,5],2);//n times  
  console.log(rotateFinal)