function Sumarr(a){
    let sum=0;

    for(let i of a){
        sum+= i;
    }
    return sum;
}
console.log(Sumarr([1,2,3,4,5]));
console.log(Sumarr([10,20,30]));