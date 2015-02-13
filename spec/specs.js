describe("binToDec", function(){
  it ("returns 0 for input '0'", function(){
    expect(binToDec("0")).to.equal(0);
  });

  it("returns 1 for input '1'", function(){
    expect(binToDec("1")).to.equal(1);
  });

  it("returns 2 for input '10'", function(){
    expect(binToDec("10")).to.equal(2);
  });

  it("returns 3 for input '11'", function(){
    expect(binToDec("11")).to.equal(3);
  });

  it("returns 4 for input '100'", function(){
    expect(binToDec("100")).to.equal(4);
  });

});

describe("hexToDec", function(){
  it ("returns 10 for input 'a'", function(){
    expect(hexToDec("a")).to.equal(10);
  });

  it("returns 15 for input 'f'", function(){
    expect(hexToDec('f')).to.equal(15);
  });

  it("returns 123442342 for input '75b94a6'", function(){
    expect(hexToDec('75b94a6')).to.equal(123442342);
  });

});

describe("decToHex", function(){
  it("returns 'a' for input 10", function(){
    expect(decToHex(10)).to.equal('a');
  });

  it("returns 'f' for input 15", function(){
    expect(decToHex(15)).to.equal('f');
  });

  it("for input 16, returns '10'", function(){
    expect(decToHex(16)).to.equal('10');
  });
});
