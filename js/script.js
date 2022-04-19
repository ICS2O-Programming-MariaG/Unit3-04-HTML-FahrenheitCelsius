// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: April 19, 2022
// This file contains the JS functions for index.html

function temperatureEntered() {
  let fahrenheit = parseFloat(document.getElementById("temp").value);
  let celsius = 5 / 9 * (fahrenheit - 32);
  document.getElementById("results").innerHTML = "The temperature in Celsius is " + parseInt(celsius) + " degrees Celsius."
}
