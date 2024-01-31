import React, {useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import NotesTable from "./components/NotesTable";
import LoadingBackdrop from "./components/LoadingBackdrop";
import {Chip, Container} from "@mui/material";
import StatsBoard from "./components/StatsBoard";
import {getCoefficentsMatieres} from "./api/notes";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [competences, setCompetences] = React.useState([]);
  const [coefficientsMatiere] = React.useState([]);
  const [loading, setLoading] = React.useState(false);


  const updateNotes = (newNotes, competences, coefficientsMat) => {
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    getCoefficentsMatieres(notes, coefficientsMat);
    setCompetences(competences);
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
      <h1>Ouaf Notes <Chip label="v 2.0" variant="outlined" /></h1>
      <StatsBoard notes={notes} competences={competences} coefficientMatiere={coefficientsMatiere}/>
      {loading && <LoadingBackdrop/>}
      <Form updateNotes={updateNotes} loading={() => setLoading(true)}/>
      <NotesTable notes={notes} updateNotes={updateNotes}/>
    </Container>
  );
}

export default App;
