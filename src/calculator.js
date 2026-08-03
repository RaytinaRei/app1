import React from 'react'

export default function Calculator2() {
    const n1 = 20
    const n2 = 4
    const calculate = (op) => {
        let c= `${n1} ${op} ${n2}`
        let r = eval(c)
        alert(`${c} = ${r}`)
    }
    return (
    <div style={{textAlign: 'center',marginTop: '20px'}}>
      <span>{n1}</span>&nbsp;
      <button onClick={()=>calculate('+')}>+</button>&nbsp;
      <button onClick={()=>calculate('-')}>-</button>&nbsp;
      <button onClick={()=>calculate('*')}>*</button>&nbsp;
      <button onClick={()=>calculate('/')}>/</button>&nbsp;
      <span>{n2}</span>
    </div>
  )
}
