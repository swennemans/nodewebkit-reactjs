nodewebkit-reactjs
==================

A node-webkit starter with react.js with todo example and browserify.

React.js components are located in components dir. In the methods dir is an example of using the 'fs' module.


Start
-----


````javascript
1) npm install
````
````javascript
2) gulp
````
````javascript
3) Add node-webkit executable to build dir. Get it from: https://github.com/rogerwang/node-webkit
````

What is working?
----------------
- Reload on change;
- Browserify;
- NPM modules (not extensively tested, but 'fs' works).

How to add an node module?
-----------------------
Require in index.html to make the node module available. See: https://github.com/substack/node-browserify/issues/481#issuecomment-46753255

