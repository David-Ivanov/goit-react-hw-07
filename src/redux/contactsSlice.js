import { createSlice } from "@reduxjs/toolkit"

const initialContactsValue = {
    contacts: {
        items: []
    },
}


const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialContactsValue,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.items.push(action.payload);
            },
            prepare(value) {
                return {
                    payload: {
                        id: new Date().getTime(),
                        name: value.username,
                        number: value.number
                    }
                }
            }
        },
        deleteContact(state, action) {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
        }
    }
});

export const contactsSelector = state => state.contacts.contacts.items;

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;

export const { addContact, deleteContact } = contactsSlice.actions;