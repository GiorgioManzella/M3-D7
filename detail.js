


const urlSearchId = (new URLSearchParams(window.location.search)).get("id")





const fetchdata = () => {
    fetch("https://striveschool-api.herokuapp.com/api/product/"+ urlSearchId,{
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
          
          
          ` });
            
        }