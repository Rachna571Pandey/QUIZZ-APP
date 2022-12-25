let userName=localStorage.getItem("name");
let points=sessionStorage.getItem("points");
points = parseInt(points)

document.getElementById("endUser").innerHTML=userName;
document.getElementById("endPoint").innerHTML=points;


if(points>=8){
    document.getElementById("remark").innerHTML="Excellent";
}
else if(points<8|| points>=5){
    document.getElementById("remark").innerHTML="Keep Practicing....";
}
else{
         document.getElementById("remark").innerHTML="You need more more practice...."
};