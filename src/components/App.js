import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'


import LogItem from './LogItem'
import AddLogItem from './AddLogItem'

const App = () => {
	const [logs, setlogs] = useState([
		{
			_id: 1,
			text: 'This ius log one',
			priority: 'low',
			user: 'Brad',
			created: new Date().toString(),
		}, {
			_id: 2,
			text: 'This is log one',
			priority: 'high',
			user: 'Tom',
			created: new Date().toString(),
		}, {
			_id: 3,
			text: 'This is log one',
			priority: 'moderate',
			user: 'Kate',
			created: new Date().toString(),
		},
	])

	function addItem(item) {
		console.log(item)
		item._id = Math.floor(Math.random() * 90000) + 10000
		item.created = new Date().toString()
		setlogs([...logs, item])
	}
	return (
		<Container>
			<AddLogItem addItem={addItem} />
			<Table>
				<thead>
					<tr>
						<th>Priority</th>
						<th>Log text</th>
						<th>User</th>
						<th>Created</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{logs.map((log) => (
						<LogItem key={log._id} log={log} />
					))}
				</tbody>
			</Table>
		</Container>
	)
}

export default App
