
// Exercise 6
 function validate () {
   var error = 0
// Get the input fields
   var fName = document.getElementById('fName')
   var fEmail = document.getElementById('fEmail')
   var fAddress = document.getElementById('fAddress')
   var fLastN = document.getElementById('fLastN')
   var fPhone = document.getElementById('fPhone')
   var fPassword = document.getElementById('fPassword')
   var form = document.getElementById('form')

// Get the error elements
   var errorName = document.getElementById('errorName')
   var errorEmail = document.getElementById('errorEmail')
   var errorfAddress = document.getElementById('errorAddress')
   var errorLastN = document.getElementById('errorLastN')
   var errorPhone = document.getElementById('errorPhone')
   var errorPassword = document.getElementById('errorPassword')

  // trim elements
   const name = fName.value.trim()
   const lastName = fLastN.value.trim()
   const phone = fPhone.value.trim()
   const password = fPassword.value.trim()
   const email = fEmail.value.trim()
   const address = fAddress.value.trim()

// Validate fields entered by the user: name, phone, password, and email
   if (name === '' || name.length < 3 || name.length > 3 || !/^[a-zA-Z]+$/.test(name)) {
     errorName.style.display = 'block'
     fName.style.border = '1px solid red'
     error++
   }

   if (!lastName || lastName.length < 3 || lastName.length > 3 || lastName.length > 3 || !/^[a-zA-Z]+$/.test(lastName)) {
     errorLastN.style.display = 'block'
     fLastN.style.border = '1px solid red'
     console.log(lastName.length)
     error++
   }
   if (email === '' || email.length < 3 || !/^\S+@\S+\.\S+$/.test(email)) {
     errorEmail.style.display = 'block'
     fEmail.style.border = '1px solid red'
     error++
   }
   if (address === '' || address.length < 3) {
     errorfAddress.style.display = 'block'
     fAddress.style.border = '1px solid red'
     error++
   }
   if (!phone || phone.length < 3 || !/^\d+$/.test(phone)) {
     errorPhone.style.display = 'block'
     fPhone.style.border = '1px solid red'
     error++
   }
   if (!password || password.length < 3 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
     errorPassword.style.display = 'block'
     fPassword.style.border = '1px solid red'
     error++
   }
   if (error > 0) {
     alert('Error')
   } else {
     alert('OK')
   }
   if (name && lastName && phone && password && email) {
     form.submit()
   }
 }

