# Carbonated
A boilerplate for new front-end projects using npm and gulp 4.

## To-do
- [ ] Watch function
- [ ] Build function
- [ ] Compile scss
- [ ] Uglify css
- [ ] Uglify js
- [ ] Uglify code

## Psuedocode
```
function watch (public)
  if changes in scss
    compile scss
    refresh browser
  else
    refresh browser

function build (public)
  compile scss
  uglify code

function compile scss (private)
  compile scss in src dir in order
  pipe to distro dir

function uglify css (private)
  compile scss
  uglify css

function uglify js (private)
  uglify js

function uglify code (private)
  uglify css
  uglify js
```
