// Function to mask email
function maskEmail(email) {
  // Find position of '@'
  const atIndex = email.indexOf("@");
  
  // Extract username and domain
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  
  // Keep first and last character, mask the rest
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedPart = "*".repeat(username.length - 2);
  
  // Return masked email
  return firstChar + maskedPart + lastChar + domain;
}

// Declare email variable
let email = "apple.pie@example.com";

// Call function and log result
console.log(maskEmail(email));

console.log(maskEmail("apple.pie@example.com"));   // a*******e@example.com
console.log(maskEmail("freecodecamp@example.com")); // f**********p@example.com
console.log(maskEmail("info@test.dev"));           // i**o@test.dev
console.log(maskEmail("user@domain.org"));         // u**r@domain.org
