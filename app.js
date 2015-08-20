// (function() {


(function() {
  var userStatus = {
    energy: 100,
    steps: 0,
    cokes: 0,
    tacos: 0
  };

  var status = document.getElementById("status");
  function updateDom() {
    status.innerHTML = "";
   

    for(key in userStatus) {
      status.innerHTML = status.innerHTML + "<div>" + key + ": " + userStatus[key] + "</div>";
    }
  }

  // get the walk button
  var walkBtn = document.getElementById('walk');
  // add event listener to the walk button
  walkBtn.addEventListener('click', function() {
    // when clicked, set disabled
    walkBtn.setAttribute('disabled', 'true');
    // after 3 seconds, set to be enabled/remove disabled
    setTimeout(function() {
      walkBtn.removeAttribute('disabled');
    }, 3000);
    // increase the steps in the userStatus by 1
    userStatus.steps += 1;
    userStatus.energy -= Math.floor(Math.random() * (10 - 1) + 1);
    // display text on left side about walking
    // creates a new div
    var walkingText = document.createElement('div');
    // puts the text inside of that div
    walkingText.innerHTML = "You are walking a dusty path";
    // puts the new div onto the dom in the left side
    document.getElementById("left").appendChild(walkingText);
    if (userStatus.steps%2==0){
       var cokeBtn = document.createElement('button');
      // assign it an id
      cokeBtn.id = "coke";
      // set the text
      cokeBtn.innerHTML = "pick up a warm coke";
      // append it to the middle div
      document.getElementById("middle").appendChild(cokeBtn);

      cokeBtn.addEventListener('click', function() {
        var cokeCount =  Math.floor(Math.random() * (10 - 1) + 1);
        userStatus.cokes ? userStatus.cokes += cokeCount : userStatus.cokes = cokeCount;
        updateDom();
        var cokeText = document.createElement('div');
        
        cokeText.innerHTML = "The Gods smile down upon you, you picked up " + cokeCount + " cokes";
        
        document.getElementById("left").appendChild(cokeText);
        document.getElementById("middle").removeChild(cokeBtn);
      });
     }
    else if(userStatus.steps%3==0){
     var tacoBtn = document.createElement('button');
     tacoBtn.id = 'taco';

     tacoBtn.innerHTML = "A Taco Truck comes screeching to a stop!";

     document.getElementById("middle").appendChild(tacoBtn);

     tacoBtn.addEventListener('click', function(){
      var tacoCount = Math.floor(Math.random() * (10 - 1) + 1);


      userStatus.tacos ? userStatus.tacos += tacoCount: userStatus.tacos = tacoCount;
      updateDom();
      var tacoText = document.createElement('div');
      tacoText.innerHTML = "Darn partner you just scored "+tacoCount+ " tacos";
      document.getElementById("left").appendChild(tacoText);
      document.getElementById("middle").removeChild(tacoBtn);
     });
   }
   if(userStatus.steps>4 && userStatus.energy<85 && userStatus.tacos>=1){
    var eatBtn = document.createElement('button');
     eatBtn.id = 'eatTaco';

     eatBtn.innerHTML = "This ship runs on Salsa!";

     document.getElementById("middle").appendChild(eatBtn);

     eatBtn.addEventListener('click', function(){
     eatBtn.setAttribute('disabled', 'true');
    
    setTimeout(function() {
      eatBtn.removeAttribute('disabled');
    }, 10000);
      tacoCount = -1;

       userStatus.energy += Math.floor(Math.random() * (10 - 1) + 1);

      userStatus.tacos ? userStatus.tacos += tacoCount: userStatus.tacos = tacoCount;
      updateDom();
      var taco2Text = document.createElement('div');
      taco2Text.innerHTML = "You turned tacos into poop!";
      document.getElementById("left").appendChild(taco2Text);
      document.getElementById("middle").removeChild(eatBtn);

      // userStatus.energy = Math.floor(Math.random() * (10 - 1) + 1);
     });
   } 
   // if(userStatus.steps%3==0){
    // var drinkBtn = document.createElement('button');
    //  drinkBtn.id = 'drink';

    //  drinkBtn.innerHTML = "I am thirsty!";

    //  document.getElementById("middle").appendChild(drinkBtn);

    //  drinkBtn.addEventListener('click', function(){
     //  cokeCount = -Math.floor(Math.random() * (5 - 1) + 1);

     //   userStatus.energy += Math.floor(Math.random() * (10 - 1) + 1);

     //  userStatus.cokes ? userStatus.cokes += cokeCount: userStatus.cokes = cokeCount;
     //  updateDom();
     //  var coke2Text = document.createElement('div');
     //  coke2Text.innerHTML = "You turned  "+cokeCount+ " into poop";
     //  document.getElementById("left").appendChild(coke2Text);
     //  document.getElementById("middle").removeChild(drinkBtn);

     //  userStatus.energy = Math.floor(Math.random() * (3 - 1) + 1);
     // });
       if(userStatus.steps>5 && userStatus.energy<85 && userStatus.cokes>=1){
     var drinkBtn = document.createElement('button');
     drinkBtn.id = 'drink';

     drinkBtn.innerHTML = "I am thirsty!";

     document.getElementById("middle").appendChild(drinkBtn);

     drinkBtn.addEventListener('click', function(){
      drinkBtn.setAttribute('disabled', 'true');
      setTimeout(function() {
      drinkBtn.removeAttribute('disabled');
    }, 10000); 
    
       cokeCount = -1;

       userStatus.energy += Math.floor(Math.random() * (10 - 1) + 1);

      userStatus.cokes ? userStatus.cokes += cokeCount: userStatus.cokes = cokeCount;
      updateDom();
      var coke2Text = document.createElement('div');
      coke2Text.innerHTML = "You enjoyed a tasty beverage!";
      document.getElementById("left").appendChild(coke2Text);
      document.getElementById("middle").removeChild(drinkBtn);

      // userStatus.energy = Math.floor(Math.random() * (3 - 1) + 1);
    });

   } 

    updateDom();
  });

  // update the dom on pageload
  updateDom();
})();













// })();