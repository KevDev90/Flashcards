const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
let game;

beforeEach(() => {
  game = new Game();
});
describe('Game', function () {

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function () {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have a start method to start the game', function () {
    game.start();
  });

});
