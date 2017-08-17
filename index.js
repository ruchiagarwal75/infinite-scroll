window.onscroll = function(){
    var bodyHeight = document.querySelector('body').offsetHeight;
    var y = window.pageYOffset + window.innerHeight;
    if(y > bodyHeight) {
        document.querySelector('body').innerHTML += '<div style="width:100px;height:100px;background:blue;border:1px solid black"></div>'; 
    }
}