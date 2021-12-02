var btn=document.getElementById("btn");

btn.addEventListener("click",LoadCustomer)

function LoadCustomer(){
    var http=new XMLHttpRequest();
    http.open("GET","data/customer.json")
    http.send();
    http.onreadystatechange=function(){
        console.log(this.response)
    }
}