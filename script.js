function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    let name = document.getElementById("new_recommendation_name");
    // Check if the message is not empty.  Name variable value is optional.
    if (recommendation.value != null && recommendation.value.trim() != "") {
      var element = document.createElement("div");
      showPopup(true);
      //Setting new attribute to the element
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value +"\<span\>&#8221;\</span\> " + "\<br\>" + "\<br\>" + name.value ;
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element); 
      
      // Reset the value of the textarea
      recommendation.value = "";
      name.value = "";
    }
  }

function showPopup(bool) {
  if(bool){
    document.getElementById("popup").style.visibility = "visible";
  }
  else{
    document.getElementById("popup").style.visibility = "hidden";
  }
}