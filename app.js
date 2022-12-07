// let cm;
// cm = 1000;
// kilometer = cm / 100000;

// document.write(`Length in Kilometer = ${kilometer}km`);
// Scanner = new Scanner(System.in);
// System.out.printIn("Please enter centimeters");
// centimeters = scanner.nextDouble();
// covertedCentimeters = centimeters;
function LengthConverter(cm) {
    document.getElementById("outputKilograms").innerHTML = cm / 100000;
  }
  LengthConverter();