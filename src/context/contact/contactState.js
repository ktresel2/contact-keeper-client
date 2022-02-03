import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types'

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Joe Smith',
				email: 'joe@smith.com',
				phone: '222-2222',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Jane Smith',
				email: 'jane@smith.com',
				phone: '222-2112',
				type: 'personal',
			},
			{
				id: 3,
				name: 'Alex Bradley',
				email: 'alex@bradley.com',
				phone: '211-2550',
				type: 'professional',
			},
		],
	}

	const [state, dispatch] = useReducer(contactReducer, initialState)

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState
