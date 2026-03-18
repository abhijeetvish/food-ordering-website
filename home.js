let foods = [

{
name:"Ambur Biryani",
price: 199,
image:"images/biryani1.jpg"
},

{
name:"Hyderabadi Biryani",
price: 149,
image:"images/biryani2.jpg"
},

{
name:"Egg Biryani",
price: 199,
image:"images/biryani3.jpg"
},

{
name:"Fish Biryani",
price: 249,
image:"images/biryani4.jpg"
},

{
name:"Veg Pulao",
price: 199,
image:"images/biryani5.jpg"
},

{
name:"Paneer Pulao",
price: 149,
image:"images/biryani6.jpg"
},

{
name:"Masala Dosa",
price: 129,
image:"images/biryani7.jpg"
},

{
name:"Uttapa",
price: 119,
image:"images/biryani8.jpg"
},

{
name:"Chana Masala",
price: 149,
image:"images/biryani9.jpg"
},

{
name:"Chole Bhature",
price: 179,
image:"images/biryani10.jpg"
},

{
name:"Paneer Makhani",
price: 249,
image:"images/biryani11.jpg"
},

{
name:"Spcl. Thali",
price: 199,
image:"images/biryani12.jpg"
}

]

let container = document.getElementById("foodContainer")

foods.forEach(function(food){

let card = document.createElement("div")

card.classList.add("food_card")

card.innerHTML = `
<img src="${food.image}">
<h3>${food.name}</h3>
<p>Price : \u20B9${food.price}</p>
<button>Add to Cart</button>
`

container.appendChild(card)

})