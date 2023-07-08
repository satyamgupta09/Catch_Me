var catch1=document.getElementById("catch");

catch1.style.top=catch1.offsetTop+"px";
catch1.style.left=catch1.offsetLeft+"px";

var catchHeight=catch1.offsetHeight;
var catchWidth=catch1.offsetWidth;

function x_coordinate(){
    var top=parseInt(catch1.style.top);
    var left=parseInt(catch1.style.left);

    var value=Math.floor((Math.random() * window.innerWidth)-99);

    var new_value=left-value;

    if(new_value<0){
        new_value=value;
    }
    return new_value;
}

function y_coordinate(){
    var top=parseInt(catch1.style.top);
    var left=parseInt(catch1.style.left);

    var value=Math.floor((Math.random() * window.innerHeight)-99);

    var new_value=top-value;

    if(new_value<0){
        new_value=value;
    }

    return new_value;
}

catch1.addEventListener("mouseover",function(event){
    var new_pos_x=x_coordinate();
    var new_pos_y=y_coordinate();
    console.log("hover");
    console.log(new_pos_x,new_pos_y);

    catch1.style.top=new_pos_y+"px";
    catch1.style.left=new_pos_x+"px";
    
});