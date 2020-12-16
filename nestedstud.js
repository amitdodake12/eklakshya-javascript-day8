function showtotal(...marks){
    return function(){
        sum=0;
        marks.forEach(Element=>{
            sum+=Element;
        })
        return sum;

    }()/3
   
}
console.log("avg is : " ,showtotal(100,200,400));