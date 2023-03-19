function woof(str) {
  if (typeof str !== "string") {
    throw Error("VALUE must be a string");
  }

  return str.length + "woof!";
}

module.exports = woof;

