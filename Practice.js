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