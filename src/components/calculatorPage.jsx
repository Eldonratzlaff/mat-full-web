import './calculatorPage.css'
import Calculator from './calculator'   
const CalculatorPage = () => (
    <>
    <div className="calculatorPage-container">
    <div className="calculator-coment">Lets do some math!</div>
    <div>{<Calculator/>}</div> 
    </div>
    
    </>
    );
export default CalculatorPage;