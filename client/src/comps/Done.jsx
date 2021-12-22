import React from 'react'
import Todoitem from './Todoitem'

export default function Done({settodoArr, todoArr, update, setupdate}) {
    return (
        <div>
            <h1>Finished Tasks:</h1>
            {todoArr.filter(td=> td.status==true).map(td => <Todoitem todo={td} todoArr={todoArr} settodoArr={settodoArr} update={update} setupdate={setupdate} />)}
        </div>
    )
}
