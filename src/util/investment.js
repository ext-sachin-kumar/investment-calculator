export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration
}) {
  initialInvestment = Number(initialInvestment);
  annualInvestment = Number(annualInvestment);
  expectedReturn = Number(expectedReturn);
  duration = Number(duration);
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    console.log(investmentValue)
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment
    });
  }

  console.log(annualData)
  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
