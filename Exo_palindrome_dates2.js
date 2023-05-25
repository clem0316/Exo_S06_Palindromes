const date1 = "12/02/2012";
const date2 = "11/02/2011";
const date3 = "32/11/0998";
const date4 = "32/04/2000";

let moisLongs = [1, 3, 5, 7, 8, 10, 12];
let moisCourts = [4, 6, 9, 11];
let moisFevrier = [2];

//Etape 1 : Vérifier l'existence d'une date, et si oui, l'afficher au format DDMMYYYY
const isValidDate = (date) => {
  let dateValide = date.split("/", 3);
  let theDate = {
    theDay: parseInt(dateValide[0]),
    theMonth: parseInt(dateValide[1]),
    theYear: parseInt(dateValide[2]),
  };
  if (
    theDate.theMonth < 1 ||
    theDate.theMonth > 12 ||
    theDate.theDay < 1 ||
    theDate.theYear < 1000 ||
    theDate.theYear > 9999
  ) {
    return "La date n'est pas valide";
  }
  if (
    (moisLongs.indexOf(theDate.theMonth) !== -1 && theDate.theDay > 31) ||
    (moisCourts.indexOf(theDate.theMonth) !== -1 && theDate.theDay > 30) ||
    (moisFevrier.indexOf(theDate.theMonth) !== -1 && theDate.theDay > 28)
  ) {
    return "La date n'est pas valide";
  } else {
    if (theDate.theMonth < 10) {
      theDate.theMonth = "0" + theDate.theMonth;
    }
    return theDate.theDay + "" + theDate.theMonth + "" + theDate.theYear;
  }
};
// console.log(isValidDate(date2));

// Etape 2

function isPalindrome(date) {
  let checkMyDate = isValidDate(date);
  let revMyDate = checkMyDate.split("").reverse().join("");
  if (checkMyDate === "La date n'est pas valide") {
    return "La date n'est pas valide";
  }
  if (checkMyDate === revMyDate) {
    return "La date est un PALINDROME";
  } else {
    return "La date n'est PAS un palindrome";
  }
}
console.log(isPalindrome(date4));

//Etape 3

// function getNextPalindrome(nextDate) {
//     let allNextDate = []
//     let dateJour = showDate(nextDate)
//     console.log(dateJour)
//     for (let i = dateJour.theYear; i < 10000; i++) {
//         for (let j = dateJour.theMonth; j < 13; j++) {
//             for (let k = dateJour.theDay; k < 32; k++) {
//                 if () {
//                     allNextDate.push(isPalindrome(dateJour))}
//             }
//         }
//     }
//     return allNextDate
// }
// console.log(getNextPalindrome("12/01/2022"))

// mon
//      ^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$
