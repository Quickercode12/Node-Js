exports.evenOdd = (x) => {
  if (x % 2 == 0) {
    console.log("Number is even");
  } else {
    console.log("Number is add");
  }
};

exports.Palindrom = (x) => {
  let localNumber = x;
  let reversedNumber = 0;

  while (localNumber != 0) {
    let digit = localNumber % 10;
    reversedNumber = reversedNumber * 10 + digit;
    localNumber = Math.floor(localNumber / 10);
  }

  if (reversedNumber == x) {
    console.log("Number is Palindrom");
  } else {
    console.log("Number is not Palindrom");
  }
};
