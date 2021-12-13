/*
 * This file is part of the ylebich.js.
 *
 * (c) 2021 Temuri Takalandze <me@abgeo.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { YleBich } = require("./index");

describe("Is ylebich", () => {
  it("Zuriko", () => {
    expect(new YleBich("Zuriko").sayMyName()).toBe("Zuriko is ylebich!");
  });

  it("Iliko", () => {
    expect(new YleBich("Iliko").sayMyName()).toBe("Iliko is ylebich!");
  });
});
