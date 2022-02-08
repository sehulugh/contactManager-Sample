import react,{useState} from "react";

const PeopleList = (props) => {
    const arr = props.data;
    const listItems = arr.map((val,index) => <li className="list-group-item" key={index}>{val}</li>);
    return <ul className="list-group">{listItems}</ul>;
}

export default PeopleList ;