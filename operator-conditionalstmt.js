let a = 10, b = 20;
console.log(a + b, a - b, a * b, a / b, a % b);

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is not greater than b");
}

switch (a) {
  case 10:
    console.log("a is 10");
    break;
  default:
    console.log("a is not 10");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
