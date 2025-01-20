// let input = document.createElement("input");
// let button = document.createElement("button");
// button.innerText = "Click me"

// let body = document.querySelector("body");
// body.append(input);
// body.append(button);

// input.setAttribute("placeholder", "Username");
// button.setAttribute("id", "btn");

// let btn = document.querySelector("#btn");
// btn.classList.add("btn");

// let h1 = document.createElement("h1")
// h1.innerText = "DOM practice";
// h1.classList.add("h1");
// body.append(h1);

// let para = document.createElement("p");
// para.innerHTML = `Apna College <b>Delta</b> practice.`;
// body.append(para);

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomColor = generateRandomColor();
  h3.innerText = generateRandomColor();

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
});

function generateRandomColor() {
  let val1 = Math.floor(Math.random() * 255);
  let val2 = Math.floor(Math.random() * 255);
  let val3 = Math.floor(Math.random() * 255);

  return `rgb(${val1}, ${val2}, ${val3})`;
}
