import { useState } from 'react'

function Field(){
    const [PP, setPurchasePrice] = useState(0)
    const [DP, setDownPayment] = useState(0)
    const [RT, setRepaymentTime] = useState(0)
    const [IR, setInterestRate] = useState(0)
    
    let P = (PP- DP)
    let M = P*(IR*(1+IR)^RT/((1+IR)^RT)-1)/10
    let MPP = (M/RT/12).toFixed(2)
    
 
    return(
        <div id="main">
            <div className="header">Mortgage Calculator</div>
            <form>
                <div className="control">
                    <label>Purchase Price : {PP}$</label>
                    <input 
                        type="range" 
                        value={PP} 
                        min="0"
                        max="10000"
                        step="100"
                        onChange= {(e) => setPurchasePrice(e.target.value)} />
                </div>
                
                <div className="control">
                    <label>Down Payment : {DP}$</label>
                    <input 
                        type="range" 
                        value={DP} 
                        min="0"
                        max="10000"
                        step="100"
                        onChange= {(e) => setDownPayment(e.target.value)} 
                        />
                </div>
                
                <div className="control">
                    <label>Repayment Time : {RT} Year</label>
                    <input 
                        type="range" 
                        value={RT} 
                        min="1"
                        max="25"
                        defaultValue="1"
                        onChange= {(e) => setRepaymentTime(e.target.value)} 
                    />
                </div>

                <div className="control">
                    <label>Interest Rate : {IR}%</label>
                    <input 
                        type="range" 
                        value={IR} 
                        min="0"
                        max="100"
                        onChange= {(e) => setInterestRate(e.target.value)} 
                    />
                </div>

                <div className="control">
                    <p>Loan Amount : </p> 
                    <p>{M}$</p>
                </div>

                <div className="control">
                    <p>Estimated Per Month : </p>
                    <p>{MPP}$</p>
                </div>
            </form>
        </div>
    )
}

export default Field
