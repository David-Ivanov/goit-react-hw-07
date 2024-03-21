import ContactForm from './ContactForm/ContactForm'
import SearchBar from './SearchBar/SearchBar'
import ContactList from './ContactList/ContactList';

function App() {

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>

  )
}

export default App
