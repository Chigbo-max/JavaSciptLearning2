const form = document.getElementById("calculator-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const principal = parseFloat(document.getElementById("initialInvestment").value);
    const monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value);
    const time = parseFloat(document.getElementById("time").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value)/100;
    const interestVarianceRange = parseFloat(document.getElementById("interestVarianceRange").value);
    const compoundFrequency = parseFloat(document.getElementById("compoundFrequency").value);


    const interestFactorResult = getInterestFactorResult(interestRate, compoundFrequency, time)
    const compoundInterest = interestFactorResult * principal;
    const denominator = interestRate / compoundFrequency;
    const interestFactorFromContribution = (interestFactorResult - 1) / denominator;
    const contributionCompoundInterest = monthlyContribution * interestFactorFromContribution;
    let totalAmount = compoundInterest + contributionCompoundInterest;
    let interest = totalAmount - principal;

    result.innerHTML = `<p> After ${time}years, The principal of $${principal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} will grow to $${(totalAmount.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")},</p>
    <p>with an interest of $${interest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</P>`;
    

})

function getInterestFactorResult(interestRate, compoundFrequency, time) {
    let interestFactor = 1 + (interestRate / compoundFrequency);
    let interestFactorResult = Math.pow( interestFactor, compoundFrequency * time);
    return interestFactorResult;
}

function resetCalculator(){
    document.getElementById("calculator-form").reset();
    document.getElementById("result").innerHTML = " ";
}