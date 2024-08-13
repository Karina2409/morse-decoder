const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = "";
    for (let i = 0; i < expr.length; i += 10) {
        console.log(i)
        let codeLetter = "";
        let limit = i + 10;
        for (let j = i; j < limit; j++) {
            if (expr[j] === "*") {
                result += " ";
                j += 10;
            }
            else {
                if (expr[j] === '1') {
                    let symbol = expr[j] + expr[j + 1];
                    if (symbol === "10") {
                        codeLetter += ".";
                    } else if (symbol === "11") {
                        codeLetter += "-";
                    }
                    j++;
                } else {
                    j++;
                }
            }
        }
        console.log(codeLetter)
        if (codeLetter !== '') {
            result += MORSE_TABLE[codeLetter];
        }

    }
    return result;
}

module.exports = {
    decode
}