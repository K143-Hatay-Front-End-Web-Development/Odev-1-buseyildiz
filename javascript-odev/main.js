const getBiggestPalindrome = function(){
    let max = 0, product;
    for(let i = 100 ; i < 1000 ; i++){
        for(let x =100; x < 1000 ; x++ ){
            product=i=x;
            if(product > max){
                if(product.toString().split('').reverse().join('')==product.toString()){
                    max = product;
                }
            }
        }
    }
    return max;
}
console.log(getBiggestPalindrome());