# Carbonated
A boilerplate for new front-end projects using npm and gulp 4.

## To-do
- [ ] Watch function
- [ ] Clean function
- [ ] Compile scss
- [ ] Uglify css
- [ ] Uglify js
- [ ] Uglify code
- [ ] Build function

## Psuedocode
```
function watch (public)
  start server
  if changes in scss
    compile scss
    refresh browser
  else
    refresh browser

function build (public)
  clean
  compile scss
  uglify code

function clean (private)
  clean distro/

function compile scss (private)
  compile scss in src/ dir in order
  pipe to distro/ dir

function uglify css (private)
  compile scss
  uglify css

function uglify js (private)
  uglify js

function uglify code (private)
  uglify css
  uglify js
```
