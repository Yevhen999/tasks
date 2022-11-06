export function palindrome(str) {
  const strLowerRepl = str.toLowerCase().replace(/\W|\_/g, '');
  const strJoined = strLowerRepl.split('').reverse().join('');
  return strLowerRepl === strJoined;
}

// should be written shorter!!!

// spaceDelete = .replace(/\s/g, '');
// _Delete = .replace(/\_/g, '');
// "|" means not OR, "|" - means AND = .replace(/\_|\W/g, '');

// palindrome("eye") should return true.
// palindrome("_eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false.
