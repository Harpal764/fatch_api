
window.addEventListener("load",LoadCustomer)

 function LoadCustomer(){
  /*
    var http=new XMLHttpRequest();
    http.open("GET","https://jsonplaceholder.typicode.com/photos/")
    http.send();
    http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
        var data=JSON.parse(this.response)
        console.log(data)
        BindPhotos(data)
        }  
    }
    */
  try{
let response=await fetch("https://jsonplaceholder.typicode.com/photos")
let result=await response.json();
BindPhotos(result)
  }
  catch(ex){
    console.log(ex)
  }
  
const URL="https://jsonplaceholder.typicode.com/photos"
fetch(URL).then(response=>{
  if(response.ok){
    response.json().then(result=>{
        BindPhotos(result)
    }).catch(err=>{
      console.log(err)
    })
  }

}).catch(err=>{
  console.warn(err)
})



}

function BindPhotos(data){

 var temp=``;
 
 data.forEach(d=>{
temp+=`<div class="col-3 p-3"><div class="card" style="width: 18rem;">
 <img src="${d.url}" class="card-img-top" alt="...">
 <div class="card-body text-justify">
   <h5 class="card-title">${d.title}</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" class="btn btn-danger" onclick="removePhoto(${d.id})">Remove</a>
 </div>
</div></div>`
})  

document.querySelector(".row").innerHTML=temp;
}

function removePhoto(id){
  
  fetch("https://jsonplaceholder.typicode.com/photos/"+id,{method:"DELETE"}).then(respoonse=>{
    console.log(respoonse)
    if(respoonse.ok){
      respoonse.json().then(result=>{
        console.log(result)
      })
    }
  }).catch(err=>{
    console.log(err)
  })
}