let exp = "";
let lastAns = 0;

function append(value) {
  exp += value;
  document.getElementById("expression").innerText = exp;
}

function clearAll() {
  exp = "";
  document.getElementById("expression").innerText = "";
  document.getElementById("result").innerText = "0";
}

function del() {
  exp = exp.slice(0, -1);
  document.getElementById("expression").innerText = exp;
}

function useAns() {
  exp += lastAns;
  document.getElementById("expression").innerText = exp;
}

function calculate() {
  try {
    lastAns = eval(exp);
    document.getElementById("result").innerText = lastAns;
  } catch {
    document.getElementById("result").innerText = "Error";
  }
}
