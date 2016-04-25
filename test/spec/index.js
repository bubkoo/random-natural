var expect = require('chai').expect;


describe('random-natural', function () {

  var randomNatural = require('../../');

  it('randomNatural()', function () {
    expect(randomNatural()).to.be.a('number');
  });

  it('randomNatural({ max: 2 })', function () {
    expect(randomNatural({ max: 2 })).to.be.oneOf([0, 1, 2]);
  });

  it('randomNatural({ min: 2, max: 10 })', function () {
    expect(randomNatural({ min: 2, max: 10 })).to.be.within(2, 10);
  });

  it('randomNatural({ min: 10, max: 2 })', function () {
    expect(randomNatural({ min: 10, max: 2 })).to.be.within(2, 10);
  });

  it('randomNatural({ min: "2", max: "10" })', function () {
    expect(randomNatural({ min: "2", max: "10" })).to.be.within(2, 10);
  });

  it('randomNatural({ min: "abc", max: { a: 1 } })', function () {
    expect(randomNatural({ min: "abc", max: { a: 1 } })).to.be.a('number');
  });

  it('randomNatural({ min: 0, max: 0 }) should always be 0', function () {
    expect(randomNatural({ min: 0, max: 0 })).to.equal(0);
  });

  it('randomNatural({ min: 1, max: 1, inspected: true }) should always be 1', function () {
    expect(randomNatural({ min: 1, max: 1, inspected: true })).to.equal(1);
  });

  it('randomNatural({ min: -1, max: -1 }) should always be 0', function () {
    expect(randomNatural({ min: -1, max: -1 })).to.equal(0);
  });

  it('randomNatural({ min: 0, max: -1 }) should always be 0', function () {
    expect(randomNatural({ min: 0, max: -1 })).to.equal(0);
  });

  it('randomNatural({ min: -1, max: 0 }) should always be 0', function () {
    expect(randomNatural({ min: -1, max: 0 })).to.equal(0);
  });

});
