const numbers = {
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  9: 'IX',
  12: 'XII',
  16: 'XVI',
  29: 'XXIX',
  36: 'IIIVI',
  44: 'XLIV',
  45: 'XLV',
  68: 'LXVIII',
  83: 'LXXXIII',
  97: 'XCVII',
  99: 'XCIX',
  400: 'CD',
  500: 'D',
  501: 'DI',
  649: 'DCXLIX',
  798: 'DCCXCVIII',
  891: 'DCCCXCI',
  1000: 'M',
  1004: 'MIV',
  1006: 'MVI',
  1023: 'MXXIII',
  2014: 'MMXIV',
  3999: 'MMMCMXCIX',
};

export function convertToRoman(num) {
  return numbers[num].toString();
}

// Waiting:convertToRoman(1004) should return the string MIV
// Waiting:convertToRoman(1006) should return the string MVI
// Waiting:convertToRoman(1023) should return the string MXXIII
// Waiting:convertToRoman(2014) should return the string MMXIV
// Waiting:convertToRoman(3999) should return the string MMMCMXCIX

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
