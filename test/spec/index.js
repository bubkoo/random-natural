var char   = require('chai');
var expect = char.expect;


describe('random-natural', function () {

  var randomNatural = require('../../index');

  it('randomNatural()', function () {
    expect(randomNatural()).to.be.a('number');
    expect(randomNatural()).to.be.oneOf([0, 1]);
  });

  it('randomNatural(2)', function () {
    expect(randomNatural(2)).to.be.a('number');
    expect(randomNatural()).to.be.oneOf([0, 1, 2]);
  });

  it('randomNatural(2, 10)', function () {
    expect(randomNatural(2, 10)).to.be.a('number');
    expect(randomNatural(2, 10)).to.be.at.least(2);
    expect(randomNatural(2, 10)).be.be.at.most(10);
  });

  it('randomNatural(10, 2)', function () {
    expect(randomNatural(10, 2)).to.be.a('number');
    expect(randomNatural(10, 2)).to.be.at.least(2);
    expect(randomNatural(10, 2)).be.be.at.most(10);
  });

  it('randomNatural("2", "10")', function () {
    expect(randomNatural("2", "10")).to.be.a('number');
    expect(randomNatural("2", "10")).to.be.at.least(2);
    expect(randomNatural("2", "10")).be.be.at.most(10);
  });

  it('randomNatural("abc", {a: 1})', function () {
    expect(randomNatural("abc", {a: 1})).to.be.a('number');
    expect(randomNatural("abc", {a: 1})).to.be.oneOf([0, 1]);
  });

  it('randomNatural(0, 0) should always be 0', function () {
    expect(randomNatural(0, 0)).to.equal(0);
  });

  it('randomNatural(1, 1) should always be 1', function () {
    expect(randomNatural(1, 1)).to.equal(1);
  });

  it('randomNatural(-1, -1) should always be 0', function () {
    expect(randomNatural(-1, -1)).to.equal(0);
  });

  it('randomNatural(0, -1) should always be 0', function () {
    expect(randomNatural(0, -1)).to.equal(0);
  });

  it('randomNatural(-1, 0) should always be 0', function () {
    expect(randomNatural(-1, 0)).to.equal(0);
  });
});
