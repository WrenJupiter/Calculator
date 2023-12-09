
it('should calculate the monthly rate correctly', function () {
  let values = { amount: 500, years: 5, rate:5};
  expect(calculateMonthlyPayment(values)).toEqual('9.44');
  expect(calculateMonthlyPayment(values)).toBe('9.44');
})


it("should return a result with 2 decimal places", function() {
  let values = { amount: 500, years: 5, rate:5};
  expect(calculateMonthlyPayment(values)).toBe('9.44');
})

it('should return a string', function () {
  const values = { amount: 500, years: 5, rate:5};
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
})
