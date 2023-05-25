const date1 = "01/02/2012";
let moisLongs = [1, 3, 5, 7, 8, 10, 12];
let moisCourts = [4, 6, 9, 11];
let moisFevrier = [2];

function isValidDate(date) {
  let dateValide = date.split("/", 3);
  let theDate = {
    theDay: parseInt(dateValide[0]),
    theMonth: parseInt(dateValide[1]),
    theYear: parseInt(dateValide[2]),
  };
  if (theDate.theMonth < 1 || theDate.theMonth > 12 || theDate.theDay < 0)
    false;
  else {
    if (moisLongs.find((el) => el === theDate.theMonth) && theDate.theDay < 32)
      return true;
    else if (
      moisCourts.find((el) => el === theDate.theMonth) &&
      theDate.theDay < 31
    )
      return true;
    else if (moisFevrier.find(theDate.theMonth) && theDate.theDayW < 28)
      return true;
    else return false;
  }
}

console.log(isValidDate(date1));
// const months = [1, 3, 5, 7, 9, 11];
// const monthFounded = months.find(el => el === 1);
// function isValideDate(date) {
//     let arr = date.split('/');
//     let day = parseInt(arr[0]);
//     let month = parseInt(arr[1]);
//     let year = parseInt(arr[2]);
//     // si le mois est impaire :
//     if (months.find(el => el === month)) return true;
//     else return false;
// }
// console.log(isValideDate('01/04/2023'));
// const isValideDate = (date) => {
//     let arr = date.split('/');
//     let day = parseInt(arr[0]);
//     let month = parseInt(arr[1]);
//     let year = parseInt(arr[2]);
//     // si le mois est impaire :
//     if (months.find(el => el === month)) return true;
//     else return false;
// }
// console.log(isValideDate("1/3/2021"))
