import react, {useState} from "react";
import AddPersonForm from "./AddPersonForm";
import PeopleList from "./PeopleList";

const ContactManager = (props) => {
    const [contacts, setContacts] = useState(props.data);

    function addPerson(name){
        setContacts([...contacts, name]);
    }
    return ( 
    <div className="container">
        <div className="row">
        <AddPersonForm handleSubmit={addPerson}/>
        </div>
        <div className="row">
        <PeopleList data ={contacts}/>
        </div>
    
    </div> 
    );
}

export default ContactManager;