import React, { useState } from 'react'

export default function Add({ addX, update, setupdate}) {

    const [task, settask] = useState("")

    const addaTask = async () => {
        const res = await fetch('http://localhost:1000/add', {
            method: 'post',
            body: JSON.stringify({task}),
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        })
        const data = await res.json();
        if (data.msg) {
            //אל תציג את הדיב
            addX()
            setupdate(update=>!update)
        }
        else {
            alert(data.err)
        }
    }

    return (

        <div className='addTask'>
            <button className='btnXadd' onClick={addX} >X</button>
            <input type="text" placeholder='task' required onChange={e=>settask(e.target.value) } />
            <button onClick={addaTask}> Add new task</button>
        </div>
    )
}
