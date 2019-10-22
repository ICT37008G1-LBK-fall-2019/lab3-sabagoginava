let question = prompt('ramdeni sityvis sheyvana ginda');
let i = 0;
let myArray = [];
while (i < question) {
    let words = prompt('sheiyvane sasurveli sityva');
    myArray.push(words);
    i++;
    
}
let newWord = '';
console.log(myArray)
if (question == i) {
    newWord =  prompt('ra sityvas edzebt?');
}

let lastArray = []
for (var j = 0; j < myArray.length; j++) {
    if (myArray[j].indexOf(newWord) != -1){
        lastArray.push(myArray[j])
    }
}

console.log('rao arao?',lastArray);
