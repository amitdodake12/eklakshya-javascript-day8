function showproduct(name,brand,cost){
    return function(discount){
        console.log(`discounted price of ${brand} ${name} is ${cost-discount}`)
        }
}
showproduct('Tv','Sony',90000)(5000);