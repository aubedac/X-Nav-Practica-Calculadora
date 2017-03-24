var display = document.getElementById('display');
var op1 = '0';
var ans;
var inicio = true;

document.onkeydown = keyboard;

function selected(n) {
  if( op1 == '0' || inicio) {
    display.innerHTML = n;
    op1 = n;
  } else {
    display.innerHTML += n;
    op1 += n;
  }
  inicio = false;
}

var operation;

function add() {
  display.innerHTML += " + ";
  operation = "+";
}

function minus() {
  display.innerHTML += " - ";
  operation = "-";
}

function div() {
  display.innerHTML += " / ";
  operation = "/";
}

function mult() {
  display.innerHTML += " x ";
  operation = "*";
}

function power() {
  display.innerHTML += " ^ ";
  operation = "^";

}

var result;

function equal() {

  var str = display.innerHTML;
  op1 = str.split(' ')[0];
  op2 = str.split(' ')[2];
  if(operation == "+") {
    result = parseInt(op1) + parseInt(op2);
    display.innerHTML = result;
  } else if(operation == "-") {
    result = parseInt(op1) - parseInt(op2);
    display.innerHTML = result;
  } else if(operation == "*") {
    result = parseInt(op1) * parseInt(op2);
    display.innerHTML = result;
  } else if(operation == "/") {
    result = parseInt(op1) / parseInt(op2);
    display.innerHTML = result;
  } else if(operation == "^") {
    result = Math.pow(parseInt(op1), parseInt(op2));
    display.innerHTML = result;
  }
  op1 = "0";
  op2 = " ";
}

function del() {
  len = op1.length;
  last = op1.substr(len-1, len);
  op1 = op1.substr(0, len-1);
  display.innerHTML = op1;
}

function erase() {
  display.innerHTML = "";
  op1 = "0";
  inicio = true;
}

function keyboard(e) {
  k = e.keyCode;
  if(k > 47 && k < 58) {
    input = k - 48;
    input = String(input);
    selected(input);
  }
  if(k > 95 && k < 106){
    input = k - 96;
    input = String(input);
    selected(input);
  }
  if(k == 8) {
    del();
  }
  if(k == 13) {
    equal();
  }
  if(k == 107) {
    add();
  }
  if(k == 109) {
    minus();
  }
  if(k == 106) {
    mult();
  }
  if(k == 111) {
    div();
  }
  if(k == 80) {
    power();
  }
}
