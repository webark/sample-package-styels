'use strict';

const path = require('path');

const Funnel = require('broccoli-funnel');
const Merge = require('broccoli-merge-trees');

module.exports = {
  preprocessTree(type, tree) {
    if (type === 'css') {
      const mySass = new Funnel(path.join(this.root, 'styles'))
      tree = Merge([tree, mySass]);
    }

    return tree;
  },

  name: require('./package').name
};
