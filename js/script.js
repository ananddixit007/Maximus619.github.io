
$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    })
})
//getting the modal
var modal=document.getElementById("myModal1");
var mod=document.getElementById("myModal2");
//get button to open modal
var btn=document.getElementById("mybtn1");
var bt=document.getElementById("mybtn2");
//get close X button
var span1=document.getElementsByClassName("close1")[0];
var span2=document.getElementsByClassName("close2")[0];
//when user clicks button to open modal
btn.onclick=function(){
    modal.style.display="block";
}
bt.onclick=function(){
    mod.style.display="block";
}
//when user clicks on X to close
span1.onclick=function(){
    modal.style.display="none"; 
}
span2.onclick=function(){
    mod.style.display="none"; 
}
//when user click anywhere the modal closes
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}
window.onclick=function(event){
    if(event.target==mod){
        mod.style.display="none";
    }
}