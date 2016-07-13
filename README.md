alexandria
==========

[![npm version](https://badge.fury.io/js/alexandria.svg)](https://badge.fury.io/js/alexandria)
[![Build Status](https://travis-ci.org/Adslot/alexandria.svg?branch=master)](https://travis-ci.org/Adslot/alexandria)
[![codecov](https://codecov.io/gh/Adslot/alexandria/branch/master/graph/badge.svg)](https://codecov.io/gh/Adslot/alexandria)

A UI component library. By Adslot
---------------------------------

Named after the [Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria)

Technology:

- [React](http://facebook.github.io/react/)
- ES2015 (using [Babel](http://babeljs.io)\)
- [Webpack](https://github.com/webpack/webpack)
- [SCSS](http://sass-lang.com)
- [Yeoman](http://yeoman.io)
- [ESLint](http://eslint.org)
- [JSCS](http://jscs.info)
- [Autoprefixer](https://github.com/postcss/autoprefixer)

Development
-----------

- Take a look at our [Contributing](CONTRIBUTING.md) guidelines

- Clone the repo: `git clone git@github.com:Adslot/alexandria.git`

- Install [yeoman](http://yeoman.io) globally: `npm install -g yo` [OPTIONAL]

- Install NPM dependencies: `npm i`

- Set-up git hooks

  `rm -rf .git/hooks && cd .git/ && ln -s ../scripts/git-hooks hooks && chmod +x hooks/* && cd -`

Commands
--------

```sh
# Start for development

npm start

# Start the dev-server without automatic refresh

npm run start:cold

# Build the dist version

npm run dist

# Lint all files in src (also automatically run after tests)

npm run lint

# Run tests and posttest linting

npm run test

# Run tests and rebuild on file changes.

npm run test:watch
```

Generating New Components
-------------------------

`yo react-webpack:component alexandria/component/name`

This creates a new component, its stylesheet and a basic test case.

Most of the time you will want to add:

`--stateless`

That makes a stateless component (pure function, no internal state).

Build Profiling
---------------

To generate a profile: `npm run profile`

Upload the new `stats.json` file to [Webpack Analyse Tool](http://webpack.github.io/analyse).
