// 1.
console.log(true || false);
console.log(true && false);
console.log(0 && "lol");
console.log(false || "IDK MY BFF JILL");

// 2.
console.log("" && [].length);
console.log("" || [].length);
console.log("" || [].length || 0);


// 3.
const likesVeggies = false;
const meal = likesVeggies ? "Vegetable Stir Fry" : "Cheeseburger";
console.log(meal);

// 4.
const feelingWell = false;
const goingOutTonight = feelingWell ? "Of course I'm going!" : "Not tonight, I'm not feeling well.";
console.log(goingOutTonight);


// 1. Update this function to use a short circuit evaluation to set a default value for `something`
// Think back to node and how we set a PORT 😉
const logMessage = message => {
    message = message || "Hello World!";
    console.log(message);
  };
  
  logMessage();
  
  // 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)
  
  const logTired = beenWorkingAllDay => {
    const message = beenWorkingAllDay ? "I'm feeling really tired" : "I'm wide awake!";
    console.log(message);
  };
  
  logTired(true);
  