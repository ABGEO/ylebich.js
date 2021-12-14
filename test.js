/*
 * This file is part of the ylebich.js.
 *
 * (c) 2021 Temuri Takalandze <me@abgeo.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { YleBich } = require("./index");

const sayMyName = (name) => new YleBich(name).sayMyName();

describe("Is ylebich", () => {
  it("Zuriko", () => {
    expect(sayMyName("Zuriko")).toBe("Zuriko is ylebich!");
  });

  it("Iliko", () => {
    expect(sayMyName("Iliko")).toBe("Iliko is ylebich!");
  });
});

describe("Is not ylebich", () => {
  it("Temuri", () => {
    expect(() => {
      sayMyName("Temuri");
    }).toThrow(Error);
  });

  it("Temo", () => {
    expect(() => {
      sayMyName("Temo");
    }).toThrow(Error);
  });
});
