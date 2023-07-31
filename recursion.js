/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestString = 0) {
  if (idx === words.length) {
    return longestString;
  }
  longestString = Math.max(words[idx].length, longestString);
  return longest(words, idx + 1, longestString);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, stringToReturn = "") {
  if (idx >= str.length) return stringToReturn;
  stringToReturn += str.slice(idx, idx + 1);
  return everyOther(str, idx + 2, stringToReturn);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0, palindrome = null) {
  if (str.length === 1) return true;
  if (idx === Math.floor(str.length / 2)) return palindrome;
  palindrome = str[idx] === str[str.length - 1 - idx] ? true : false;
  return isPalindrome(str, idx + 1, palindrome);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
