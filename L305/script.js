let number = prompt('ramdeni momxmareblis sheyvana gsurs');
let arr = [];
let i = 0;
let name;
while(i < number) {
    name = prompt('sheiyvanet studentis saxeli')
    arr.push(name);
    i++;
}

document.write(arr.sort())