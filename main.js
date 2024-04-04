const photoSrc = ['src/shoes src/shoes_2-removebg-preview.png','src/shoes src/shoes_3-removebg-preview.png','src/shoes src/shoes_4-removebg-preview.png','src/shoes src/shoes_5-removebg-preview.png','src/shoes src/shoes_6-removebg-preview.png','src/shoes src/shoes_7-removebg-preview.png','src/shoes src/shoes_9-removebg-preview.png','src/shoes src/shoes_10-removebg-preview.png']
var display = document.getElementById('imageHome')
var photoCount = 1

function arrowNext(){
    display.style.opacity = "0"
    display.style.translate="200px"
    setTimeout(function(){
         photoCount = (photoCount + 1)% photoSrc.length;
    display.src = photoSrc[photoCount]
        display.style.opacity="1"
        display.style.translate = "0"
    },400)
   
    
}
function arrowBack(){

    display.style.opacity = "0"
    display.style.translate="-200px"
    setTimeout(function(){
         photoCount = (photoCount - 1)% photoSrc.length;
    display.src = photoSrc[photoCount]
        display.style.opacity="1"
        display.style.translate = "0"

        if(photoCount < 1){
            photoCount = 8
        }else{
          console.log("error")
        }
    },400)
     
}
const list = document.getElementById('list')
function bars(){
    if(list.style.display ==="none"){
    list.style.display ="flex"
    }else{
        list.style.display ="none"
    }  
   
}
function liButton(){
        list.style.display="none"
    }
