alexandria [![codecov.io](https://codecov.io/github/Adslot/alexandria/coverage.svg?branch=master)](https://codecov.io/github/Adslot/alexandria?branch=master)
==========

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

- Install [yeoman](http://yeoman.io) globally: `npm install -g yo`

- Install NPM dependencies: `npm i`

- Set-up git hooks

  `rm -rf .git/hooks && cd .git/ && ln -s ../scripts/git-hooks hooks && chmod +x hooks/* && cd -`

Commands
--------

```
# Start for development

npm start # or npm run serve

# Start the dev-server without automatic refresh

npm run start:cold

# Build the dist version

npm run dist

# Run unit tests

npm test

# Lint all files in src (also automatically run after tests)

npm run lint

# Clean up the dist directory

npm run clean
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
