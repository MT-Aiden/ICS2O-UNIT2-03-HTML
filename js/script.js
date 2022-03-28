// Created by: Aiden McLeod
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const streetname = document.getElementById("streetname").value
  const streetnumber = parseInt(document.getElementById("streetnumber").value)

  // output
  document.getElementById("address").innerHTML =
    "Your adress is: " + streetname + ", age " + streetnumber + "."
}
