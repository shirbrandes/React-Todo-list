import React from 'react'
import Todoitem from './Todoitem'

export default function Notdone({ settodoArr, todoArr, update, setupdate }) {
    return (
        <div>
            <h1>Unfinished Tasks:</h1>

            {todoArr.filter(td => td.status == false).map(td => <Todoitem todo={td} todoArr={todoArr} settodoArr={settodoArr} update={update} setupdate={setupdate} />)}
        </div>
    )
}

