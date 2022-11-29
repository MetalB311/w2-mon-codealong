import React from 'react'
import Item from './Item'

// deconstructed tasks within the parameter
const List = ({tasks}) =>{
let taskDisplay = tasks.map((task)=>{
    return <Item task={task} />
})

    return(
        <ul>
            {taskDisplay}
        </ul>
    )
}

export default List