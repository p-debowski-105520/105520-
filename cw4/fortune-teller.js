const fortune1 = "You will accidentally become the main character in someone else’s redemption arc.";
const fortune2 = "The pigeon you insulted last week is assembling a tiny army. Prepare yourself.";
const fortune3 = "Your toaster knows what you did. Be wary of burnt toast.";
const fortune4 = "You will find a sock you lost years ago, but it will have developed a complex personality.";
const fortune5 = "Reality will glitch, and for one brief moment, you’ll understand why squirrels are plotting against you.";
let randomNumber = Math.floor(Math.random()*5)+1;
let selectedFortune;
switch(randomNumber){
    case 1:
        selectedFortune = fortune1;
        break;
    case 2:
        selectedFortune = fortune2;
        break;
    case 3:
        selectedFortune = fortune3;
        break;
    case 4:
        selectedFortune = fortune4;
        break;
    case 5:
        selectedFortune = fortune5;
        break;
}
console.log(selectedFortune);