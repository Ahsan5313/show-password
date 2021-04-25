function show(){
   let view = document.getElementById("Check").checked;
    if(view){
        document.myForm.tex.type = "TEXT";
    }else{
        document.myForm.tex.type = "PASSWORD" ;
    }
}












