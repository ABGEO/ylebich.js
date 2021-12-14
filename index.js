/*
 * This file is part of the ylebich.js.
 *
 * (c) 2021 Temuri Takalandze <me@abgeo.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
"use strict";

class YleBich {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    const excluded = [
      "abgeo",
      "teimuraz",
      "teimurazi",
      "temchacho",
      "temcho",
      "temo",
      "temur",
      "temura",
      "temuri",
      "temurika",
    ];

    if (excluded.includes(this.name.toLowerCase())) {
      throw new Error("The author of this package cannot be a ylebich!");
    }

    return `${this.name} is ylebich!`;
  }
}

exports.YleBich = YleBich;
