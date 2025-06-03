import { calculateTipAndTotal } from "./calculateTipAndTotal";

describe("calculateTipAndTotal", () => {
  it("calculates tip and total per person with predefined tip", () => {
    const result = calculateTipAndTotal("100", 0.15, "", "2");
    expect(result.tipAmount).toBeCloseTo(7.5);
    expect(result.totalPerPerson).toBeCloseTo(57.5);
  });

  it("calculates tip and total per person with custom tip", () => {
    const result = calculateTipAndTotal("80", null, "20", "4");
    expect(result.tipAmount).toBeCloseTo(4);
    expect(result.totalPerPerson).toBeCloseTo(24);
  });

  it("returns zero when bill or people is invalid", () => {
    expect(calculateTipAndTotal("", 0.1, "", "2")).toEqual({
      tipAmount: 0,
      totalPerPerson: 0,
      isValid: false
    });
    expect(calculateTipAndTotal("100", 0.1, "", "")).toEqual({
      tipAmount: 0,
      totalPerPerson: 0,
      isValid: false
    });
  });

  it("returns zero when neither tip nor customTip is provided", () => {
    const result = calculateTipAndTotal("100", null, "", "2");
    expect(result.tipAmount).toBe(0);
    expect(result.totalPerPerson).toBe(0);
  });

  it("returns zero when bill or people is zero or negative", () => {
    expect(calculateTipAndTotal("0", 0.1, "", "2")).toEqual({
      tipAmount: 0,
      totalPerPerson: 0,
      isValid: false
    });
    expect(calculateTipAndTotal("-50", 0.1, "", "2")).toEqual({
      tipAmount: 0,
      totalPerPerson: 0,
      isValid: false
    });
    expect(calculateTipAndTotal("100", 0.1, "", "0")).toEqual({
      tipAmount: 0,
      totalPerPerson: 0,
      isValid: false
    });
    expect(calculateTipAndTotal("100", 0.1, "", "-3")).toEqual({
      tipAmount: 0,
      totalPerPerson: 0,
      isValid: false
    });
  });

  it("returns zero when customTip is not a valid number", () => {
    expect(calculateTipAndTotal("100", null, "abc", "2")).toEqual({
      tipAmount: 0,
      totalPerPerson: 0,
      isValid: false
    });
    expect(calculateTipAndTotal("100", null, "-10", "2")).toEqual({
      tipAmount: 0,
      totalPerPerson: 0,
      isValid: false
    });
  });

  it("calculates correctly with large and decimal values", () => {
    const result = calculateTipAndTotal("1234.56", 0.18, "", "3");
    expect(result.tipAmount).toBeCloseTo(74.0736, 2);
    expect(result.totalPerPerson).toBeCloseTo(485.5936, 2); // valor corregido
  });

  it("prioritizes tip over customTip if both are provided", () => {
    const result = calculateTipAndTotal("100", 0.2, "50", "2");
    expect(result.tipAmount).toBeCloseTo(10);
    expect(result.totalPerPerson).toBeCloseTo(60);
  });
});
