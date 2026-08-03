import React from 'react'

export default function EventData2() {
    const onclickStartStop =(ev) => {
        let t = ev.target.innerText
        let s = (t === `Start`) ? `Stop` : `Start`
        ev.target.innerText = s
    }
    const onClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }
  return (
    <div style={{textAlign: 'center',marginTop: '20px'}}>
      <button onClick={(ev) => onclickStartStop(ev)}>Start</button><br/> <br/>
      <button onClick={(ev) => onClickAdd(ev)}>10+20</button><br/> <br/>
      <button onClick={(ev) => onClickAdd(ev)}>30*40</button><br/> <br/>
    </div>
  )
}
