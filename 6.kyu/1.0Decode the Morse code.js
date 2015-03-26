//摩斯密码解密
decodeMorse = function(morseCode) {
    var words = morseCode.split('   ');
    return words.reduce(function(h, w, i) {
        return h += w.split(' ').reduce(function(l, m, n) {
            return l += MORSE_CODE[m] ? MORSE_CODE[m] : '';
        }, '') + ' ';
    }, '').slice(0, -1).trim();
}
var MORSE_CODE={'-.-.--':'!','.-..-.':'"','...-..-':'$','.-...':'&','.----.':'\'','-.--.':'(','-.--.-':')','.-.-.':'+','--..--':',','-....-':'-','.-.-.-':'.','-..-.':'/','-----':'0','.----':'1','..---':'2','...--':'3','....-':'4','.....':'5','-....':'6','--...':'7','---..':'8','----.':'9','---...':':','-.-.-.':';','-...-':'=','..--..':'?','.--.-.':'@','.-':'A','-...':'B','-.-.':'C','-..':'D','.':'E','..-.':'F','--.':'G','....':'H','..':'I','.---':'J','-.-':'K','.-..':'L','--':'M','-.':'N','---':'O','.--.':'P','--.-':'Q','.-.':'R','...':'S','-':'T','..-':'U','...-':'V','.--':'W','-..-':'X','-.--':'Y','--..':'Z','..--.-':'_','...---...':'SOS'};

decodeMorse = function(mc) {
  return mc.trim().split('   ').map(function(v) {return v.split(' ').map(function(w) {return MORSE_CODE[w];}).join('');}).join(' ');
};

encodeMorse = function(str){
    var MORSE_RECODE = getRecode();
    var words = str.split(' ');
    return words.map(function(w){
        return w.split('').map(function(c){
            return MORSE_RECODE[c];
        }).join(' ');
    }).join('   ');
}
function getRecode() {
    var MORSE_RECODE = {};
    for (var i in MORSE_CODE) {
        MORSE_RECODE[MORSE_CODE[i]]=i;
    }
    return MORSE_RECODE;
}
//decodeMorse('..   .-.. --- ...- .   ..-')
//encodeMorse('I LOVE U');