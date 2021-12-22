import { useState } from "react";


export default function Todoitem({ todo, setupdate, update, todoArr, settodoArr }) {



    const remove = async () => {
        const res = await fetch(`http://localhost:1000/` + todo.id, {
            //uncomment this line when you use MongoDB(mongoose):
            // const res = await fetch(`http://localhost:1000/` + todo._id, {
            method: "delete",
            credentials: "include"
        })
        const data = await res.json();
        if (data.msg) {
            settodoArr(todoArr.filter(v => v.id != todo.id))
            //uncomment this line when you use MongoDB(mongoose):
            // settodoArr(todoArr.filter(v => v._id != todo._id))
            setupdate(!update)
        }
        else {
            alert(data.err)
        }
    }

    const checkboxf = async () => {
        const res = await fetch('http://localhost:1000/status/' + todo.id, {
            //uncomment this line when you use MongoDB(mongoose):
            // const res = await fetch('http://localhost:1000/status/' + todo._id, {
            method: 'put'
        })
        await res.text()
        setupdate(update => !update)
    }



    return (
        <div>
            <div className='todoitem'>
                <div className={todo.status ? "checkboxdone" : "checkboxfalse"}>
                    <h1 onClick={checkboxf} >{todo.task}</h1>
                </div>
                <button onClick={remove}>X</button>

            </div>
        </div>
    )
}
