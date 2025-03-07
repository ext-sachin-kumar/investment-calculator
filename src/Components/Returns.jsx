import { formatter } from "../util/investment"

export default function Returns({results}) {
  const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
  return (
    <section id="result" className="center">
      <table>
        <thead>
          <tr>
            <td className="center" >Year</td>
            <td className="center" >Investment Value</td>
            <td className="center" >Interest (Year)</td>
            <td className="center" >Total Interest</td>
            <td className="center" >Inevested Capital</td>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
            const totalAmountInvested = result.valueEndOfYear - totalInterest;
            return (
              <tr key={result.year}>
                <td className="center" >{result.year}</td>
                <td className="center" >{formatter.format(result.valueEndOfYear)}</td>
                <td className="center" >{formatter.format(result.interest)}</td>
                <td className="center" >{formatter.format(totalInterest)}</td>
                <td className="center" >{formatter.format(totalAmountInvested)}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </section>
  )
}