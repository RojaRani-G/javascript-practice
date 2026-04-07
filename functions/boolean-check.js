function booWho(bool) {
  // Check if the value is strictly a boolean primitive
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

// Example test cases
console.log(booWho(true));        // true
console.log(booWho(false));       // true
console.log(booWho(1));           // false
console.log(booWho("true"));      // false
console.log(booWho([]));          // false
console.log(booWho({}));          // false
console.log(booWho(NaN));         // false
