// JavaScript Document
//// this is a self-invoking anonymous function (IIFE/module)

(() => {
  // print("some message");
  console.log("Hello from JavaScript");

  // find the button element on the page by its ID with JavaScript
  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector('h1'),
      svgImage = document.querySelector("#svgImage");

  function toggleSelected() {
    debugger;
     this.classList.toggle('selected');
  }