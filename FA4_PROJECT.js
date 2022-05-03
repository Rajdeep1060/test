
// function login(){
//     this.style.display="block";
//     const xhr=new XMLHttpRequest();
//     xhr.open("GET","Sign.html",true);
//     xhr.onprogress=function(){
//         alert("login page about to load");
//     }
//     xhr.onload=function(){
//         if(this.status==200 && this.readyState==4){
//             document.getElementById("demo").innerHTML=this.responseText;
//         }
//     }
//     xhr.send();
// }
function scrollWin(){
    window.scrollTo(0,756);
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}