/** @format */

// Question 1
var outOfStock = false;
if (outOfStock) {
  console.log("In stoc");
} else {
  console.log("Out of stock");
}

// Question 2
for (i = 15; i < 25; i++) {
  if (i >= 17 && i <= 20) {
    console.log(i);
  }
}

// Question 3

var games = [
  {
    title: "Grand Theft Auto",
    rating: 4.48,
  },
  {
    title: "Portal 2",
    rating: 3.5,
  },
  {
    title: "Team Fortress",
    rating: null,
  },
  {
    title: "The Witcher",
    rating: 3.0,
  },
  {
    title: "The Elder Scrolls",
    rating: 2.9,
  },
];
var gameContainer = document.querySelector("ul");
for (i = 0; i < games.length; i++) {
  if (games[i].rating < 3.5) {
    gameContainer.innerHTML +=
      "<li>" + games[i].title + " - " + games[i].title + "</li>";
  }
}

// Question 4

function whatIDontLike(item) {
  var itemType = typeof item;
  if (itemType === "string") {
    console.log("I don't like" + " " + item);
  } else {
    console.log("Please send in a string");
  }
}
whatIDontLike("giraffes");
whatIDontLike(4);

// Question 5

function sub(val1, val2) {
  var typeofval1 = typeof val1;
  var typeofval2 = typeof val2;
  if (typeofval1 == "number" && typeofval2 == "number") {
    var result = val2 - val1;
    return result;
  }
  if (isNaN(val1)) {
    num1 = Number(val1);
  } else {
    console.log("Invalid argument(s)");
  }
  if (isNaN(val2)) {
    num2 = Number(val2);
  } else {
    console.log("Invalid argument(s)");
  }
}

sub("hj", 5);

// Question 6

var title = document.querySelector("title");
var heading = document.querySelector("h1");
var buttonpage = document.querySelector("button");
var body = document.querySelector("body");
var unorderlist = document.querySelector("ul");

function changes() {
  document.title = "Updated title";
  body.style.backgroundColor = "yellow";
  heading.style.color = "green";
  heading.style.fontFamily = "Impact";
  unorderlist.style.listStyleType = "none";
  unorderlist.style.padding = "0";
  heading.innerHTML =
    "<a href='#'>Programming Foundations Course Assignment</a>";
}

buttonpage.onclick = changes;

// Question 7

var toys = [
  {
    name: "Lego",
    price: 15.6,
  },
  {
    name: "Master of the Universe",
    price: "28.3",
  },
  {
    name: "Barbie",
    price: null,
  },
  {
    name: "Mr Potato Head",
    price: 89.99,
  },
];

var calculateButton = document.querySelector(".price");
function calculation() {
  var total = 0;
  for (i = 0; i < toys.length; i++) {
    var currentprice = toys[i].price;
    var currentpriceType = typeof currentprice;
    if (currentpriceType === "string") {
      parseFloat(currentprice);
    } else if (currentpriceType === null) {
      Number(currentprice);
    }
    total += currentpriceType;
    console.log(total);
  }
  //document.getElementById("total").innerHTML = total;
}
calculateButton.onclick = calculation;
