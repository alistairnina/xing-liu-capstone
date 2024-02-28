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
    let cwb = 0;

   
    if (age > 18 && income < 48012) {
      gstHstRefund = 467;
    }

    
    if (children >= 1) {
      ccb = 6997*children; 
    }
    
    if(age>18 && income< 32244 && income>0){
      cwb = 2403;
    }

    const totalBenefits = gstHstRefund + ccb + cwb;
    setBenefits(totalBenefits);
  };

  return (
    <section className="project" >
    
    <div className="container" >
      <h2 >Benefit Calculator</h2>
      <form className= "bcskill-bx" onSubmit={calculateBenefits}>
        <div className= "skill-bx">
          <label>Age: </label>
          <input className='bcinput'
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className= "skill-bx">
          <label>Income: </label>
          <input className='bcinput'
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        <div className= "skill-bx">
          <label>Number of Children: </label>
          <input className='bcinput'
            type="number"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>
        <button className="cbbutton" type="submit">Calculate Benefits</button>
      </form>
      {benefits !== null && (
        <div className="benefit"> 
          <h3>Potential Benefits per year: ${benefits}</h3>
        </div>
      )}
    </div>
    </section>
  );
};


