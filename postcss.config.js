"use strict";

module.exports = {
  plugins: {
    "postcss-import": {}, // Enable @import to be processed in CSS files and inlined, needed for processing CSS custom properties
    "postcss-cssnext": {} // Enable future spec features, down-compiled to browser CSS for today (includes autoprefixer) -- see cssnext.io
  }
};