var bespoke = require('bespoke'),
  ixda = require('../../../lib/bespoke-theme-ixda.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  backdrop = require('bespoke-backdrop'),
  state = require('bespoke-state');

bespoke.from('article', [
  ixda(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  progress(),
  backdrop(),
  state()
]);
