let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  if (input.value !== "") {
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
  } else {
    alert("Please enter a value to add to the list.");
  }

  input.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
