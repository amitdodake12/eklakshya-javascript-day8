

function showtotal(...marks){
    sum=0;
    marks.forEach(Element=>{
        sum+=Element;
    });
    console.log("student1 is : ",this.name,"roll no is : ",this.rollno,"total marks are",sum)
}
function showhobbies(...hobbies){
    hobbies.forEach(Element=>{
        console.log("student1 is : ",this.name,"roll no is : ",this.rollno,'hobbies :',Element)
        

    })
}
var student1={
    name:'amit',
    rollno:1
}
var student2={
    name:'Ashu',
    rollno:2
}
showtotal.call(student1,200,200,100)
showtotal.call(student2,500,100)
showhobbies.apply(student1,['trekking','music'])
showhobbies.apply(student2,['poetry','dance'])