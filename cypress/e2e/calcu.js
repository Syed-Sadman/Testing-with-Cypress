// add border and show the calculators

function nmlFun() {
  const nmlElement = document.getElementById("nml-element");
  const rmlElement = document.getElementById("rml-element");
  const tdsrElement = document.getElementById("tdsr-element");

  const nmlBtn = document.getElementById("nml-btn");
  const rmlBtn = document.getElementById("rml-btn");
  const tdsrBtn = document.getElementById("tdsr-btn");

  nmlElement.classList.remove("hide");
  rmlElement.classList.add("hide");
  tdsrElement.classList.add("hide");

  nmlBtn.classList.add("border-btn");
  rmlBtn.classList.remove("border-btn");
  tdsrBtn.classList.remove("border-btn");
}
function rmlFun() {
  const nmlElement = document.getElementById("nml-element");
  const rmlElement = document.getElementById("rml-element");
  const tdsrElement = document.getElementById("tdsr-element");

  const nmlBtn = document.getElementById("nml-btn");
  const rmlBtn = document.getElementById("rml-btn");
  const tdsrBtn = document.getElementById("tdsr-btn");

  rmlElement.classList.remove("hide");
  nmlElement.classList.add("hide");
  tdsrElement.classList.add("hide");

  rmlBtn.classList.add("border-btn");
  nmlBtn.classList.remove("border-btn");
  tdsrBtn.classList.remove("border-btn");
}
function tdsrFun() {
  const nmlElement = document.getElementById("nml-element");
  const rmlElement = document.getElementById("rml-element");
  const tdsrElement = document.getElementById("tdsr-element");

  const nmlBtn = document.getElementById("nml-btn");
  const rmlBtn = document.getElementById("rml-btn");
  const tdsrBtn = document.getElementById("tdsr-btn");

  tdsrElement.classList.remove("hide");
  rmlElement.classList.add("hide");
  nmlElement.classList.add("hide");

  tdsrBtn.classList.add("border-btn");
  nmlBtn.classList.remove("border-btn");
  rmlBtn.classList.remove("border-btn");
}
// function fhcFun() {
//   const fhcElement = document.getElementById("fhc-element");
//   const nmlElement = document.getElementById("nml-element");
//   const rmlElement = document.getElementById("rml-element");
//   const tdsrElement = document.getElementById("tdsr-element");

//   const fhcBtn = document.getElementById("fhc-btn");
//   const nmlBtn = document.getElementById("nml-btn");
//   const rmlBtn = document.getElementById("rml-btn");
//   const tdsrBtn = document.getElementById("tdsr-btn");

//   fhcElement.classList.remove("hide");
//   tdsrElement.classList.add("hide");
//   rmlElement.classList.add("hide");
//   nmlElement.classList.add("hide");

//   fhcBtn.classList.add("border-btn");
//   tdsrBtn.classList.remove("border-btn");
//   nmlBtn.classList.remove("border-btn");
//   rmlBtn.classList.remove("border-btn");
// }

// calculations of nml calculator
function hdbFun() {
  const hdbBtn = document.getElementById("nml-hdb-btn");
  const condoBtn = document.getElementById("nml-condo-btn");
  const executiveBtn = document.getElementById("nml-executive-btn");
  const propertyBtn = document.getElementById("nml-property-btn");

  hdbBtn.classList.add("border-btn");
  condoBtn.classList.remove("border-btn");
  executiveBtn.classList.remove("border-btn");
  propertyBtn.classList.remove("border-btn");
}
function condoFun() {
  const hdbBtn = document.getElementById("nml-hdb-btn");
  const condoBtn = document.getElementById("nml-condo-btn");
  const executiveBtn = document.getElementById("nml-executive-btn");
  const propertyBtn = document.getElementById("nml-property-btn");

  condoBtn.classList.add("border-btn");
  hdbBtn.classList.remove("border-btn");
  executiveBtn.classList.remove("border-btn");
  propertyBtn.classList.remove("border-btn");
}
function executiveFun() {
  const hdbBtn = document.getElementById("nml-hdb-btn");
  const condoBtn = document.getElementById("nml-condo-btn");
  const executiveBtn = document.getElementById("nml-executive-btn");
  const propertyBtn = document.getElementById("nml-property-btn");

  executiveBtn.classList.add("border-btn");
  hdbBtn.classList.remove("border-btn");
  condoBtn.classList.remove("border-btn");
  propertyBtn.classList.remove("border-btn");
}
function propertyFun() {
  const hdbBtn = document.getElementById("nml-hdb-btn");
  const condoBtn = document.getElementById("nml-condo-btn");
  const executiveBtn = document.getElementById("nml-executive-btn");
  const propertyBtn = document.getElementById("nml-property-btn");

  propertyBtn.classList.add("border-btn");
  hdbBtn.classList.remove("border-btn");
  condoBtn.classList.remove("border-btn");
  executiveBtn.classList.remove("border-btn");
}
function completedFun() {
  const completedBtn = document.getElementById("nml-completed-btn");
  const underBtn = document.getElementById("nml-under-btn");

  completedBtn.classList.add("border-btn");
  underBtn.classList.remove("border-btn");
}
function underFun() {
  const completedBtn = document.getElementById("nml-completed-btn");
  const underBtn = document.getElementById("nml-under-btn");

  underBtn.classList.add("border-btn");
  completedBtn.classList.remove("border-btn");
}
function nmlAddErrorBorderFun() {
  const a = document.getElementById("nml-amount");
  const b = document.getElementById("nml-tenure");
  const c = document.getElementById("nml-interest");

  if (a.value.trim() == "") {
    a.classList.add("error-border-input");
  }
  if (b.value.trim() == "") {
    b.classList.add("error-border-input");
  }
  if (c.value.trim() == "") {
    c.classList.add("error-border-input");
  }
}
function nmlRemoveErrorBorderFun() {
  const a = document.getElementById("nml-amount");
  const b = document.getElementById("nml-tenure");
  const c = document.getElementById("nml-interest");

  if (a.value.trim() != "") {
    a.classList.remove("error-border-input");
  }
  if (b.value.trim() != "") {
    b.classList.remove("error-border-input");
  }
  if (c.value.trim() != "") {
    c.classList.remove("error-border-input");
  }
}
function nmlCalculateBtn() {
  // const a = document.getElementById("nml-amount");
  // const b = document.getElementById("nml-tenure");
  // const c = document.getElementById("nml-interest");

  const loanAmount = document.getElementById("nml-amount").value;
  const loanTenureYears = document.getElementById("nml-tenure").value;
  const loanInterestPerecentage = document.getElementById("nml-interest").value;

  if (
    loanAmount.trim() == "" ||
    loanTenureYears.trim() == "" ||
    loanInterestPerecentage.trim() == ""
  ) {
    alert("please enter all the required fields");
  }
  if (
    loanAmount.trim() == "" ||
    loanTenureYears.trim() == "" ||
    loanInterestPerecentage.trim() == ""
  ) {
    nmlAddErrorBorderFun();
  } else {
    // monthly installment calculations

    const loanTenureMonths = loanTenureYears * 12;
    const monthlyLoanInterest = loanInterestPerecentage / (12 * 100);

    const sqr = (1 + monthlyLoanInterest) ** loanTenureMonths;

    const monthlyInstallment = (
      (loanAmount * monthlyLoanInterest * sqr) /
      (sqr - 1)
    ).toFixed(2);

    const h4Element = (document.getElementById(
      "nml-monthly-repayment"
    ).innerHTML = `S$ ${monthlyInstallment}`);

    // all years div

    const secondHalfElement = document.getElementById("nml-years");

    const currentYear = parseInt(new Date().getFullYear());

    const totalYears = currentYear + parseInt(loanTenureYears);

    // calculate interest for the current year
    let outstandingAmount = loanAmount;
    let interestPayment = outstandingAmount * monthlyLoanInterest;
    let principalAmount = monthlyInstallment - interestPayment;
    let yearlyInterest = interestPayment;
    // console.log(yearlyInterest);
    let yearlyPrincipalAmount = principalAmount;

    for (let i = 2; i <= 12; i++) {
      outstandingAmount = outstandingAmount - principalAmount;
      interestPayment = outstandingAmount * monthlyLoanInterest;
      principalAmount = monthlyInstallment - interestPayment;

      yearlyInterest += interestPayment;

      yearlyPrincipalAmount += principalAmount;
    }

    let yearlyInstallment = yearlyInterest + yearlyPrincipalAmount;

    secondHalfElement.innerHTML = `<div class="form-group p-3" style="border-bottom: 1px solid rgba(7, 0, 47, 0.2)">
			                                        <h5>${currentYear}</h5>
			                                        <span class="font-weight-bold" style="opacity:0.6">Yearly Installment:</span> <span class="font-weight-bold">S$ ${yearlyInstallment.toFixed(
                                                2
                                              )}</span><br />
			                                        <span class="font-weight-bold" style="opacity:0.6">Interest Payment:</span> <span class="font-weight-bold">S$ ${yearlyInterest.toFixed(
                                                2
                                              )}</span><br />
			                                        <span class="font-weight-bold" style="opacity:0.6">Principal Amount:</span> <span class="font-weight-bold">S$ ${yearlyPrincipalAmount.toFixed(
                                                2
                                              )}</span><br />
			                                    </div>`;

    let lastOutstandingAmount = outstandingAmount;
    let lastInterestPayment = interestPayment;
    let lastPrincipalAmount = principalAmount;
    let lastYearlyInterest = lastInterestPayment;

    let lastYearlyPrincipalAmount = principalAmount;

    let plusOneYear = currentYear + 1;
    for (let j = plusOneYear; j < totalYears; j++) {
      lastOutstandingAmount = lastOutstandingAmount - lastPrincipalAmount;

      lastInterestPayment = lastOutstandingAmount * monthlyLoanInterest;

      lastPrincipalAmount = monthlyInstallment - lastInterestPayment;

      lastYearlyInterest = lastInterestPayment;

      lastYearlyPrincipalAmount = lastPrincipalAmount;

      for (let k = 2; k <= 12; k++) {
        lastOutstandingAmount = lastOutstandingAmount - lastPrincipalAmount;
        lastInterestPayment = lastOutstandingAmount * monthlyLoanInterest;
        lastPrincipalAmount = monthlyInstallment - lastInterestPayment;

        lastYearlyInterest += lastInterestPayment;

        lastYearlyPrincipalAmount += lastPrincipalAmount;
        // console.log(lastYearlyInterest);
      }
      // console.log(lastYearlyInterest);

      let lastYearlyInstallment =
        lastYearlyInterest + lastYearlyPrincipalAmount;
      secondHalfElement.innerHTML += `<div class="form-group p-3" style="border-bottom: 1px solid rgba(7, 0, 47, 0.2)">
											<h5>${j}</h5>
											<span class="font-weight-bold" style="opacity:0.6">Yearly installment:</span> <span class="font-weight-bold">S$ ${lastYearlyInstallment.toFixed(
                        2
                      )}</span><br />
											<span class="font-weight-bold" style="opacity:0.6">Interest Payment:</span> <span class="font-weight-bold">S$ ${lastYearlyInterest.toFixed(
                        2
                      )}</span><br />
											<span class="font-weight-bold" style="opacity:0.6">Principal Amount:</span> <span class="font-weight-bold">S$ ${lastYearlyPrincipalAmount.toFixed(
                        2
                      )}</span>
										</div>`;
    }
  }
}

// calculations of rml calculator
function rmlHdbFun() {
  const rmlHdbBtn = document.getElementById("rml-hdb-btn");
  const rmlCondoBtn = document.getElementById("rml-condo-btn");
  const rmlExecutiveBtn = document.getElementById("rml-executive-btn");
  const rmlPropertyBtn = document.getElementById("rml-property-btn");

  rmlHdbBtn.classList.add("border-btn");
  rmlCondoBtn.classList.remove("border-btn");
  rmlExecutiveBtn.classList.remove("border-btn");
  rmlPropertyBtn.classList.remove("border-btn");
}
function rmlCondoFun() {
  const rmlHdbBtn = document.getElementById("rml-hdb-btn");
  const rmlCondoBtn = document.getElementById("rml-condo-btn");
  const rmlExecutiveBtn = document.getElementById("rml-executive-btn");
  const rmlPropertyBtn = document.getElementById("rml-property-btn");

  rmlCondoBtn.classList.add("border-btn");
  rmlHdbBtn.classList.remove("border-btn");
  rmlExecutiveBtn.classList.remove("border-btn");
  rmlPropertyBtn.classList.remove("border-btn");
}
function rmlExecutiveFun() {
  const rmlHdbBtn = document.getElementById("rml-hdb-btn");
  const rmlCondoBtn = document.getElementById("rml-condo-btn");
  const rmlExecutiveBtn = document.getElementById("rml-executive-btn");
  const rmlPropertyBtn = document.getElementById("rml-property-btn");

  rmlExecutiveBtn.classList.add("border-btn");
  rmlHdbBtn.classList.remove("border-btn");
  rmlCondoBtn.classList.remove("border-btn");
  rmlPropertyBtn.classList.remove("border-btn");
}
function rmlPropertyFun() {
  const rmlHdbBtn = document.getElementById("rml-hdb-btn");
  const rmlCondoBtn = document.getElementById("rml-condo-btn");
  const rmlExecutiveBtn = document.getElementById("rml-executive-btn");
  const rmlPropertyBtn = document.getElementById("rml-property-btn");

  rmlPropertyBtn.classList.add("border-btn");
  rmlHdbBtn.classList.remove("border-btn");
  rmlCondoBtn.classList.remove("border-btn");
  rmlExecutiveBtn.classList.remove("border-btn");
}
function rmlAddErrorBorderFun() {
  const a = document.getElementById("rml-amount");
  const b = document.getElementById("rml-tenure");
  const c = document.getElementById("rml-existing-interest");
  const d = document.getElementById("rml-new-interest");

  if (
    a.value.trim() == "" ||
    b.value.trim() == "" ||
    c.value.trim() == "" ||
    d.value.trim() == ""
  ) {
    alert("please enter all the required fields");
  }
  if (a.value.trim() == "") {
    a.classList.add("error-border-input");
  }
  if (b.value.trim() == "") {
    b.classList.add("error-border-input");
  }
  if (c.value.trim() == "") {
    c.classList.add("error-border-input");
  }
  if (d.value.trim() == "") {
    d.classList.add("error-border-input");
  }
}
function rmlRemoveErrorBorderFun() {
  const a = document.getElementById("rml-amount");
  const b = document.getElementById("rml-tenure");
  const c = document.getElementById("rml-existing-interest");
  const d = document.getElementById("rml-new-interest");

  if (a.value.trim() != "") {
    a.classList.remove("error-border-input");
  }
  if (b.value.trim() != "") {
    b.classList.remove("error-border-input");
  }
  if (c.value.trim() != "") {
    c.classList.remove("error-border-input");
  }
  if (d.value.trim() != "") {
    d.classList.remove("error-border-input");
  }
}
function rmlCalculateBtn() {
  const loanAmount = document.getElementById("rml-amount").value;
  const loanTenureYears = document.getElementById("rml-tenure").value;
  const existingLoanInterestPerecentage = document.getElementById(
    "rml-existing-interest"
  ).value;
  const newLoanInterestPerecentage =
    document.getElementById("rml-new-interest").value;
  const processingFees = document.getElementById("rml-fees").value;

  if (
    loanAmount.trim() == 0 ||
    loanTenureYears.trim() == "" ||
    existingLoanInterestPerecentage.trim() == "" ||
    newLoanInterestPerecentage.trim() == ""
  ) {
    rmlAddErrorBorderFun();
  } else {
    // monthly installment calculations

    const loanTenureMonths = loanTenureYears * 12;
    const existingMonthlyLoanInterest =
      existingLoanInterestPerecentage / (12 * 100);
    const newMonthlyLoanInterest = newLoanInterestPerecentage / (12 * 100);

    const existingSqr = (1 + existingMonthlyLoanInterest) ** loanTenureMonths;
    const newSqr = (1 + newMonthlyLoanInterest) ** loanTenureMonths;

    const existingMonthlyInstallment = (
      (loanAmount * existingMonthlyLoanInterest * existingSqr) /
      (existingSqr - 1)
    ).toFixed(2);
    const newMonthlyInstallment = (
      (loanAmount * newMonthlyLoanInterest * newSqr) /
      (newSqr - 1)
    ).toFixed(2);

    const h4ExistingElement = (document.getElementById(
      "rml-existing-monthly-repayment"
    ).innerHTML = `S$ ${existingMonthlyInstallment}`);
    const h4NewElement = (document.getElementById(
      "rml-new-monthly-repayment"
    ).innerHTML = `S$ ${newMonthlyInstallment}`);

    // all years div

    const secondHalfElement = document.getElementById("rml-years");

    const currentYear = parseInt(new Date().getFullYear());

    const totalYears = currentYear + parseInt(loanTenureYears);

    // calculate interest for the current year
    let existingOutstandingAmount = loanAmount;
    let newOutstandingAmount = loanAmount;
    let existingInterestPayment =
      existingOutstandingAmount * existingMonthlyLoanInterest;
    let newInterestPayment = newOutstandingAmount * newMonthlyLoanInterest;
    let existingPrincipalAmount =
      existingMonthlyInstallment - existingInterestPayment;
    let newPrincipalAmount = newMonthlyInstallment - newInterestPayment;
    let existingYearlyInterest = existingInterestPayment;
    let newYearlyInterest = newInterestPayment;
    // console.log(existingYearlyInterest);
    let existingYearlyPrincipalAmount = existingPrincipalAmount;
    let newYearlyPrincipalAmount = newPrincipalAmount;

    for (let i = 2; i <= 12; i++) {
      existingOutstandingAmount =
        existingOutstandingAmount - existingPrincipalAmount;
      newOutstandingAmount = newOutstandingAmount - newPrincipalAmount;
      existingInterestPayment =
        existingOutstandingAmount * existingMonthlyLoanInterest;
      newInterestPayment = newOutstandingAmount * newMonthlyLoanInterest;
      existingPrincipalAmount =
        existingMonthlyInstallment - existingInterestPayment;
      newPrincipalAmount = newMonthlyInstallment - newInterestPayment;

      existingYearlyInterest += existingInterestPayment;
      newYearlyInterest += newInterestPayment;

      existingYearlyPrincipalAmount += existingPrincipalAmount;
      newYearlyPrincipalAmount += newPrincipalAmount;
    }

    let existingYearlyInstallment =
      existingYearlyInterest + existingYearlyPrincipalAmount;
    let newYearlyInstallment = newYearlyInterest + newYearlyPrincipalAmount;

    let savedInterest = existingYearlyInterest - newYearlyInterest;

    let accumulatedInterestSaved = savedInterest;

    let refinancingBenefit = accumulatedInterestSaved - processingFees;

    secondHalfElement.innerHTML = `<div class="form-group p-3" style="border-bottom: 1px solid rgba(7, 0, 47, 0.2)">
			                                             <h5>${currentYear}</h5>
			                                             <span class="font-weight-bold" style="opacity:0.6">Interest Payment (Existing):</span> <span class="font-weight-bold">S$ ${existingYearlyInterest.toFixed(
                                                     2
                                                   )}</span><br />
			                                             <span class="font-weight-bold" style="opacity:0.6">Interest Payment (New):</span> <span class="font-weight-bold">S$ ${newYearlyInterest.toFixed(
                                                     2
                                                   )}</span><br />
			                                             <span class="font-weight-bold" style="opacity:0.6">Interest Saved:</span>
			                                             <span class="font-weight-bold">S$ ${savedInterest.toFixed(
                                                     2
                                                   )}</span><br />
			                                             <span class="font-weight-bold" style="opacity:0.6">Accumulated Interest Saved:</span>
			                                             <span class="font-weight-bold">S$ ${accumulatedInterestSaved.toFixed(
                                                     2
                                                   )}</span><br />
			                                             <span class="font-weight-bold" style="opacity:0.6">Refinancing Benefit: </span><span class="font-weight-bold">S$  ${refinancingBenefit.toFixed(
                                                     2
                                                   )}</span><br />
			                                    </div>`;

    let existingLastOutstandingAmount = existingOutstandingAmount;
    let newLastOutstandingAmount = newOutstandingAmount;
    let existingLastInterestPayment = existingInterestPayment;
    let newLastInterestPayment = newInterestPayment;
    let existingLastPrincipalAmount = existingPrincipalAmount;
    let newLastPrincipalAmount = newPrincipalAmount;
    let existingLastYearlyInterest = existingLastInterestPayment;
    let newLastYearlyInterest = newLastInterestPayment;

    let existingLastYearlyPrincipalAmount = existingPrincipalAmount;
    let newLastYearlyPrincipalAmount = newPrincipalAmount;

    let plusOneYear = currentYear + 1;

    let lastAccumulatedInterestSaved = accumulatedInterestSaved;

    for (let j = plusOneYear; j < totalYears; j++) {
      if (j != plusOneYear) {
        lastAccumulatedInterestSaved = lastAccumulatedInterestSaved;
      }
      existingLastOutstandingAmount =
        existingLastOutstandingAmount - existingLastPrincipalAmount;
      newLastOutstandingAmount =
        newLastOutstandingAmount - newLastPrincipalAmount;

      existingLastInterestPayment =
        existingLastOutstandingAmount * existingMonthlyLoanInterest;
      newLastInterestPayment =
        newLastOutstandingAmount * newMonthlyLoanInterest;

      existingLastPrincipalAmount =
        existingMonthlyInstallment - existingLastInterestPayment;
      newLastPrincipalAmount = newMonthlyInstallment - newLastInterestPayment;

      existingLastYearlyInterest = existingLastInterestPayment;
      newLastYearlyInterest = newLastInterestPayment;

      existingLastYearlyPrincipalAmount = existingLastPrincipalAmount;
      newLastYearlyPrincipalAmount = newLastPrincipalAmount;

      for (let k = 2; k <= 12; k++) {
        existingLastOutstandingAmount =
          existingLastOutstandingAmount - existingLastPrincipalAmount;
        newLastOutstandingAmount =
          newLastOutstandingAmount - newLastPrincipalAmount;
        existingLastInterestPayment =
          existingLastOutstandingAmount * existingMonthlyLoanInterest;
        newLastInterestPayment =
          newLastOutstandingAmount * newMonthlyLoanInterest;
        existingLastPrincipalAmount =
          existingMonthlyInstallment - existingLastInterestPayment;
        newLastPrincipalAmount = newMonthlyInstallment - newLastInterestPayment;

        existingLastYearlyInterest += existingLastInterestPayment;
        newLastYearlyInterest += newLastInterestPayment;

        existingLastYearlyPrincipalAmount += existingLastPrincipalAmount;
        newLastYearlyPrincipalAmount += newLastPrincipalAmount;
        // console.log(existingLastYearlyInterest);
      }
      // console.log(existingLastYearlyInterest);

      let existingLastYearlyInstallment =
        existingLastYearlyInterest + existingLastYearlyPrincipalAmount;
      let newLastYearlyInstallment =
        newLastYearlyInterest + newLastYearlyPrincipalAmount;

      let lastSavedInterest =
        existingLastYearlyInterest - newLastYearlyInterest;

      lastAccumulatedInterestSaved += lastSavedInterest;

      let lastRefinancingBenefit =
        lastAccumulatedInterestSaved - processingFees;

      secondHalfElement.innerHTML += `<div class="form-group p-3" style="border-bottom: 1px solid rgba(7, 0, 47, 0.2)">
											<h5>${j}</h5>
			                                         <span class="font-weight-bold" style="opacity:0.6">Interest Payment (Existing):</span> <span class="font-weight-bold">S$ ${existingLastYearlyInterest.toFixed(
                                                 2
                                               )}</span><br />
											<span class="font-weight-bold" style="opacity:0.6">Interest Payment (New):</span> <span class="font-weight-bold">S$ ${newLastYearlyInterest.toFixed(
                        2
                      )}</span><br />
			                                         <span class="font-weight-bold" style="opacity:0.6">Interest Saved:</span><span class="font-weight-bold">S$  ${lastSavedInterest.toFixed(
                                                 2
                                               )}</span><br />
			                                         <span class="font-weight-bold" style="opacity:0.6">Accumulated Interest Saved:</span><span class="font-weight-bold">S$  ${lastAccumulatedInterestSaved.toFixed(
                                                 2
                                               )}</span><br />
			                                         <span class="font-weight-bold" style="opacity:0.6">Refinancing Benefit: </span><span class="font-weight-bold">S$  ${lastRefinancingBenefit.toFixed(
                                                 2
                                               )}</span><br />
										</div>`;
    }
  }
}

// calculations of tdsr calculator
// employed tdsr calculations
function tdsrEmployedFun() {
  const employedBtn = document.getElementById("tdsr-employed-btn");
  const selfEmployedBtn = document.getElementById("tdsr-self-employed-btn");

  employedBtn.classList.add("border-btn");
  selfEmployedBtn.classList.remove("border-btn");

  const yearlyDiv = document.getElementById("yearly-div");
  const monthlyDiv = document.getElementById("monthly-div");
  monthlyDiv.classList.remove("hide");
  yearlyDiv.classList.add("hide");
}
function tdsrSelfEmployedFun() {
  const employedBtn = document.getElementById("tdsr-employed-btn");
  const selfEmployedBtn = document.getElementById("tdsr-self-employed-btn");

  employedBtn.classList.remove("border-btn");
  selfEmployedBtn.classList.add("border-btn");

  const yearlyDiv = document.getElementById("yearly-div");
  const monthlyDiv = document.getElementById("monthly-div");
  monthlyDiv.classList.add("hide");
  yearlyDiv.classList.remove("hide");
}
function tdsrEmployedAddErrorBorderFun() {
  const a = document.getElementById("tdsr-monthly-income");

  if (a.value.trim() == "") {
    alert("please enter all the required fields");
    a.classList.add("error-border-input");
  }
}
function tdsrEmployedRemoveErrorBorderFun() {
  const a = document.getElementById("tdsr-monthly-income");

  if (a.value.trim() != "") {
    a.classList.remove("error-border-input");
  }
}
function tdsrEmployedCalculationsFun() {
  const tdsrMonthlyIncome = document.getElementById(
    "tdsr-monthly-income"
  ).value;

  if (tdsrMonthlyIncome.trim() == "") {
    tdsrEmployedAddErrorBorderFun();
  } else {
    const tdsrGrossIncome = tdsrMonthlyIncome;
    const tdsrGrossLimit = (tdsrMonthlyIncome * 55) / 100;

    const tdsrGrossIncomeElement = document.getElementById("tdsr-gross-income");
    const tdsrGrossLimitElement = document.getElementById("tdsr-gross-limit");

    tdsrGrossIncomeElement.innerHTML = `S$ ${parseFloat(
      tdsrGrossIncome
    ).toFixed(2)}`;
    tdsrGrossLimitElement.innerHTML = `S$ ${tdsrGrossLimit.toFixed(2)}`;

    let tdsrEmployedCredit = document.getElementById(
      "tdsr-employed-credit"
    ).value;
    let tdsrEmployedHome = document.getElementById("tdsr-employed-home").value;
    let tdsrEmployedCar = document.getElementById("tdsr-employed-car").value;
    let tdsrEmployedOther = document.getElementById(
      "tdsr-employed-other"
    ).value;

    let tdsrEmployedCommitment;

    let tdsrEmployedCommitmentElement = document.getElementById(
      "tdsr-employed-commitment"
    );

    tdsrEmployedCommitment =
      parseFloat(tdsrEmployedHome) +
      parseFloat(tdsrEmployedCredit) +
      parseFloat(tdsrEmployedCar) +
      parseFloat(tdsrEmployedOther);

    tdsrEmployedCommitmentElement.value = tdsrEmployedCommitment;

    const tdsrDebtElement = document.getElementById("tdsr-debt");
    tdsrDebtElement.innerHTML = `S$ ${tdsrEmployedCommitment.toFixed(2)}`;

    let tdsrEmployedAvailable = tdsrGrossLimit - tdsrEmployedCommitment;
    const tdsrAvailableElement = document.getElementById("tdsr-available");

    tdsrAvailableElement.innerHTML = `S$ ${tdsrEmployedAvailable.toFixed(2)}`;
  }
}
// self employed tdsr calculations
function tdsrSelfEmployedAddErrorBorderFun() {
  const a = document.getElementById("tdsr-annual-income");

  if (a.value.trim() == "") {
    alert("please enter all the required fields");
    a.classList.add("error-border-input");
  }
}
function tdsrSelfEmployedRemoveErrorBorderFun() {
  const a = document.getElementById("tdsr-annual-income");

  if (a.value.trim() != "") {
    a.classList.remove("error-border-input");
  }
}
function tdsrSelfEmployedCalculationsFun() {
  const tdsrAnnualIncome = document.getElementById("tdsr-annual-income").value;

  if (tdsrAnnualIncome.trim() == "") {
    tdsrSelfEmployedAddErrorBorderFun();
  } else {
    const tdsrGrossIncome = (tdsrAnnualIncome * 0.7) / 12;
    const tdsrGrossLimit = (tdsrGrossIncome * 55) / 100;

    const tdsrGrossIncomeElement = document.getElementById("tdsr-gross-income");
    const tdsrGrossLimitElement = document.getElementById("tdsr-gross-limit");

    tdsrGrossIncomeElement.innerHTML = `S$ ${tdsrGrossIncome.toFixed(2)}`;
    tdsrGrossLimitElement.innerHTML = `S$ ${tdsrGrossLimit.toFixed(2)}`;

    let tdsrEmployedCredit = document.getElementById(
      "tdsr-self-employed-credit"
    ).value;
    let tdsrEmployedHome = document.getElementById(
      "tdsr-self-employed-home"
    ).value;
    let tdsrEmployedCar = document.getElementById(
      "tdsr-self-employed-car"
    ).value;
    let tdsrEmployedOther = document.getElementById(
      "tdsr-self-employed-other"
    ).value;

    let tdsrEmployedCommitment;

    let tdsrEmployedCommitmentElement = document.getElementById(
      "tdsr-self-employed-commitment"
    );

    tdsrEmployedCommitment =
      parseFloat(tdsrEmployedHome) +
      parseFloat(tdsrEmployedCredit) +
      parseFloat(tdsrEmployedCar) +
      parseFloat(tdsrEmployedOther);

    tdsrEmployedCommitmentElement.value = tdsrEmployedCommitment;

    const tdsrDebtElement = document.getElementById("tdsr-debt");
    tdsrDebtElement.innerHTML = `S$ ${tdsrEmployedCommitment.toFixed(2)}`;

    let tdsrEmployedAvailable = tdsrGrossLimit - tdsrEmployedCommitment;
    const tdsrAvailableElement = document.getElementById("tdsr-available");

    tdsrAvailableElement.innerHTML = `S$ ${tdsrEmployedAvailable.toFixed(2)}`;
  }
}

// calculations of fhc calculator
// personal income stmt fhc calculations
// function fixedIncomeFun() {
//   const a = document.getElementById("fhc-fixed-income");

//   if (a.value.trim() != "" || a.value > 0) {
//     a.classList.remove("error-border-input");
//   }

//   let fixedIncome = document.getElementById("fhc-fixed-income").value;

//   let fixedVariableIncome = document.getElementById(
//     "fhc-variable-income"
//   ).value;

//   if (fixedIncome == "") {
//     fixedIncome = 0;
//   }
//   if (fixedVariableIncome == "") {
//     fixedVariableIncome = 0;
//   }

//   let totalIncome = parseFloat(fixedIncome) + parseFloat(fixedVariableIncome);
//   document.getElementById("fhc-total-income").value = totalIncome.toFixed(2);

//   let fixedExpenses = document.getElementById("fhc-fixed-expenses").value;
//   let variableExpenses = document.getElementById("fhc-variable-expenses").value;
//   if (fixedExpenses == "") {
//     fixedExpenses = 0;
//   }
//   if (variableExpenses == "") {
//     variableExpenses = 0;
//   }
//   let totalExpenses = parseFloat(fixedExpenses) + parseFloat(variableExpenses);

//   let cfpMonthlyContributionElement = document.getElementById(
//     "fhc-cfp-monthly-contribution"
//   );
//   let cfpMonthlyContribution = fixedIncome * 0.2;
//   cfpMonthlyContributionElement.value = cfpMonthlyContribution.toFixed(2);

//   const totalSavingsElement = document.getElementById("fhc-total-savings");
//   let totalSavings = totalIncome - totalExpenses - cfpMonthlyContribution;

//   totalSavingsElement.value = totalSavings.toFixed(2);
// }
// function fixedExpensesFun() {
//   const b = document.getElementById("fhc-fixed-expenses");

//   if (b.value.trim() != "" || b.value > 0) {
//     b.classList.remove("error-border-input");
//   }

//   let fixedIncome = document.getElementById("fhc-fixed-income").value;

//   let fixedVariableIncome = document.getElementById(
//     "fhc-variable-income"
//   ).value;
//   if (fixedIncome == "") {
//     fixedIncome = 0;
//   }
//   if (fixedVariableIncome == "") {
//     fixedVariableIncome = 0;
//   }

//   let totalIncome = parseFloat(fixedIncome) + parseFloat(fixedVariableIncome);

//   let fixedExpenses = document.getElementById("fhc-fixed-expenses").value;
//   let variableExpenses = document.getElementById("fhc-variable-expenses").value;
//   if (fixedExpenses == "") {
//     fixedExpenses = 0;
//   }
//   if (variableExpenses == "") {
//     variableExpenses = 0;
//   }

//   let totalExpenses = parseFloat(fixedExpenses) + parseFloat(variableExpenses);
//   document.getElementById("fhc-total-expenses").value =
//     totalExpenses.toFixed(2);

//   let cfpMonthlyContribution = fixedIncome * 0.2;

//   const totalSavingsElement = document.getElementById("fhc-total-savings");
//   let totalSavings = totalIncome - totalExpenses - cfpMonthlyContribution;

//   totalSavingsElement.value = totalSavings.toFixed(2);
// }
// cash fhc calculations
// function fhcCashFun() {
//   const c = document.getElementById("fhc-cash");
//   if (c.value.trim() != "" || c.value > 0) {
//     c.classList.remove("error-border-input");
//   }
//   const cashElement = document.getElementById("fhc-cash");
//   const fixedDepositElement = document.getElementById("fhc-fixed-deposit");
//   const totalCashElement = document.getElementById(
//     "fhc-total-cash-and-equivalent"
//   );

//   let cash = cashElement.value;
//   let fixedDeposit = fixedDepositElement.value;
//   if (cash == "") {
//     cash = 0;
//   }
//   if (fixedDeposit == "") {
//     fixedDeposit = 0;
//   }
//   let totalCash = parseFloat(cash) + parseFloat(fixedDeposit);

//   totalCashElement.value = totalCash.toFixed(2);

//   let equity = document.getElementById("fhc-equity").value;
//   let endowment = document.getElementById("fhc-endowment").value;
//   let etf = document.getElementById("fhc-etf").value;
//   let cpfsa = document.getElementById("fhc-cpf-sa").value;
//   let bond = document.getElementById("fhc-bond").value;
//   let funds = document.getElementById("fhc-funds").value;
//   let cpfoa = document.getElementById("fhc-cpf-oa").value;

//   if (equity == "") {
//     equity = 0;
//   }
//   if (endowment == "") {
//     endowment = 0;
//   }
//   if (etf == "") {
//     etf = 0;
//   }
//   if (cpfsa == "") {
//     cpfsa = 0;
//   }
//   if (bond == "") {
//     bond = 0;
//   }
//   if (funds == "") {
//     funds = 0;
//   }
//   if (cpfoa == "") {
//     cpfoa = 0;
//   }

//   let property = document.getElementById("fhc-property").value;
//   let car = document.getElementById("fhc-car").value;

//   if (property == "") {
//     property = 0;
//   }
//   if (car == "") {
//     car = 0;
//   }

//   const totalAssetsElement = document.getElementById("fhc-total-assets");

//   let totalAssets =
//     parseFloat(cash) +
//     parseFloat(fixedDeposit) +
//     parseFloat(equity) +
//     parseFloat(endowment) +
//     parseFloat(etf) +
//     parseFloat(cpfsa) +
//     parseFloat(bond) +
//     parseFloat(funds) +
//     parseFloat(cpfoa) +
//     parseFloat(property) +
//     parseFloat(car);

//   totalAssetsElement.value = totalAssets.toFixed(2);

//   let totalLiabilities = document.getElementById("fhc-total-liabilities").value;

//   if (totalLiabilities == "") {
//     totalLiabilities = 0;
//   }

//   const netWorthElement = document.getElementById("fhc-net-worth");
//   let netWorth = parseFloat(totalAssets) - parseFloat(totalLiabilities);
//   netWorthElement.value = netWorth.toFixed(2);
// }
// investment assets fhc calculations
// function fhcInvestmentAssetsFun() {
//   const equityElement = document.getElementById("fhc-equity");
//   const endowmentElement = document.getElementById("fhc-endowment");
//   const etfElement = document.getElementById("fhc-etf");
//   const cpfsaElement = document.getElementById("fhc-cpf-sa");
//   const bondElement = document.getElementById("fhc-bond");
//   const fundsElement = document.getElementById("fhc-funds");
//   const cpfoaElement = document.getElementById("fhc-cpf-oa");
//   const totalInvestmentAssestsElement = document.getElementById(
//     "fhc-total-investment-assets"
//   );
//   let equity = equityElement.value;
//   let endowment = endowmentElement.value;
//   let etf = etfElement.value;
//   let cpfsa = cpfsaElement.value;
//   let bond = bondElement.value;
//   let funds = fundsElement.value;
//   let cpfoa = cpfoaElement.value;
//   if (equity == "") {
//     equity = 0;
//   }
//   if (endowment == "") {
//     endowment = 0;
//   }
//   if (etf == "") {
//     etf = 0;
//   }
//   if (cpfsa == "") {
//     cpfsa = 0;
//   }
//   if (bond == "") {
//     bond = 0;
//   }
//   if (funds == "") {
//     funds = 0;
//   }
//   if (cpfoa == "") {
//     cpfoa = 0;
//   }
//   let totalInvestment =
//     parseFloat(equity) +
//     parseFloat(endowment) +
//     parseFloat(etf) +
//     parseFloat(cpfsa) +
//     parseFloat(bond) +
//     parseFloat(funds) +
//     parseFloat(cpfoa);

//   totalInvestmentAssestsElement.value = totalInvestment.toFixed(2);

//   let cash = document.getElementById("fhc-cash").value;
//   let fixedDeposit = document.getElementById("fhc-fixed-deposit").value;
//   if (cash == "") {
//     cash = 0;
//   }
//   if (fixedDeposit == "") {
//     fixedDeposit = 0;
//   }

//   let property = document.getElementById("fhc-property").value;
//   let car = document.getElementById("fhc-car").value;
//   if (property == "") {
//     property = 0;
//   }
//   if (car == "") {
//     car = 0;
//   }

//   const totalAssetsElement = document.getElementById("fhc-total-assets");

//   let totalAssets =
//     parseFloat(cash) +
//     parseFloat(fixedDeposit) +
//     totalInvestment +
//     parseFloat(property) +
//     parseFloat(car);

//   totalAssetsElement.value = totalAssets.toFixed(2);

//   let totalLiabilities = document.getElementById("fhc-total-liabilities").value;

//   if (totalLiabilities == "") {
//     totalLiabilities = 0;
//   }

//   const netWorthElement = document.getElementById("fhc-net-worth");
//   let netWorth = parseFloat(totalAssets) - parseFloat(totalLiabilities);
//   netWorthElement.value = netWorth.toFixed(2);
// }
// personal assets fhc calculations
// function fhcPersonalAssetsFun() {
//   const propertyElement = document.getElementById("fhc-property");
//   const carElement = document.getElementById("fhc-car");
//   const totalPersonalAssetsElement = document.getElementById(
//     "fhc-total-personal-assets"
//   );

//   let property = propertyElement.value;
//   let car = carElement.value;

//   if (property == "") {
//     property = 0;
//   }
//   if (car == "") {
//     car = 0;
//   }

//   let totalPersonalAssets = parseFloat(property) + parseFloat(car);

//   totalPersonalAssetsElement.value = totalPersonalAssets.toFixed(2);

//   let equity = document.getElementById("fhc-equity").value;
//   let endowment = document.getElementById("fhc-endowment").value;
//   let etf = document.getElementById("fhc-etf").value;
//   let cpfsa = document.getElementById("fhc-cpf-sa").value;
//   let bond = document.getElementById("fhc-bond").value;
//   let funds = document.getElementById("fhc-funds").value;
//   let cpfoa = document.getElementById("fhc-cpf-oa").value;

//   if (equity == "") {
//     equity = 0;
//   }
//   if (endowment == "") {
//     endowment = 0;
//   }
//   if (etf == "") {
//     etf = 0;
//   }
//   if (cpfsa == "") {
//     cpfsa = 0;
//   }
//   if (bond == "") {
//     bond = 0;
//   }
//   if (funds == "") {
//     funds = 0;
//   }
//   if (cpfoa == "") {
//     cpfoa = 0;
//   }

//   let cash = document.getElementById("fhc-cash").value;
//   let fixedDeposit = document.getElementById("fhc-fixed-deposit").value;
//   if (cash == "") {
//     cash = 0;
//   }
//   if (fixedDeposit == "") {
//     fixedDeposit = 0;
//   }

//   const totalAssetsElement = document.getElementById("fhc-total-assets");
//   let totalAssets =
//     parseFloat(cash) +
//     parseFloat(fixedDeposit) +
//     parseFloat(equity) +
//     parseFloat(endowment) +
//     parseFloat(etf) +
//     parseFloat(cpfsa) +
//     parseFloat(bond) +
//     parseFloat(funds) +
//     parseFloat(cpfoa) +
//     parseFloat(property) +
//     parseFloat(car);

//   totalAssetsElement.value = totalAssets.toFixed(2);

//   let totalLiabilities = document.getElementById("fhc-total-liabilities").value;

//   if (totalLiabilities == "") {
//     totalLiabilities = 0;
//   }

//   const netWorthElement = document.getElementById("fhc-net-worth");
//   let netWorth = parseFloat(totalAssets) - parseFloat(totalLiabilities);
//   netWorthElement.value = netWorth.toFixed(2);
// }
// liabilities fhc calculations
// function fhcLiabilitiesFun() {
//   let mortgageLoan = document.getElementById("fhc-mortgage-loan").value;
//   let carLoan = document.getElementById("fhc-car-loan").value;

//   if (mortgageLoan == "") {
//     mortgageLoan = 0;
//   }

//   if (carLoan == "") {
//     carLoan = 0;
//   }

//   let totalLiabilitiesElement = document.getElementById(
//     "fhc-total-liabilities"
//   );

//   let totalLiabilities = parseFloat(mortgageLoan) + parseFloat(carLoan);

//   totalLiabilitiesElement.value = totalLiabilities.toFixed(2);

//   let totalAssets = document.getElementById("fhc-total-assets").value;

//   if (totalAssets == "") {
//     totalAssets = 0;
//   }

//   const netWorthElement = document.getElementById("fhc-net-worth");
//   let netWorth = parseFloat(totalAssets) - parseFloat(totalLiabilities);
//   netWorthElement.value = netWorth.toFixed(2);
// }
//final calculations fhc
// function fhcAddErrorBorderFun() {
//   const a = document.getElementById("fhc-fixed-income");
//   const b = document.getElementById("fhc-fixed-expenses");
//   const c = document.getElementById("fhc-cash");

//   if (a.value.trim() == "" || a.value <= 0) {
//     a.classList.add("error-border-input");
//   }
//   if (b.value.trim() == "" || b.value <= 0) {
//     b.classList.add("error-border-input");
//   }
//   if (c.value.trim() == "" || c.value <= 0) {
//     c.classList.add("error-border-input");
//   }
// }
// function fhcCalculationsFun() {
//   const a = document.getElementById("fhc-fixed-income");
//   const b = document.getElementById("fhc-fixed-expenses");
//   const c = document.getElementById("fhc-cash");

//   if (
//     a.value.trim() == "" ||
//     b.value.trim() == "" ||
//     c.value.trim() == "" ||
//     a.value <= 0 ||
//     b.value <= 0 ||
//     c.value <= 0
//   ) {
//     fhcAddErrorBorderFun();
//     alert("please enter all the required fields");
//   } else {
//     //pdf btn
//     var fhcPDFBtn = document.getElementById("fhc-generate-pdf-btn");
//     fhcPDFBtn.classList.remove("hide");

//     //start charts

//     // start personal income stmt chart

//     let fixedIncomeChartValue =
//       document.getElementById("fhc-fixed-income").value;
//     let variableIncomeChartValue = document.getElementById(
//       "fhc-variable-income"
//     ).value;

//     const personalIncomeStmtChartElement = document.getElementById(
//       "personal-income-stmt-chart"
//     );
//     personalIncomeStmtChartElement.classList.remove("hide");
//     personalIncomeStmtChartElement.classList.add("add-margin-bottom");

//     const ctx = document.getElementById("personal-income-chart");

//     new Chart(ctx, {
//       type: "pie",
//       data: {
//         labels: ["Fixed Income (in SGD)", "Variable Income (in SGD)"],

//         datasets: [
//           {
//             label: "My First Dataset",
//             data: [
//               parseInt(fixedIncomeChartValue),
//               parseInt(variableIncomeChartValue),
//             ],
//             formatter: function (context) {
//               return context / 1000 + "k";
//             },
//             backgroundColor: [
//               "rgb(255, 99, 132)",
//               "rgb(54, 162, 235)",
//               // "rgb(255, 205, 86)",
//             ],
//             hoverOffset: 4,
//           },
//         ],
//       },
//       options: {
//         title: {
//           display: true,
//           text: "Personal Income",
//           fontColor: "black",
//           fontSize: 28,
//         },
//       },
//     });

//     let totalIncomeChartValue =
//       parseFloat(fixedIncomeChartValue) + parseFloat(variableIncomeChartValue);

//     const totalIncomeChartElement = document.getElementById(
//       "personal-income-stmt-div-chart"
//     );
//     totalIncomeChartElement.classList.remove("hide");
//     totalIncomeChartElement.classList.add("add-margin-bottom");

//     totalIncomeChartElement.innerHTML = `
// 										<div class="chart-details">
// 											<p style="font-size: 16px">
// 												Fixed Income: S$ ${parseFloat(fixedIncomeChartValue).toLocaleString()}
// 											</p>
// 											<p style="font-size: 16px">
// 												Variable Income: S$ ${parseFloat(variableIncomeChartValue).toLocaleString()}
// 											</p>
// 											<p style="font-weight: bold; font-size: 16px; margin-bottom: 0px">
// 												Total Income: S$ ${totalIncomeChartValue.toLocaleString()}
// 											</p>
// 										</div>
// 										`;

//     // end personal income stmt chart

//     // start personal expenses stmt chart

//     let fixedExpensesChartValue =
//       document.getElementById("fhc-fixed-expenses").value;
//     let variableExpensesChartValue = document.getElementById(
//       "fhc-variable-expenses"
//     ).value;

//     const personalExpensesStmtChartElement = document.getElementById(
//       "personal-expenses-stmt-chart"
//     );
//     personalExpensesStmtChartElement.classList.remove("hide");
//     personalExpensesStmtChartElement.classList.add("add-margin-bottom");

//     const ctx2 = document.getElementById("personal-expenses-chart");

//     new Chart(ctx2, {
//       type: "pie",
//       data: {
//         labels: ["Fixed Expenses (in SGD)", "Variable Expenses (in SGD)"],

//         datasets: [
//           {
//             label: "My First Dataset",
//             data: [
//               parseInt(fixedExpensesChartValue),
//               parseInt(variableExpensesChartValue),
//             ],
//             formatter: function (context) {
//               return context / 1000 + "k";
//             },
//             backgroundColor: [
//               "rgb(255, 99, 132)",
//               "rgb(54, 162, 235)",
//               // "rgb(255, 205, 86)",
//             ],
//             hoverOffset: 4,
//           },
//         ],
//       },
//       options: {
//         title: {
//           display: true,
//           text: "Personal Expenses",
//           fontColor: "black",
//           fontSize: 28,
//         },
//       },
//     });

//     let totalExpensesChartValue =
//       parseFloat(fixedExpensesChartValue) +
//       parseFloat(variableExpensesChartValue);

//     const totalExpensesChartElement = document.getElementById(
//       "personal-expenses-stmt-div-chart"
//     );
//     totalExpensesChartElement.classList.remove("hide");
//     totalExpensesChartElement.classList.add("add-margin-bottom");

//     totalExpensesChartElement.innerHTML = `
// 										<div class="chart-details">
// 											<p style=" font-size: 16px">
// 												Fixed Expenses: S$ ${parseFloat(fixedExpensesChartValue).toLocaleString()}
// 											</p>
// 											<p style=" font-size: 16px">
// 												Variable Expenses: S$ ${parseFloat(variableExpensesChartValue).toLocaleString()}
// 											</p>
// 											<p style="font-weight: bold; font-size: 16px; margin-bottom: 0px">
// 												Total Expenses: S$ ${totalExpensesChartValue.toLocaleString()}
// 											</p>
// 										</div>
// 										`;

//     // end personal expenses stmt chart

//     // start total savings stmt chart
//     const totalSavingsStmtChartElement = document.getElementById(
//       "total-savings-stmt-chart"
//     );
//     totalSavingsStmtChartElement.classList.remove("hide");
//     totalSavingsStmtChartElement.classList.add("add-margin-bottom");

//     const ctx3 = document.getElementById("total-savings-chart");

//     new Chart(ctx3, {
//       type: "bar",
//       data: {
//         labels: ["Total Income (in SGD)", "Total Expenses (in SGD)"],

//         datasets: [
//           {
//             label: "comparison",
//             data: [totalIncomeChartValue, totalExpensesChartValue],

//             backgroundColor: [
//               "rgb(255, 99, 132, 0.8)",
//               "rgb(54, 162, 235, 0.8)",
//               // "rgb(255, 205, 86)",
//             ],
//             borderColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         title: {
//           display: true,
//           text: "Total Savings",
//           fontColor: "black",
//           fontSize: 28,
//         },
//         scales: {
//           yAxes: [
//             {
//               ticks: {
//                 beginAtZero: true,
//               },
//             },
//           ],
//         },
//       },
//     });

//     const totalSavingsChartValue =
//       totalIncomeChartValue - totalExpensesChartValue;

//     const totalSavingsChartElement = document.getElementById(
//       "total-savings-stmt-div-chart"
//     );
//     totalSavingsChartElement.classList.remove("hide");
//     totalSavingsChartElement.classList.add("add-margin-bottom");

//     totalSavingsChartElement.innerHTML = `
// 										<div class="chart-details">
// 											<p style="font-weight: bold; font-size: 16px">
// 												Total Income: S$ ${totalIncomeChartValue.toLocaleString()}
// 											</p>
// 											<p style="font-weight: bold; font-size: 16px">
// 												Total Expenses: S$ ${totalExpensesChartValue.toLocaleString()}
// 											</p>
// 											<p style="font-weight: bold; font-size: 16px; margin-bottom: 0px">
// 												Total Savings: S$ ${totalSavingsChartValue.toLocaleString()}
// 											</p>
// 										</div>
// 										`;
//     // end total savings stmt chart

//     // start balance sheeet chart

//     let fhcCashChartValue = document.getElementById("fhc-cash").value;
//     let fhcFixedDepositChartValue =
//       document.getElementById("fhc-fixed-deposit").value;

//     const balanceSheetStmtChartElement = document.getElementById(
//       "balance-sheet-stmt-chart"
//     );
//     balanceSheetStmtChartElement.classList.remove("hide");
//     balanceSheetStmtChartElement.classList.add("add-margin-bottom");

//     const ctx4 = document.getElementById("balance-sheet-chart");

//     new Chart(ctx4, {
//       type: "pie",
//       data: {
//         labels: ["Cash (in SGD)", "Fixed Deposit (in SGD)"],

//         datasets: [
//           {
//             label: "My First Dataset",
//             data: [
//               parseInt(fhcCashChartValue),
//               parseInt(fhcFixedDepositChartValue),
//             ],
//             formatter: function (context) {
//               return context / 1000 + "k";
//             },
//             backgroundColor: [
//               "rgb(255, 99, 132)",
//               "rgb(54, 162, 235)",
//               // "rgb(255, 205, 86)",
//             ],
//             hoverOffset: 4,
//           },
//         ],
//       },
//       options: {
//         title: {
//           display: true,
//           text: "Balance Sheet",
//           fontColor: "black",
//           fontSize: 28,
//         },
//       },
//     });

//     let totalBalanceChartValue =
//       parseFloat(fhcCashChartValue) + parseFloat(fhcFixedDepositChartValue);

//     const balanceSheetChartElement = document.getElementById(
//       "balance-sheet-stmt-div-chart"
//     );
//     balanceSheetChartElement.classList.remove("hide");
//     balanceSheetChartElement.classList.add("add-margin-bottom");

//     balanceSheetChartElement.innerHTML = `
// 										<div class="chart-details">
// 											<p style="font-size: 16px">
// 												Cash: S$ ${parseFloat(fhcCashChartValue).toLocaleString()}
// 											</p>
// 											<p style="font-size: 16px">
// 												Fixed Deposit: S$ ${parseFloat(fhcFixedDepositChartValue).toLocaleString()}
// 											</p>
// 											<p style="font-weight: bold; font-size: 16px; margin-bottom: 0px">
// 												Total Cash and Cash Equivalent : S$ ${totalBalanceChartValue.toLocaleString()}
// 											</p>
// 										</div>
// 										`;

//     // end balance sheet chart

//     // start equity chart

//     let equityChartValue = document.getElementById("fhc-equity").value;
//     let endowmentChartValue = document.getElementById("fhc-endowment").value;
//     let etfChartValue = document.getElementById("fhc-etf").value;
//     let cpfsaChartValue = document.getElementById("fhc-cpf-sa").value;
//     let bondChartValue = document.getElementById("fhc-bond").value;
//     let fundsChartValue = document.getElementById("fhc-funds").value;
//     let cpfoaChartValue = document.getElementById("fhc-cpf-oa").value;

//     const ivestmentsStmtChartElement = document.getElementById(
//       "investments-stmt-chart"
//     );
//     ivestmentsStmtChartElement.classList.remove("hide");
//     ivestmentsStmtChartElement.classList.add("add-margin-bottom");

//     const ctx5 = document.getElementById("investments-chart");

//     new Chart(ctx5, {
//       type: "doughnut",
//       data: {
//         labels: [
//           "Equity (SGD)",
//           "Endowment (SGD)",
//           "ETF (SGD)",
//           "CPF SA (SGD)",
//           "Bond (SGD)",
//           "Funds (SGD)",
//           "CPF OA (SGD)",
//         ],

//         datasets: [
//           {
//             data: [
//               parseInt(equityChartValue),
//               parseInt(endowmentChartValue),
//               parseInt(etfChartValue),
//               parseInt(cpfsaChartValue),
//               parseInt(bondChartValue),
//               parseInt(fundsChartValue),
//               parseInt(cpfoaChartValue),
//             ],
//             backgroundColor: [
//               "rgb(255, 99, 132)",
//               "rgb(54, 162, 235)",
//               "rgb(255, 205, 86)",
//               "rgba(75,192,192,255)",
//               "rgba(255,159,64,255)",
//               "rgba(153,102,255,255)",
//               "rgba(201,203,207,255)",
//             ],
//             hoverOffset: 4,
//           },
//         ],
//       },
//       options: {
//         title: {
//           display: true,
//           text: "Investments Assets",
//           fontColor: "black",
//           fontSize: 28,
//         },
//       },
//     });

//     let totalEquityChartValue =
//       parseFloat(equityChartValue) +
//       parseFloat(endowmentChartValue) +
//       parseFloat(etfChartValue) +
//       parseFloat(cpfsaChartValue) +
//       parseFloat(bondChartValue) +
//       parseFloat(fundsChartValue) +
//       parseFloat(cpfoaChartValue);

//     const investmentAssetsChartElement = document.getElementById(
//       "investments-stmt-div-chart"
//     );
//     investmentAssetsChartElement.classList.remove("hide");
//     investmentAssetsChartElement.classList.add("add-margin-bottom");

//     investmentAssetsChartElement.innerHTML = `
// 											<div class="chart-details">
// 												<p style=" font-size: 16px">
// 													Equity (SGD): S$ ${parseFloat(equityChartValue).toLocaleString()}
// 												</p>
// 												<p style=" font-size: 16px">
// 													Endowment (SGD): S$ ${parseFloat(endowmentChartValue).toLocaleString()}
// 												</p>
// 												<p style=" font-size: 16px">
// 													ETF (SGD): S$ ${parseFloat(etfChartValue).toLocaleString()}
// 												</p>
// 												<p style=" font-size: 16px">
// 													CPF SA (SGD): S$ ${parseFloat(cpfsaChartValue).toLocaleString()}
// 												</p>
// 												<p style=" font-size: 16px">
// 													Bond (SGD): S$ ${parseFloat(bondChartValue).toLocaleString()}
// 												</p>
// 												<p style=" font-size: 16px">
// 													Funds (SGD): S$ ${parseFloat(fundsChartValue).toLocaleString()}
// 												</p>
// 												<p style=" font-size: 16px">
// 													CPF OA (SGD): S$ ${parseFloat(cpfoaChartValue).toLocaleString()}
// 												</p>
// 												<p style="font-weight: bold; font-size: 16px; margin-bottom: 0px">
// 													Total Investment Assets (SGD): S$ ${totalEquityChartValue.toLocaleString()}
// 												</p>

// 											</div>
// 							`;

//     // end equity chart

//     // start personal assets chart

//     let propertyAssetsChartValue =
//       document.getElementById("fhc-property").value;
//     let carAssetsChartValue = document.getElementById("fhc-car").value;

//     const personalAssetsStmtChartElement = document.getElementById(
//       "personal-assets-stmt-chart"
//     );
//     personalAssetsStmtChartElement.classList.remove("hide");
//     personalAssetsStmtChartElement.classList.add("add-margin-bottom");

//     const ctx6 = document.getElementById("personal-assets-chart");

//     new Chart(ctx6, {
//       type: "doughnut",
//       data: {
//         labels: ["Property (SGD)", "Car (SGD)"],

//         datasets: [
//           {
//             data: [
//               parseInt(propertyAssetsChartValue),
//               parseInt(carAssetsChartValue),
//             ],
//             backgroundColor: [
//               "rgb(255, 99, 132)",
//               "rgb(54, 162, 235)",
//               "rgb(255, 205, 86)",
//               "rgba(75,192,192,255)",
//               "rgba(255,159,64,255)",
//               "rgba(153,102,255,255)",
//               "rgba(201,203,207,255)",
//             ],
//             hoverOffset: 4,
//           },
//         ],
//       },
//       options: {
//         title: {
//           display: true,
//           text: "Personal Assets",
//           fontColor: "black",
//           fontSize: 28,
//         },
//       },
//     });

//     let totalPropertyChartValue =
//       parseFloat(carAssetsChartValue) + parseFloat(propertyAssetsChartValue);

//     const personalAssetsChartElement = document.getElementById(
//       "personal-assets-stmt-div-chart"
//     );
//     personalAssetsChartElement.classList.remove("hide");
//     personalAssetsChartElement.classList.add("add-margin-bottom");

//     personalAssetsChartElement.innerHTML = `
// 											<div class="chart-details">

// 												<p style="font-size: 16px">
// 													Property (SGD): S$ ${parseFloat(propertyAssetsChartValue).toLocaleString()}
// 												</p>
// 												<p style="font-size: 16px">
// 													Car (SGD): S$ ${parseFloat(carAssetsChartValue).toLocaleString()}
// 												</p>
// 												<p style="font-weight: bold; font-size: 16px; margin-bottom: 0px">
// 													Total Personal Assets (SGD): S$ ${totalPropertyChartValue.toLocaleString()}
// 												</p>
// 											</div>
// 							`;

//     // end personal assets chart

//     // start liabilities chart
//     const mortgageLoanChartValue =
//       document.getElementById("fhc-mortgage-loan").value;
//     const carLoanChartValue = document.getElementById("fhc-car-loan").value;

//     const liabilitiesStmtChartElement = document.getElementById(
//       "liabilities-stmt-chart"
//     );
//     liabilitiesStmtChartElement.classList.remove("hide");
//     liabilitiesStmtChartElement.classList.add("add-margin-bottom");

//     const ctx7 = document.getElementById("liabilities-chart");

//     new Chart(ctx7, {
//       type: "bar",
//       data: {
//         labels: ["Mortgage Loan (SGD)", "Car Loan (SGD)"],

//         datasets: [
//           {
//             label: "comparison",
//             data: [
//               parseInt(mortgageLoanChartValue),
//               parseInt(carLoanChartValue),
//             ],

//             backgroundColor: [
//               "rgb(255, 99, 132, 0.8)",
//               "rgb(54, 162, 235, 0.8)",
//               // "rgb(255, 205, 86)",
//             ],
//             borderColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         title: {
//           display: true,
//           text: "Liabilities",
//           fontColor: "black",
//           fontSize: 28,
//         },
//         scales: {
//           yAxes: [
//             {
//               ticks: {
//                 beginAtZero: true,
//               },
//             },
//           ],
//         },
//       },
//     });

//     const totalLiabilitiesChartValue = document.getElementById(
//       "fhc-total-liabilities"
//     ).value;

//     const liabilitiesChartElement = document.getElementById(
//       "liabilities-stmt-div-chart"
//     );
//     liabilitiesChartElement.classList.remove("hide");
//     liabilitiesChartElement.classList.add("add-margin-bottom");

//     liabilitiesChartElement.innerHTML = `
// 										<div class="chart-details">
// 											<p style="font-size: 16px">
// 												Mortgage Loan (SGD): S$ ${parseFloat(mortgageLoanChartValue).toLocaleString()}
// 											</p>
// 											<p style="font-size: 16px">
// 												Car Loan (SGD): S$ ${parseFloat(carLoanChartValue).toLocaleString()}
// 											</p>
// 											<p style="font-weight: bold; font-size: 16px; margin-bottom: 0px">
// 												Total Liabilities (SGD): S$ ${totalLiabilitiesChartValue.toLocaleString()}
// 											</p>
// 										</div>
// 										`;
//     // end liabilities chart

//     // start networth div
//     const networthChartElement = document.getElementById(
//       "networth-stmt-div-chart"
//     );
//     networthChartElement.classList.remove("hide");
//     networthChartElement.classList.add("add-margin-bottom");

//     let networthChartValue = document.getElementById("fhc-net-worth").value;

//     networthChartElement.innerHTML = `
// 										<div class="chart-details">
// 											<p style="font-weight: bold; font-size: 16px; margin-bottom: 0px">
// 												Net Worth (SGD): S$ ${parseFloat(networthChartValue).toLocaleString()}
// 											</p>
// 										</div>
// 										`;
//     // end networth div

//     //end charts

//     let totalCash = document.getElementById(
//       "fhc-total-cash-and-equivalent"
//     ).value;
//     let totalExpenses = document.getElementById("fhc-total-expenses").value;

//     const tablesElement = document.getElementById("tables");
//     tablesElement.classList.remove("hide");

//     // liquidity ratio
//     let basicLiquidityRatioElement = document.getElementById(
//       "basic-liquidity-ratio"
//     );

//     let basicLiquidityRatioRemarkElement = document.getElementById(
//       "basic-liquidity-ratio-remark"
//     );

//     if (totalExpenses == 0) {
//       totalExpenses = 1;
//     }

//     let basicLiquidityRatio = parseFloat(totalCash) / parseFloat(totalExpenses);

//     basicLiquidityRatioElement.innerHTML = `${basicLiquidityRatio.toFixed(2)}`;

//     let basicRemark;
//     if (basicLiquidityRatio > 6) {
//       basicRemark = "Adequate";
//     } else {
//       basicRemark = "Inadequate";
//     }
//     basicLiquidityRatioRemarkElement.innerHTML = `${basicRemark}`;

//     let liquidAssetToNetWorthRatioElement = document.getElementById(
//       "liquid-asset-to-net-worth-ratio"
//     );
//     let liquidAssetToNetWorthRemarkElement = document.getElementById(
//       "liquid-asset-to-net-worth-remark"
//     );

//     let netWorth = document.getElementById("fhc-net-worth").value;

//     let liquidAssetToNetWorthRatio =
//       (parseFloat(totalCash) * 100) / parseFloat(netWorth);

//     liquidAssetToNetWorthRatioElement.innerHTML = `${liquidAssetToNetWorthRatio.toFixed(
//       2
//     )}%`;

//     let liquidRemark;
//     if (liquidAssetToNetWorthRatio > 15) {
//       liquidRemark = "Adequate";
//     } else {
//       liquidRemark = "Inadequate";
//     }

//     liquidAssetToNetWorthRemarkElement.innerHTML = `${liquidRemark}`;

//     // Financial Stability ratio
//     let totalLiabilities = document.getElementById(
//       "fhc-total-liabilities"
//     ).value;
//     let totalAssets = document.getElementById("fhc-total-assets").value;

//     let financialStabilityAssetRatioElement = document.getElementById(
//       "financial-stability-asset-ratio"
//     );
//     let financialStabilityAssetRemarkElement = document.getElementById(
//       "financial-stability-asset-remark"
//     );

//     let financialStabilityAssetRatio =
//       (parseFloat(totalLiabilities) * 100) / parseFloat(totalAssets);

//     financialStabilityAssetRatioElement.innerHTML = `${financialStabilityAssetRatio.toFixed(
//       2
//     )}%`;

//     let financialStabilityAssetRemark;

//     if (financialStabilityAssetRatio < 50) {
//       financialStabilityAssetRemark = "Adequate";
//     } else {
//       financialStabilityAssetRemark = "Inadequate";
//     }

//     financialStabilityAssetRemarkElement.innerHTML = `${financialStabilityAssetRemark}`;

//     let financialStabilityDebtServicingRatioElement = document.getElementById(
//       "financial-stability-debt-servicing-ratio"
//     );
//     let financialStabilityDebtServicingRemarkElement = document.getElementById(
//       "financial-stability-debt-servicing-remark"
//     );

//     let fhcNonMortgagePayment = document.getElementById(
//       "fhc-non-mortgage-payment"
//     ).value;
//     let fhcMortgagePayment = document.getElementById(
//       "fhc-mortgage-payment"
//     ).value;
//     console.log(fhcNonMortgagePayment);
//     console.log(fhcMortgagePayment);

//     let financialStabilityDebtPayment =
//       parseFloat(fhcNonMortgagePayment) + parseFloat(fhcMortgagePayment);

//     let totalIncome = document.getElementById("fhc-total-income").value;

//     let financialStabilityDebtServicingRatio =
//       (parseFloat(financialStabilityDebtPayment) * 100) /
//       parseFloat(totalIncome);

//     financialStabilityDebtServicingRatioElement.innerHTML = `${financialStabilityDebtServicingRatio.toFixed(
//       2
//     )}%`;

//     let financialStabilityDebtServicingRemark;
//     if (financialStabilityDebtServicingRatio < 35) {
//       financialStabilityDebtServicingRemark = "Adequate";
//     } else {
//       financialStabilityDebtServicingRemark = "Inadequate";
//     }

//     financialStabilityDebtServicingRemarkElement.innerHTML = `${financialStabilityDebtServicingRemark}`;

//     let financilStabilityNonMortgageRatioElement = document.getElementById(
//       "financial-stability-non-mortgage-ratio"
//     );
//     let financilStabilityNonMortgageRemarkElement = document.getElementById(
//       "financial-stability-non-mortgage-remark"
//     );

//     let financilStabilityNonMortgageRatio =
//       (parseFloat(fhcNonMortgagePayment) * 100) / parseFloat(totalIncome);

//     financilStabilityNonMortgageRatioElement.innerHTML = `${financilStabilityNonMortgageRatio.toFixed(
//       2
//     )}%`;

//     let financilStabilityNonMortgageRemark;
//     if (financilStabilityNonMortgageRatio < 15) {
//       financilStabilityNonMortgageRemark = "Adequate";
//     } else {
//       financilStabilityNonMortgageRemark = "Inadequate";
//     }
//     financilStabilityNonMortgageRemarkElement.innerHTML = `${financilStabilityNonMortgageRemark}`;

//     // investment ratio
//     let totalSavings = document.getElementById("fhc-total-savings").value;
//     let investmentSavingsRatioElement = document.getElementById(
//       "investment-savings-ratio"
//     );
//     let investmentSavingsRemarkElement = document.getElementById(
//       "investment-savings-remark"
//     );

//     let investmentSavingsRatio =
//       (parseFloat(totalSavings) * 100) / parseFloat(totalIncome);

//     investmentSavingsRatioElement.innerHTML = `${investmentSavingsRatio.toFixed(
//       2
//     )}%`;

//     let investmentSavingsRemark;
//     if (investmentSavingsRatio > 20) {
//       investmentSavingsRemark = "Adequate";
//     } else {
//       investmentSavingsRemark = "Inadequate";
//     }
//     investmentSavingsRemarkElement.innerHTML = `${investmentSavingsRemark}`;

//     let totalInvestmentAssets = document.getElementById(
//       "fhc-total-investment-assets"
//     ).value;

//     let investmentAssetRatioElement = document.getElementById(
//       "investment-asset-ratio"
//     );
//     let investmentAssetRemarkElement = document.getElementById(
//       "investment-asset-remark"
//     );

//     let investmentAssetRatio =
//       (parseFloat(totalInvestmentAssets) * 100) / parseFloat(netWorth);

//     investmentAssetRatioElement.innerHTML = `${investmentAssetRatio.toFixed(
//       2
//     )}%`;

//     let investmentAssetRemark;

//     if (investmentAssetRatio > 50) {
//       investmentAssetRemark = "Adequate";
//     } else {
//       investmentAssetRemark = "Inadequate";
//     }
//     investmentAssetRemarkElement.innerHTML = `${investmentAssetRemark}`;

//     let regularInvestment = document.getElementById(
//       "fhc-regular-investment"
//     ).value;
//     let regularInvestmentRatioElement = document.getElementById(
//       "regular-investment-ratio"
//     );
//     let regularInvestmentRemarkElement = document.getElementById(
//       "regular-investment-remark"
//     );

//     let regularInvestmentRatio =
//       (parseFloat(regularInvestment) * 100) / parseFloat(totalIncome);

//     regularInvestmentRatioElement.innerHTML = `${regularInvestmentRatio.toFixed(
//       2
//     )}%`;

//     let regularInvestmentRemark;
//     if (regularInvestmentRatio > 10) {
//       regularInvestmentRemark = "Adequate";
//     } else {
//       regularInvestmentRemark = "Inadequate";
//     }

//     regularInvestmentRemarkElement.innerHTML = `${regularInvestmentRemark}`;

//     // pdf logic
//     var makepdf = document.getElementById("tables");

//     fhcPDFBtn.addEventListener("click", function () {
//       html2pdf()
//         .set({
//           pagebreak: {
//             mode: "avoid-all",
//             // after: "#page2el",
//           },

//           margin: 0,
//           filename: "fhc_report.pdf",
//           image: { type: "jpeg", quality: 0.98 },
//           html2canvas: { scale: 2 },
//           jsPDF: {
//             unit: "in",
//             format: "letter",
//             orientation: "portrait",
//           },
//         })
//         .from(makepdf)
//         .save();
//     });
//   }
// }
