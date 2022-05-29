let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/seal.png') {
      myImage.setAttribute('src','images/seal2.jpg');
    } else {
      myImage.setAttribute('src','images/seal2.jpg');
    }
}

// personalized welcome msg

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your 24 word seed phrase.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Seals are cool, ' + myName;
    }
  }


if(!localStorage.getItem('name')){
    setUserName();
} else { 
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Seals, WAGMI WAGMI, ' + storedName
}

myButton.onclick = function() {
    setUserName();
}

