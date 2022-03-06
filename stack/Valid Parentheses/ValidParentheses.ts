const ValidParentheses = (s: string): boolean => {
  const parentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (parentheses[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length;
};

module.exports = ValidParentheses;
