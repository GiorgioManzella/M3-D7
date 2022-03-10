
let name = document.getElementById("name")
let description = document.getElementById("description")
let imageURL = document.getElementById("imageURL")
let price = document.getElementById("price")
let brand = document.getElementById("brand")


function handleChange(e){
    e.preventDefault()

    let myObject = {

        name: name.value,
        description: description.value,
        brand: brand.value,
        imageUrl: imageURL.value,
        price: price.value
    }
    let transformObj = JSON.stringify(myObject)
// }

// const postData = () => {

    fetch("https://striveschool-api.herokuapp.com/api/product/",{
        method: "POST",
        headers: {
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
           "Content-Type": "application/json"},
        body: transformObj
        })
        .then((data)=> data.json())
        .then((data) => console.log(data))

}
  
let modify = function() {


    let myObject = {

        name: name.value,
        description: description.value,
        brand: brand.value,
        imageUrl: imageURL.value,
        price: price.value
    }
    let transformObj = JSON.stringify(myObject)



fetch("https://striveschool-api.herokuapp.com/api/product/" + urlSearchId,{
        method: "PUT",
        headers: {
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
           "Content-Type": "application/json"},
        body: transformObj
        })
        .then((data)=> data.json())
        .then((data) => console.log(data))

}

const urlSearchId = (new URLSearchParams(window.location.search)).get("id")


const handleDelete = function(){


    fetch("https://striveschool-api.herokuapp.com/api/product/" + urlSearchId,{
        method: "DELETE",
        headers: {
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
           "Content-Type": "application/json"},
        
        })
        .then((data)=> data.json())
        .then((data) => console.log(data))

}

