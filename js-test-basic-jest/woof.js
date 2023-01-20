function woof(str) {
  if (typeof str !== "string") {
    return;
  }

  return str.length + " woof!";
}

module.exports = woof;

