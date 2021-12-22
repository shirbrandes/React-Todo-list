import React, { useEffect, useState } from 'react'
import Add from './Add'
import Done from './Done'
import Notdone from './Notdone'

export default function Todos() {
    const [todoArr, settodoArr] = useState([])
    const [add, setadd] = useState(false)
    const [update, setupdate] = useState(false)


    useEffect(() => {
        fetch('http://localhost:1000/', {
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => settodoArr(data))
    }, [update])

    const addX = () => {
        setadd(!add)
    }



    return (
        <div className='main'>
            <div className="headline">
                <h1>To do list:</h1>
            </div>
            <div>
                <button className="add" onClick={addX}>➕ַ</button>
            </div>
            {add == true ? <Add addX={addX} setupdate={setupdate} update={update} /> : ""}
            <div className='doneornot'>
                <Notdone settodoArr={settodoArr} todoArr={todoArr} update={update} setupdate={setupdate} />
                <Done settodoArr={settodoArr} todoArr={todoArr} update={update} setupdate={setupdate} />
            </div>


        </div>
    )
}
