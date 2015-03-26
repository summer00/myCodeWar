var getDigitsCode = function() {
    var dic = {
        '-': '1110',
        '.': '10'
    }, digitsCode = {};
    for (var i in MORSE_CODE) {
        digitsCode[MORSE_CODE[i]] = i.split('').map(function(e) {
            return dic[e];
        }).join('')
    }
    return digitsCode;
}
var digitsCode = getDigitsCode();
digitsCode['A'];