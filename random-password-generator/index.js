
const passwordLengthInput = document.getElementById('lengthInput');
const includeLowercaseBox = document.getElementById('isIncludeLowerCase');
const includeUppercaseBox = document.getElementById('isIncludeUpperCase');
const includeNumbersBox = document.getElementById('isIncludeNumbers');
const includeSymbolsBox = document.getElementById('isIncludeSymbols');
const result = document.getElementById('result');



function generate(
     length = passwordLengthInput.value,
     includeLowercase = includeLowercaseBox.checked, 
     includeUppercase = includeUppercaseBox.checked, 
     includeNumbers = includeNumbersBox.checked, 
     includeSymbols = includeSymbolsBox.checked,

) {

    const lowercaseChars = 'qwertyuopilkjhgfdsazxcvbnm';
    const uppercaseChars = 'QWERTYUIOPLKHGFDSAZXCVNBM';
    const numberChars = '0123456789'
    const symbolChars = '/.-+<>'
    

    let allowedChars = "";
    let password = "";
    let loopInitial = 0;

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length< 6 || 50<length){
        result.textContent = 'Password length should be between 6 and 50!'
        return;
    }

    if(allowedChars.length == 0){
        result.textContent = 'At least 1 option should be selected!'
        return;
    }
    
    if(includeLowercase){
       let index = Math.floor(Math.random() * lowercaseChars.length);
       password += lowercaseChars[index];
       loopInitial++;
    }
    if(includeUppercase){
        let index = Math.floor(Math.random() * uppercaseChars.length);
        password += uppercaseChars[index];
        loopInitial++;
     }
     if(includeNumbers){
        let index = Math.floor(Math.random() * numberChars.length);
        password += numberChars[index];
        loopInitial++;
     }
     if(includeSymbols){
        let index = Math.floor(Math.random() * symbolChars.length);
        password += symbolChars[index];
        loopInitial++;
     }

    for(let i = loopInitial; i<length; i++){
       let index = Math.floor(Math.random() * allowedChars.length);
       password += allowedChars[index];
    }

    


    result.textContent = `Your password: ${password}`;
    console.log(`Your password: ${password}`)
}

