import React, {useState} from 'react';

import logo from './assets/investment-calculator-logo.png';

import Header from './components/Header/Header';
import CalculationForm from './components/CalculationForm/CalculationForm';
import CalculationResults from './components/CalculationResult/CalculationResults';

function App() {
  const [investmentData, setInvestmentData] = useState([]);

  const handleCalculationComplete = (data) => {
    setInvestmentData(data);
  }

  return (
    <div>
      <Header 
        logo={logo} 
        title="Investment Calculator"
      />

      <CalculationForm
        onCalculate={handleCalculationComplete}
      />

      <CalculationResults 
        data={investmentData}
      />
    </div>
  );
}

export default App;
