const { series } = require('gulp');


function clean(cb) {
  // body omitted
  cb();
}

function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.default = series(clean, build);