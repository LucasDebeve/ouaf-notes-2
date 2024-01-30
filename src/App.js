import React, {useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import NotesTable from "./components/NotesTable";
import LoadingBackdrop from "./components/LoadingBackdrop";
import {Container} from "@mui/material";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const updateNotes = (newNotes) => {
    setNotes(newNotes);
    setLoading(false);
  }

  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, [notes]);


  return (
    <Container maxWidth="xl" className="App">
      {loading && <LoadingBackdrop/>}
      <Form updateNotes={updateNotes} loading={() => setLoading(true)}/>
      <NotesTable notes={notes} updateNotes={updateNotes}/>
    </Container>
  );
}

export default App;
