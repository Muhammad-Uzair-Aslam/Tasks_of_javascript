
// .......................PROGRAM # 1.......................

function submit()
{
   var password=document.getElementById("password").value;
   var minLength=8;
   var upperCase=/[A-Z]/.test(password);
   var lowerCase=/[a-z]/.test(password);
   var numbers=/[0-9]/.test(password);
   var specialCharacters=/[!@#$%^&*]/.test(password);
   if(password.length<minLength)
   {
    document.getElementById("span").style.color="red"
    document.getElementById("span").innerHTML="Password should be at least 8 characters long.";
    return;
   }
   if(!upperCase)
   {
    document.getElementById("span").style.color="red"
    document.getElementById("span").innerHTML="Password should contain uppercase letter such as (A,B,C,...)";
    return;
   }
   if(!lowerCase)
   {
    document.getElementById("span").style.color="red"
    document.getElementById("span").innerHTML="Password should contain uppercase letter such as (a,b,c...)";
    return;
   }
  if(!numbers&&!specialCharacters&&!upperCase)
  {
  document.getElementById("span").style.color="red"
  document.getElementById("span").innerHTML="password should contain numbers ,special characters and upper case";
  return;
  }
   if(!specialCharacters&&!numbers)
   {
    document.getElementById("span").style.color="red"
    document.getElementById("span").innerHTML="password should contain special characters and numbers";
    return;
   }
   if(!specialCharacters)
   {
    document.getElementById("span").style.color="red"
    document.getElementById("span").innerHTML="password should contain special characters";
    return;
   }
   if(!numbers)
   {
    document.getElementById("span").style.color="red"
    document.getElementById("span").innerHTML="password should contain numbers";
    return;
   }
   if(!upperCase&&!lowerCase)
   {
    document.getElementById("span").style.color="red"
    document.getElementById("span").innerHTML="password should contain uppercase and lowercase "
    return;
   }
   
   document.getElementById("span").style.color="black";
   document.getElementById("span").innerHTML="Password is Strong"
   
}
// function checkString()
// {
//    var text=document.getElementById("text").value; 
//    var lastIndex=text.length-1;
//    // console.log(lastIndex);
//    var value=text[lastIndex];
//    if(text.length<=13)
//    {
//    if(text[length]==text[lastIndex]&&text[length+1]==text[lastIndex-1]&&text[length+2]==text[lastIndex-2]&&text[length+3]==text[lastIndex-3]&&text[length+4]==text[lastIndex-4] &&text[length+5]==text[lastIndex-5]&&text[length+6]==text[lastIndex-6])
//    {
//       document.getElementById("para").innerHTML="String is palindrome"
//    }
//    else{
//       document.getElementById("para").innerHTML="String is not palindrome"
//    }
// }
// else{
//    document.getElementById("pan").innerHTML="String should not contain more than 12 characters"
//    return;
// }
// } 

// .......................PROGRAM # 2.......................

function checkString()
{
   var text=document.getElementById("text").value; 
   var reverseText=text.split('').reverse().join('');
   {
   if(text==reverseText)
   {
      document.getElementById("para").innerHTML="String is palindrome"
   }
   else if(text!=reverseText){
      document.getElementById("para").innerHTML="String is not palindrome"
   }
   else
   {
      document.getElementById("para").innerHTML="You have not entered any string yet"
   }
}

} 

// // Generate a random number between 1 and 100
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log(randomNumber);
// console.log(randomNumber);


//   // Set the countdown date and time (in milliseconds)
//   const countdownDate = new Date('2023-12-31T23:59:59').getTime();

//   // Update the countdown every second
//   const countdownInterval = setInterval(() => {
//     // Get the current date and time
//     const now = new Date().getTime();

//     // Calculate the remaining time
//     const remainingTime = countdownDate - now;

//     // Calculate days, hours, minutes, and seconds
//     const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

//     // Display the remaining time in the HTML element
//     document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

//     // Check if the countdown has ended
//     if (remainingTime < 0) {
//       clearInterval(countdownInterval);
//       document.getElementById('countdown').innerHTML = 'Countdown has ended!';
//     }
//   }, 1000);


// .......................PROGRAM # 3.......................
function getNext()
{
   var image=document.getElementById("img");
   if(image.src=="file:///F:/web%20and%20app%20development/assignment%2011/assets/a.jpg")
   {
      image.src="./assets/b.jpg"
   }
   else if(image.src=="file:///F:/web%20and%20app%20development/assignment%2011/assets/b.jpg")
   {
      image.src="./assets/c.jpg"
   }
   else if(image.src=="file:///F:/web%20and%20app%20development/assignment%2011/assets/c.jpg")
   {
      image.src="./assets/d.jpg"
   }
   else
   {
      image.src="./assets/e.jpg"
   }

}
function getPrevious()
{
   var image=document.getElementById("img");
   if (image.src=="file:///F:/web%20and%20app%20development/assignment%2011/assets/e.jpg")
   {
      image.src="./assets/d.jpg"
   }
   else if (image.src=="file:///F:/web%20and%20app%20development/assignment%2011/assets/d.jpg")
   {
      image.src="./assets/c.jpg"
   }
   else if (image.src=="file:///F:/web%20and%20app%20development/assignment%2011/assets/c.jpg")
   {
      image.src="./assets/b.jpg"
   }
   else
   {
      image.src="./assets/a.jpg"
   }

}
// .......................PROGRAM # 4.......................

var attempts = 0;
function checkGuess() {
   var randomNumber = Math.floor(Math.random() * 100) + 1;
   console.log(randomNumber);
   
   
   var guessNumber = parseInt(document.getElementById("Text").value);
   
   if (guessNumber != randomNumber) {
     if (guessNumber > randomNumber && (guessNumber - randomNumber) >= 10) {
       document.getElementById("result").innerHTML = "The number you guessed is too high.";
     }
     if (guessNumber > randomNumber && (guessNumber - randomNumber) < 10) {
       document.getElementById("result").innerHTML = "The number you guessed is high and close to the number.";
     }
     if (guessNumber < randomNumber && (randomNumber - guessNumber) >= 10) {
       document.getElementById("result").innerHTML = "The number you guessed is too low.";
     }
     if (guessNumber < randomNumber && (randomNumber - guessNumber) < 10) {
       document.getElementById("result").innerHTML = "The number you guessed is low and close to the number.";
     }
     attempts++;
     console.log(attempts)
   }
   
   if (guessNumber == randomNumber) {
     document.getElementById("result").innerHTML = "Correct number is found.";
     document.getElementById("attempts").innerHTML = "Attempts: " + attempts;
   }
 }
 var morse= {
   'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
   'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
   'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
   '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
   '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
   ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
   ' ': '/'
 };
 function morseCode()
 {
   
    var inputText=document.getElementById("code").value.toUpperCase();
    var mosreCode='';
    for (let i = 0;i < inputText.length;i++) {
      var char=inputText[i];
      if(morse[char])
      {
         mosreCode=mosreCode+morse[char]+' ';
      }
      
    }
    document.getElementById("translate").style.fontSize="30px";
    document.getElementById("translate").innerHTML=mosreCode;
 }