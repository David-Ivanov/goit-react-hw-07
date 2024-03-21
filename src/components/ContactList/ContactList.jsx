import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { contactsSelector, deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {

    const contacts = useSelector(contactsSelector);
    const filter = useSelector(selectNameFilter);

    const filteredContacts = () => {
        if (filter !== "") {
            return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
        } else {
            return contacts;
        }
    }


    return (
        <ul className={css.list}>
            {filteredContacts().map(contact => (
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                />
            ))}
        </ul>
    )
}