(function() {
  var userStatus = {
    energy: 100,
    steps: 0,
    coke: 0
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
    // display text on left side about walking
    // creates a new div
    var walkingText = document.createElement('div');
    // puts the text inside of that div
    walkingText.innerHTML = "You are walking a dusty path";
    // puts the new div onto the dom in the left side
    document.getElementById("left").appendChild(walkingText);
    if (userStatus.steps%2==0){
    var cokebtn = document.getElementById('coke');
    cokebtn.addEventListener('click', function(){
    cokebtn.setAttribute('disabled', 'true');
    setTimeout(function(){
      cokebtn.removeAttribute('disabled');
    },);
    userStatus.coke += Math.floor(Math.random() * (10-1)+1);
    var cokeText = document.createElement('div');
    cokeText.innerHTML = "You find a warm can of coke";
    document.getElementById("left").appendChild(cokeText);
    updateDom();
    })  
    }
    updateDom();
  });
  

  // update the dom on pageload
  updateDom();
})();












//grab the element with the id of status
// var status = document.getElementById("status");

//display all key/values in the userStatus object to the screen,
//only if value is > 0 
// function updateUserStatusDom(){
 
//   }
//   //clear the html of the status div
//   status.innerHTML = "";
//   for(key in userStatus){
//     //for every property in the userStatus object,
//     //create a div for it and append it to the status div
    if (userStatus[key]>0) {
      var div = document.createElement("div");
      div.innerHTML="<div>"+key+ ": "+ userStatus[key] + "</div>";
      status.appendChild(div);
    };
//   };
// })();