const {getRandomInt, getRandomIntInRange} = require("./helper");

test("get a random integer in a given renge", () => {
  for (let i = 0; i < 20; i++) {
    const result = getRandomInt(3);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(3);
  }
});

test("get a random integer in a given renge", () => {
  for (let i = 0; i < 20; i++) {
    const result = getRandomIntInRange(4, 9);

    expect(result).toBeGreaterThanOrEqual(4);
    expect(result).toBeLessThan(9);
  }
});

