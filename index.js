const rollButton = document.getElementById("clickToRoll");
const rollResult = document.getElementById("result");

rollButton.addEventListener("click", function () {
  let nSides = checkedParentSides();
  let nRolls = checkedParentRolls();
  rollResult.innerText = "Roll total:" + " " + Math.floor(Math.random() * nSides + 1) * nRolls;
});

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
