var x = document.querySelector("p")

// Show Text
x.textContent

// Reassign Text
x.textContent = "new"

// Refresh the page
// Show actual HTML
x.innerHTML

// Edit HTML
x.innerHTML = "This is <strong>BOLD</strong>"

// Can't do that with just textContent

var special = document.querySelector("#special")
var specialA = y.querySelector("a")

specialA.getAttribute("href")

specialA.setAttribute("href","https://www.amazon.com")
