import React,{useContext} from 'react'

import {DELETE_EVENT} from '../actions'
import AppContext from '../contexts/AppContext'



const Event = ({event}) => {
    console.log(event.title)
    const {dispatch} =useContext(AppContext)
    const id = event.id

    const handleClickDeleteButton = () => {
        const result = window.confirm(`本当にイベント(id=${id})を削除して問題ありませんか？`)
        if(result)
        dispatch({
            type: DELETE_EVENT,
            id
        })
    }

    return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
    )
}

export default Event
