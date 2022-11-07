export function convertToRoman(num) {
  const dependence = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romans = '';

  for (let key in dependence) {
    while (num >= dependence[key]) {
      romans += key;
      num -= dependence[key];
    }
  }
  return romans;
}

convertToRoman(36);
