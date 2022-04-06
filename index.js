function scuberGreetingForFeet(a){
  // Write your code here!
  if (a <= 400){
    return "This one is on me!"
  } else if (a > 400 && a < 2000) {
    return "That will be twenty bucks."
  } else if (a >=2000 && a <2500) {
    return "I will gladly take your thirty bucks."
  } else if (a >= 2500) {
    return "No can do."
  } 
}

function ternaryCheckCity(c){
  // Write your code here!
return (c == "NYC" ? "Ok, sounds good." : "No go.");
} 

function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip) {
  case "generous":
    return "Thank you so much.";
  case "not as generous":
    return "Thank you.";
  default:
    case "thanks for everything":
      return "Bye."
}
}

