function indexOfIgnoreCase(s1, s2) {
  // write your code here
	
 // Handle null/undefined safety (in case prompt returns null)
  if (s1 == null || s2 == null) return -1;

  // Convert both strings to same case
  const str = s1.toLowerCase();
  const subStr = s2.toLowerCase();

  // Edge case: empty substring → return 0 (like native indexOf)
  if (subStr.length === 0) return 0;

  return str.indexOf(subStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
