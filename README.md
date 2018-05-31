# sp api
[![Build Status](https://travis-ci.org/rthiney/sp-api.svg?branch=master)](https://travis-ci.org/rthiney/sp-api)
[![codecov](https://codecov.io/gh/rthiney/sp-api/branch/master/graph/badge.svg)](https://codecov.io/gh/rthiney/sp-api)
[![npm version](https://badge.fury.io/js/sp-api.svg)](http://badge.fury.io/js/sp-api)
[![devDependency Status](https://david-dm.org/rthiney/sp-api/dev-status.svg)](https://david-dm.org/rthiney/sp-api?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/rthiney/sp-api.svg)](https://github.com/rthiney/sp-api/issues)
[![GitHub stars](https://img.shields.io/github/stars/rthiney/sp-api.svg)](https://github.com/rthiney/sp-api/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/rthiney/sp-api/master/LICENSE)

## Demo
https://rthiney.github.io/sp-api/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save sp-api
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { SpApiModule } from 'sp-api';

@NgModule({
  imports: [
    SpApiModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/rthiney/sp-api/blob/master/demo/demo.component.ts).

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://rthiney.github.io/sp-api/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
