// Global count variable
let count = 0;

function cardCounter(card) {
  // Increase count
  if (card >= 2 && card <= 6) {
    count++;
  }
  // No change
  else if (card >= 7 && card <= 9) {
    count += 0;
  }
  // Decrease count
  else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }

  // Decide Bet or Hold
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
console.log(cardCounter(2));
console.log(cardCounter(3));
console.log(cardCounter(4));
console.log(cardCounter(5));
console.log(cardCounter(6)); 
