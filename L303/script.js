let lari = prompt('შეიყვანეთ რიცხვი');
let h2 = document.querySelector('h2');
let newlari;


if (lari.indexOf('L') === 0) {
    console.log(lari);
     newlari = lari.substr(1,3);
    h2.textContent = newlari / 2.6 + ' amdeni dolaria';
} else if (lari.indexOf('$') === 0){
        newlari = lari.substr(1,3);
      h2.textContent = newlari * 2.6 + ' amdeni laria';
    
} else {
    alert('Miutite valuta')
}
