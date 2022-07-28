import { ContactForm } from "components/contact_form/ContactForm";
import { Component } from "react";
import shortid from "shortid";
import { Filter } from "components/filter/Filter";
import { ListOfContacts } from "components/listOfContacts/ListOfContacts";
import { Container } from "components/ui/Container";





export class App extends Component {
  
  state = { 
    contacts: [],
    filter:''
  };

  componentDidMount() {
    const storagedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storagedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
     localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
   }
 };

  addContact = (values, { resetForm }) => {
    values.id = shortid.generate();
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, values] }
    });
    console.log(this.state.contacts);
    resetForm();
  };

  
  filterContacts = (e) => {
    this.setState({ filter: e.currentTarget.value });

  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts= contacts.filter(
      contact => contact.name.toLowerCase()
        .includes(normalizedFilter));
    if (filteredContacts.length > 0)
    { return filteredContacts }
    else
    {return this.state.contacts}  

  };

  deleteContact = (deleteId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
    console.log(this.state.contacts);
  };

    
  
  render() {
   return  (
     <Container>
       <h1>Phonebook</h1>
       <ContactForm
         onHandleSubmit={this.addContact} />
       <h2>Contacts</h2>
       <Filter
         onHandleChange={this.filterContacts}
         value={this.state.filter} />
       <ListOfContacts
         list={this.getVisibleContacts()}
         onDeleteContact={this.deleteContact} />
      </Container>
    )
  }
};
