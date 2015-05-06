var bespoke = require('bespoke'),
  fanzytv = require('../../../lib/bespoke-theme-fanzytv.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  backdrop = require('bespoke-backdrop'),
  state = require('bespoke-state');

bespoke.from('article', [
  fanzytv(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  progress(),
  backdrop(),
  state()
]);
