alexandria
==========

A UI component library. By Adslot
---------------------------------

Named after the [Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria)

Technology:

-	React

-	ES2015 (using [Babel](http://babeljs.io)\)

-	[Flow](http://flowtype.org)

-	[Webpack](https://github.com/webpack/webpack)

-	[SCSS](http://sass-lang.com)

-	[Yeoman](http://yeoman.io)

-	[ESLint](http://eslint.org)

-	[JSCS](http://jscs.info)

Style guides:

-	[Airbnb ES2015](https://github.com/airbnb/javascript)

-	[Airbnb React](https://github.com/airbnb/javascript/tree/master/react)

Development
-----------

-	Clone the repo: `git clone git@github.com:Adslot/alexandria.git`

-	Install [yeoman](http://yeoman.io) globally: `npm install -g yo`

-	Install NPM dependencies: `npm i`

Commands
--------

```
# Start for development

npm start # or npm run serve

# Start the dev-server with the dist version

npm run serve:dist

# Just build the dist version and copy static files

npm run dist

# Run unit tests

npm test

# Lint all files in src (also automatically run after tests)

npm run lint

# Clean up the dist directory

npm run clean

# Just copy the static assets

npm run copy
```

Generating New Components
-------------------------

`yo react-webpack:component my/name/spaced/components/name`

This creates a new component, its stylesheet and a basic test case.
