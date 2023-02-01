function woof(str) {
  if (typeof str !== "string") {
    throw Error("VALUE id not string.");
  }

  return str.length + "woof!";
}

module.exports = woof;

