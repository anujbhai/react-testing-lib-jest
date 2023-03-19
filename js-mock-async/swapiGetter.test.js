import mockAxios from "axios";
import swapiGetter from "./swapiGetter.js";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: jest.fn().mockResolvedValue({data: {name: "bulbasaur"}})
  }
}));

describe("swapi getter", () => {
  afterEach(jest.clearAllMocks);

  test("should return a name", async () => {
    const result = await swapiGetter(1);

    console.log(result);

    expect(result).toBe("bulbasaur");
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});

