import React, { useState } from 'react';

 export const BenefitCalculator = () => {
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [children, setChildren] = useState('');
  const [benefits, setBenefits] = useState(null);

  const calculateBenefits = (e) => {
    e.preventDefault();

    let gstHstRefund = 0;
    let ccb = 0;

    // Check for GST/HST refund eligibility
    if (age > 18 && income < 50000) {
      gstHstRefund = 400;
    }

    // Check for CCB eligibility
    if (children >= 1) {
      ccb = 7000; // Assuming all children are under 18
    }

    const totalBenefits = gstHstRefund + ccb;
    setBenefits(totalBenefits);
  };

  return (
    <div className="project" >
      <h2>Benefit Calculator</h2>
      <form onSubmit={calculateBenefits}>
        <div >
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div >
          <label>Income: </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        <div >
          <label>Number of Children: </label>
          <input
            type="number"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>
        <button type="submit">Calculate Benefits</button>
      </form>
      {benefits !== null && (
        <div>
          <h3>Total Benefits: ${benefits}</h3>
        </div>
      )}
    </div>
  );
};


