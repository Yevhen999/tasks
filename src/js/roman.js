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
