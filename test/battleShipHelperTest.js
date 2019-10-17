const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const main = require('../src/battleship');
const {
  isPlayerValid,
  isShipPlaced,
  isPointValid,
  isShipTailValid,
  isOrientationValid,
  doesShipOverlap,
} = main;

it('isPlayerValid should return true if the player is "player"', () =>{
  assert.isTrue(isPlayerValid("player"));
});