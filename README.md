# ylebich.js

Check the only truth about you, inspired by Heisenberg.

[![NPM version](https://img.shields.io/npm/v/ylebich-js.svg?style=flat)](https://www.npmjs.com/package/ylebich-js)
[![NPM monthly downloads](https://img.shields.io/npm/dm/ylebich-js.svg?style=flat)](https://npmjs.org/package/ylebich-js)
[![NPM total downloads](https://img.shields.io/npm/dt/ylebich-js.svg?style=flat)](https://npmjs.org/package/ylebich-js)

![Heisenberg](./.github/assets/heisenberg.png)

## Installation
```bash
$ npm install ylebich-js
```

## Usage

```js
const { YleBich } = require("ylebich-js");

const zuriko = new YleBich("Zuriko");
const iliko = new YleBich("Iliko");

console.log(zuriko.sayMyName());
console.log(iliko.sayMyName());
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for details.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

- [**Temuri Takalandze**](https://abgeo.dev) - *Initial work*

## License

Copyright © 2021 [Temuri Takalandze](https://abgeo.dev).  
Released under the [MIT](LICENSE) license.
