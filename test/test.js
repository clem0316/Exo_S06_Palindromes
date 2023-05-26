let assert = require("assert");
let script = require("../script.js");

// 1ère fonction : ISVALIDDATE

describe("script", () => {
  describe("#isValidDate(12/02/2012)", () => {
    it("sould return this answer", () => {
      assert.equal(script.isValidDate("12/02/2012"), "12022012");
    });
  });
  describe("#isValidDate(80/02/2012)", () => {
    it("sould return this answer", () => {
      assert.equal(
        script.isValidDate("80/02/2012"),
        "La date n'est pas valide"
      );
    });
  });
  describe("#isValidDate(12/00/2012)", () => {
    it("sould return this answer", () => {
      assert.equal(
        script.isValidDate("12/00/2012"),
        "La date n'est pas valide"
      );
    });
  });
  describe("#isValidDate(10/04/10234)", () => {
    it("sould return this answer", () => {
      assert.equal(
        script.isValidDate("10/04/10234"),
        "La date n'est pas valide"
      );
    });
  });
  describe("#isValidDate(31/04/3012)", () => {
    it("sould return this answer", () => {
      assert.equal(
        script.isValidDate("31/04/3012"),
        "La date n'est pas valide"
      );
    });
  });
  describe("#isValidDate(20/01/0998)", () => {
    it("sould return this answer", () => {
      assert.equal(
        script.isValidDate("20/01/0998"),
        "La date n'est pas valide"
      );
    });
  });
  describe("#isValidDate(00/02/2012)", () => {
    it("sould return this answer", () => {
      assert.equal(
        script.isValidDate("00/02/2012"),
        "La date n'est pas valide"
      );
    });
  });
  describe("#isValidDate(31/01/1999)", () => {
    it("sould return this answer", () => {
      assert.equal(script.isValidDate("31/01/1999"), "31011999");
    });
  });
});

// 2ème fonction : ISPALINDROME

describe("script", () => {
  describe("#isPalindrome(12/02/2012)", () => {
    it("shoud return this answer", () => {
      assert.equal(
        script.isPalindrome("12/02/2012"),
        "La date n'est PAS un palindrome"
      );
    });
  });
  describe("#isPalindrome(30/02/2012)", () => {
    it("shoud return this answer", () => {
      assert.equal(
        script.isPalindrome("30/02/2012"),
        "La date n'est pas valide"
      );
    });
  });
  describe("#isPalindrome(11/12/2111)", () => {
    it("shoud return this answer", () => {
      assert.equal(
        script.isPalindrome("11/12/2111"),
        "La date est un PALINDROME"
      );
    });
  });
});
