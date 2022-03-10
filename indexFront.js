


window.onload= () => {
  fetchdata()}


const fetchdata = () => {
    fetch("https://striveschool-api.herokuapp.com/api/product/",{
    headers: {
       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
       "Content-Type": "application/json"}})
    .then((data) => data.json())
    .then((data) => {console.log(data)
    fetchElement(data)
    })
}

 



let box1 = document.getElementById("box1")

let fetchElement = function(data) {

        data.forEach(element => {
    
          box1.innerHTML += `
          
          <div class="card" style="width: 18rem">
          <img src="${element.imageUrl}" class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p>${element.description}</p>
          <p class="">${element.price}</p>
          <a href="#" class="btn btn-primary">${element.brand}</a>
          <a href="/detail.html?id=${element._id}" class="btn btn-primary">Detail</a>
          </div>
          
          
          `
        });
            
          }
            
            // let name = document.getElementById("name")
// let description = document.getElementById("description")
// let imageURl = document.getElementById("imageURL")
// let price = document.getElementById("price")




// const myObject = {
//     name: name.value,
//     description: description.value,
//     imageURL: imageURL.value,
//     price: price.value
//  }



// const postData = function(){

//   fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
//     headers: {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M"
//     , "Content-Type": "application/json"},
    
//     method: 'POST',
//     body: JSON.stringify(),

    
//   })  

//   if (response.ok) {
//     const data = response.json()
//     console.log(data)
//     alert("Succes!!")
//   }else{
//     alert("Something went wrong!!")
//   }
// }      


   