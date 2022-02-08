import react, {useState, useEffect} from "react";

const AddPersonForm = (props) => {
    const [person, setPerson] = useState("");

    function handleChange(e){
        setPerson(e.target.value);
    }

    function handleSubmit(e){
        props.handleSubmit(person);
        setPerson("");
        e.preventDefault();
    }

    return ( 
    <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group mx-sm-3 mb-2">   
        <input 
        type="text" 
        placeholder="add new contact" 
        onChange={handleChange} 
        value={person}
        className="form-control"
        />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Add</button>
    </form>
     );
}

export default AddPersonForm;