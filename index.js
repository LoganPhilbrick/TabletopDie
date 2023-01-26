const rollButton = document.getElementById("clickToRoll");
const rollResult = document.getElementById("result");
let list = [];
let listUl = document.getElementById("historyList");

rollButton.addEventListener("click", function () {
  let nSides = checkedParentSides();
  let nRolls = checkedParentRolls();
  let rollTotal = Math.floor(Math.random() * nSides + 1) * nRolls;
  rollResult.innerText = `Roll total: ${rollTotal}`;
  list.push(`${checkedParentRolls()} x ${checkedParentSides()} = ${rollTotal}`);

  let li = document.createElement("li");
  li.innerText = list[list.length - 1];
  listUl.insertBefore(li, listUl.firstChild);

  if (list.length >= 10) {
    list.pop();
  }
});

// function deleteChild() {
//   let e = document.querySelector("ul");

//   let child = e.lastElementChild;
//   while (child) {
//     e.removeChild(child);
//     child = e.lastElementChild;
//   }
// }

function checkedParentRolls() {
  let radioButtonGroup = document.getElementsByName("numOfRolls");
  let checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);
  return checkedRadio.parentElement.innerText;
}
function checkedParentSides() {
  let radioButtonGroup = document.getElementsByName("numOfSides");
  let checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);
  return checkedRadio.parentElement.innerText.slice(1);
}

function appendLi() {
  let ul = document.getElementById("historyList");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`${checkedParentRolls()} x ${checkedParentSides()} =`));
  ul.appendChild(li);
}
