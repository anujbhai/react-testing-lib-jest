const woof = require("./woof");

test("should return number of woofs", function () {
  const result = woof("oh herro");

  expect(result).toBe("8woof!");
  expect(result).toMatch(/\dwoof/);
});

test("should return null when string not provided", function () {
  expect(() => woof()).toThrow("VALUE");
  // const result = woof();
  // expect(result).toBeNull();
});

test.todo("should not allow numbers to be passed.");

