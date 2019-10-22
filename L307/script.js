let firstPrompt = prompt('ramdeni moswavle gsurt pirvel jgufshi');

let i = 0;
let firstArr = []
let secAr = [];
let names;

while (i < firstPrompt) {
 names = prompt('sheiyvanet saxelebi');
 firstArr.push(names);
            i++;
}
 if (i == firstPrompt) {
     let secPrompt = prompt('ramdeni moswavle gsurt meore jgufshi');
           let j = 0;   
        while (j < secPrompt) {
          var secNames = prompt('sheiyvanet meore jgufis moswavleebis saxelebi');
            secAr.push(secNames);
            j++;
            
        }
}
  let mainArr = [...firstArr,...secAr];
  let listingArr = []

    document.write('First List: ' + firstArr);
document.write('<br>');
    document.write('Second List: ' + secAr);
document.write('<br>');
for (let k = 0; k < mainArr.length; k++) {
    
    if (listingArr.indexOf(mainArr[k]) === -1) {
        listingArr.push(mainArr[k]);
    }
    
  
}
  document.write('Main List: '+ listingArr )



