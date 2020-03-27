function addEvent() {
  btn = document.getElementById("submitBtn");
  result = document.getElementsByClassName("resultsSection")[0];
  input = document.getElementsByClassName("fizzBuzzNumber")[0];
  newResult = "";

  btn.addEventListener("click", event => {
    event.preventDefault();
    newResult = '';
    result.innerHTML = '';

    if (input.value > 0) {
      for (i = 1; i <= input.value; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          newResult += `<div class="fizz-buzz-item fizzbuzz"> fizzbuzz </div>`;
        } else if (i % 3 === 0) {
          newResult += `<div class="fizz-buzz-item fizz"> fizz</div>`;
        } else if (i % 5 === 0) {
          newResult += `<div class="fizz-buzz-item buzz"> buzz</div>`;
        } else {
          newResult += `<div class="fizz-buzz-item"> ${i}</div>`;
        }
      }
      result.innerHTML = newResult;
    } else {
      console.log("Provide a positive number");
    }
  });
}

function init() {
  addEvent();
}

init();
