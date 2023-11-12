let repeat = true;
while (repeat) {
    let arithmeticAction = prompt(`what arithemetic action do you want to do?
    Write "add' for addition type;
    "sub" for substraction type;
    "mul" for multiplication type; 
    or
    "div" for division type.  
    `,'')  // що означає ,'' ?



    if (arithmeticAction === 'add' || arithmeticAction === 'sul' || arithmeticAction === 'div' || arithmeticAction === 'mul') {
   
        alert (`You have chosen ${arithmeticAction === 'add' ? 'addition' : 
        arithmeticAction === 'sub' ? 'substraction' :
        arithmeticAction === 'mul' ? 'multiplication' :
        'division'}`)  //чому тут похилі лапки ..,

        let check = false;
        let firstNum;

        do {
        firstNum = +prompt('Enter the first number'); // а тут прямі?
            if (typeof firstNum === 'number' && isNaN(firstNum) === false) {
                check = false;
            } else {
                alert (`Please numbers only`);
                check = true;
            }
        } while (check);
        console.log(firstNum)
        let secondNum;
        do {
            secondNum = +prompt('Enter the second number');
            if (typeof secondNum === 'number' && isNaN(secondNum) === false) {
                check = false; 
            } else {
                alert (`Please nummbers only`);
                check = true;
            }
        } while (check);
        console.log(secondNum)

        let result; 
        let sign;

        switch(arithmeticAction) {
            case 'add':
                sign = '+';
                result = firstNum + secondNum;
                break;
            case 'sub':
                sign = '-';
                result = firstNum - secondNum;
                break;
            case 'mul':
                sign = '*';
                result = firstNum * secondNum;
                break;
            case 'div': 
                sign = '/'; 
                result = firstNum / secondNum;
                break;
        };
    
        alert(`${firstNum} ${sign} ${secondNum} = ${result}`);
   
    } else {
        arithmeticAction = confirm('Wrong action! Please enter: add, sub, mul, div only!');
    }
    repeat = confirm('Do you want to repeat?')
}