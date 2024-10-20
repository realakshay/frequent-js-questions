// Given two string, find if one string can form by rearranging of other string
function ReArrangeCheck(str1, str2) {
  str1 = str1.split("");
  for (var i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      str1.splice(str1.indexOf(str2[i]), 1);
    }
  }
  if (str1.length) {
    return false;
  }
  return true;
}
console.log(ReArrangeCheck("akshay", "yshaak"));
