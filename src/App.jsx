import React, { useState, useEffect } from "react";
function App() {
   let [cardNumber, setCardNumber] = useState("");
   let [message, setMessage] = useState("");
   //useEffect()
   
   // function to validate credit card numbers using the Luhn algorithm
   function validateCardByLuhn(cardNumber) {
      let sum = 0;
      let shouldDouble = false;
      for (let i = cardNumber.length - 1; i >= 0; i--) {
         let digit = parseInt(cardNumber.charAt(i));
         if (shouldDouble) { 
            if ((digit *= 2) > 9) digit = digit - 9;
         }
         sum = sum + digit;
         shouldDouble = !shouldDouble;
      }
      return sum % 10 === 0;
   }

   function validateCard(event) {
      let cardNumber = event.target.value;
      console.log(cardNumber);
      setCardNumber(cardNumber);

      let isValid = validateCardByLuhn(cardNumber) && cardNumber.length !== 0;

      if (isValid) {
         setMessage("Valid Card Number");
      } else {
         setMessage("Invalid Card Number");
      }
   }

   return (
      <div>
         <h1>Luhn algorithm  to validate credit card number in ReactJSX. </h1>
         <input type = "number" value = {cardNumber}  onChange={validateCard}/>
         <h2> {message} </h2>
      </div>
   );
}
export default App; 