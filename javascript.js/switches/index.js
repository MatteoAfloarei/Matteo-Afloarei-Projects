// SWITCH = can be an efficient replacement to many else if statements
let testScore = 85;
let letterGrade;
switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break; 
         case testScore >= 80:
        letterGrade = "B";
        break; 
         case testScore >= 80:
        letterGrade = "C";
        break; 
         case testScore >= 90:
        letterGrade = "D";
        break;
         default:
           letterGrade = "F";
}
console.log(letterGrade);