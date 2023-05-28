/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: 'cooking oil',
    price: 10.5,
    type: 'grocery',
    offer: {
      number: 3,
      percent: 20
    }
  },
  {
    id: 2,
    name: 'Pasta',
    price: 6.25,
    type: 'grocery'
  },
  {
    id: 3,
    name: 'Instant cupcake mixture',
    price: 5,
    type: 'grocery',
    offer: {
      number: 10,
      percent: 30
    }
  },
  {
    id: 4,
    name: 'All-in-one',
    price: 260,
    type: 'beauty'
  },
  {
    id: 5,
    name: 'Zero Make-up Kit',
    price: 20.5,
    type: 'beauty'
  },
  {
    id: 6,
    name: 'Lip Tints',
    price: 12.75,
    type: 'beauty'
  },
  {
    id: 7,
    name: 'Lawn Dress',
    price: 15,
    type: 'clothes'
  },
  {
    id: 8,
    name: 'Lawn-Chiffon Combo',
    price: 19.99,
    type: 'clothes'
  },
  {
    id: 9,
    name: 'Toddler Frock',
    price: 9.99,
    type: 'clothes'
  }
]
// import { products } from './products.js';
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = []

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = []

var total = 0

// getElements
const cartArr = document.getElementById('cart_list')
const totalPrice = document.getElementById('total_price')

// Exercise 1
function buy (id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
  // const cartArr = document.getElementById('cart_list')

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      cartList.push(products[i])
    }

    // console.log('cartList', cartList.length)
  }
  cartArr.innerHTML = cartList.map(product => `<tr>
   <th scope="row">${product.name}</th>
     <td>${product.price}</td>
     <td>${product.quantity}</td>
     <td>${product.type}</td>
   </tr>`)
}

// Exercise 2
function cleanCart () {
  if (cartList.length > 0) {
    cartList = []
    // console.log('Cart cleaned')
    cartArr.innerHTML = []
    totalPrice.innerText = 0
  }
}

// Exercise 3
function calculateTotal () {
    // Calculate total price of the cart using the "cartList" array
  if (cartList.length === 0) {
    totalPrice.innerText = 0
  }
  if (cartList.length > 0) {
    for (let i = 0; i < cartList.length; i++) {
      total += cartList[i].price
    }
    // console.log('Total: $' + `${total}`)
    totalPrice.innerText = `${total}`
  }
}

// Exercise 4
function generateCart () {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  for (let i = 0; i < cartList.length; i++) {
    const item = cartList[i]

    if (!cart.includes(item)) {
      cart.push(item)
      item.quantity = 1
      // console.log(item.quantity)
    } else {
      item.quantity++
      // console.log(item.quantity)
    }
  }
  applyPromotionsCart()
  cartArr.innerHTML = cart.map(product => `<tr>
  <th scope="row">${product.name}</th>
    <td>${product.price}</td>
    <td>${product.quantity}</td>
    <td>${product.type}</td>
  </tr>`)
  console.log(cart)
  return cart // Return cart array with items and quantity in cart
}

// Exercise 5
function applyPromotionsCart () {
// Apply promotions to each item in the array "cart"
// Si el usuario compra 3 o más botellas de aceite, el precio del producto desciende a 10 euros.

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i]
    if (product.name === 'cooking oil' && product.quantity >= 3) {
      product.price = 10
    }
// Cuando se compran 10 o más productos para hacer pastel, su precio se rebaja a 2/3.
    if (product.type === 'grocery' && product.quantity >= 10) {
      product.price = (product.price * 2 / 3).toFixed(2)
    }
  }
}

// Exercise 6
function printCart () {
    // Fill the shopping cart modal manipulating the shopping cart dom
  applyPromotionsCart()

  cartArr.innerHTML = cartList.map(product => `<tr>
    <th scope="row">${product.name}</th>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
      <td>${product.type}</td>
    </tr>`
    )
}

// ** Nivell II **

// Exercise 7
function addToCart (id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  products.forEach(product => {
    if (product.id === id) {
      product.quantity = 1
      cart.find(product => product.id === id) ? product.quantity++ : cart.push(product)
    }
  }

  )
}

// Exercise 8
function removeFromCart (id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal () {
  console.log('Open Modal')
  printCart()
  calculateTotal()
}

