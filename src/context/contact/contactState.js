import React, { useReducer } from 'react'
import { v4 } from 'uuid'
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
		current: null,
	}

	const [state, dispatch] = useReducer(contactReducer, initialState)

	const addContact = contact => {
		contact.id = v4()
		dispatch({
			type: ADD_CONTACT,
			payload: contact,
		})
	}

	const deleteContact = id => {
		dispatch({ type: DELETE_CONTACT, payload: id })
	}

	const setCurrent = contact => {
		dispatch({ type: SET_CURRENT, payload: contact })
	}

	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT })
	}

	const updateContact = contact => {
		dispatch({ type: UPDATE_CONTACT, payload: contact })
	}

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState
