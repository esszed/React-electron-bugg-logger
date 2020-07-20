import React from 'react'
import Moment from 'react-moment'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

export const LogItem = ({ log: { _id, priority, user, text, created } }) => {
    const setVariant = () => {
        if (priority === 'high') {
            return 'danger'
        } else if (priority === 'moderate') {
            return 'warning'
        }else{
            return 'success'
        }
    }
    return (
        <tr>
            <td><Badge variant={setVariant()}>{priority}</Badge></td>
            <td>{text}.</td>
            <td>{user}</td>
            <td> <Moment format ='DD MMMM YYYY, h:mm:ss'>{new Date(created)}</Moment></td>
            <td>
                <Button variant='danger' size='sm'>X</Button>
            </td>
        </tr>
    )
}
export default LogItem

