import './App.css';
import ContactManager from './components/ContactManager';

function App() {
const contacts = ["Adam Sandler","Tom Hanks"];

  return (
    <div>
      <ContactManager data={contacts}/>
    </div>
  );
}

export default App;
