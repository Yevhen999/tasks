function palindrome(str) {
  const strLower = str.toLowerCase().replace(/\W|\_/g, '');
  const strJoined = strLower.split('').reverse().join('');
  return strLower === strJoined;
}

console.log(palindrome('_eye'));
console.log(palindrome('0_0 (: /- :) 0-0'));
console.log(palindrome('five|_/|four'));

// spaceDelete = .replace(/\s/g, '');
// _Delete = .replace(/\_/g, '');
// "|" means not or, "|" - means AND = .replace(/\_|\W/g, '');

//
// palindrome("eye") should return a boolean.
// Waiting:palindrome("eye") should return true.
// Waiting:palindrome("_eye") should return true.
// Waiting:palindrome("race car") should return true.
// Waiting:palindrome("not a palindrome") should return false.
// Waiting:palindrome("A man, a plan, a canal. Panama") should return true.
// Waiting:palindrome("never odd or even") should return true.
// Waiting:palindrome("nope") should return false.
// Waiting:palindrome("almostomla") should return false.
// Waiting:palindrome("My age is 0, 0 si ega ym.") should return true.
// Waiting:palindrome("1 eye for of 1 eye.") should return false.
// Waiting:palindrome("0_0 (: /-\ :) 0-0") should return true.
// Waiting:palindrome("five|\_/|four") should return false.
