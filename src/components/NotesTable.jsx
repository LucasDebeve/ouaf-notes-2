import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from "prop-types";

function NotesTable({ notes }) {
  // notes contains an array of subject objects with the following structure:
  // {
  //   evaluations: [
  //     {
  //       notes: 12,
  //       coefficient: 1,
  //      },
  //    {
  //       notes: 15,
  //       coefficient: 0.5,
  //     },
  //   ],
  //   matiere: "My first note",
  // }
  //
  // Transform the notes array into a rows array
  // with the following structure:
  // [
  //   {
  //     id: 1,
  //     matiere: "My first note",
  //     note: 12,
  //     coefficient: 1,
  //   },
  //   {
  //     id: 2,
  //     matiere: "My first note",
  //     note: 15,
  //     coefficient: 0.5,
  //   }
  // ]
  let id = 0;
  const rows =
    notes.map((subject) => {
      return subject.evaluations.map((evaluation) => {
        return {
          id: id++,
          matiere: subject.matiere,
          note: evaluation.note,
          coefficient: evaluation.coefficient,
        }
      });
    }).flat();

  return (
    <DataGrid columns={
      [
        {
          field: 'id',
          headerName: 'ID',
          width: 80,
        },
        {
          field: 'matiere',
          headerName: 'Matière',
          flex: 1,
          editable: true,
          type: 'singleSelect',
          valueOptions: notes.map((subject) => subject.matiere),
        },
        {
          field: 'note',
          headerName: 'Note',
          width: 130,
          editable: true,
        },
        {
          field: 'coefficient',
          headerName: 'Coefficient',
          width: 130,
          editable: true,
        },
      ]
    } rows={rows} autoHeight={true}
    />);
}

NotesTable.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    evaluations: PropTypes.arrayOf(PropTypes.shape({
      notes: PropTypes.number,
      coefficient: PropTypes.number,
    })),
    matiere: PropTypes.string,
  })).isRequired,
};

NotesTable.defaultProps = {
  notes: [
    {
      "matiere": "Bonification S3 | Bonification S3 INFO",
      "evaluations": [
        {
          "note": 20,
          "coefficient": 1
        }
      ]
    },
    {
      "matiere": "R3.01 | Développement web",
      "evaluations": [
        {
          "note": 19.5,
          "coefficient": 1
        },
        {
          "note": 20,
          "coefficient": 1
        }
      ]
    },
    {
      "matiere": "R3.02 | Développement efficace",
      "evaluations": [
        {
          "note": 18,
          "coefficient": 1
        }
      ]
    },
  ],
};


export default NotesTable;