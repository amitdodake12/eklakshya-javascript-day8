function shape(length,width,h){
    this.length=length;
    this.width=width;
    this.h;
    this.area=function(){
        console.log("Area of rectangle having len = "+this.length+" and breadth = "+this.width+" is : ",this.length*this.width);
    }
    this.areatrii=function(){
        console.log("Area of triangle having base = "+this.length+" and height = "+this.width+" is : ",(1/2)*this.length*this.width);
    }
    

}
function rect(length,breadth){
    shape.call(this,length,breadth);

    this.areaa=function(){
        console.log("Areaaa of rectangle having len = "+this.length+" and breadth = "+this.width+" is : ",this.length*this.width);

    }
    this.perimeter=function(){
        console.log("perimeter of rectangle having len = "+this.length+" and breadth = "+this.width+" is : ",2*(this.length+this.width));
    }
   
}

function trin(base,height,hypo){
    shape.call(this,base,height)
    this.base=base;
    this.height=height;
    this.hypo=hypo;

    this.areatri=function(){
        console.log("Areaaa of triangle having base = "+this.base+" and height = "+this.height+" is : ",((1/2)*this.base*this.height));

    }
    this.perimetertri=function(){
        console.log("perimeter of triangle having base = "+this.base+" and height = "+this.height+" is : " , (this.base+this.height+this.hypo));
    }
   
}

var r1=new rect(20,20);
r1.area();
r1.areaa();
r1.perimeter();

var t1=new trin(4,3,5);
t1.areatri();
t1.areatrii();
t1.perimetertri();


