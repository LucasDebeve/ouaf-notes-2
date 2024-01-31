import React, {useState} from 'react';
import StatCard from "./StatCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from "prop-types";
import {getCoefficentsMatieres, getMoyenneGenerale, getMoyennesMatieres} from "../api/notes";

function StatsBoard({ notes }) {
  getMoyennesMatieres(notes);

  const [moyennePonderee] = useState(getMoyenneGenerale(notes));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {notes.map((matiere, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StatCard main_info={`${Math.round((matiere.moyenne + Number.EPSILON) * 100) / 100}`} sub_info={matiere.matiere} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <StatCard sub_info="Moyenne Intranet" main_info={`${Math.round((notes.reduce((acc, matiere) => acc + matiere.moyenne, 0) / notes.length + Number.EPSILON) * 100) / 100}`} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard sub_info="Moyenne générale" main_info={`${moyennePonderee}`} />
        </Grid >
      </Grid>
    </Box>
  );
}

StatsBoard.propTypes = {
  notes: PropTypes.array,
};

StatsBoard.defaultProps = {
  notes: [
    {
      "matiere": "Bonification S3 | Bonification S3 INFO",
      "evaluations": [
        {
          "note": 20,
          "coefficient": 1
        }
      ],
      "moyenne": 19.5,
      "coefs": [
        {"ue_id": 1, "ue": "Hello", "coef": 1},
        {"ue_id": 2, "ue": "ggg", "coef": 1},
        {"ue_id": 3, "ue": "Bye", "coef": 1},
      ],
      "coefTotal": 3,
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
      ],
      "moyenne": 19.5,
      "coefs": [
        {"ue_id": 1, "ue": "Hello", "coef": 1},
        {"ue_id": 2, "ue": "ggg", "coef": 1},
        {"ue_id": 3, "ue": "Bye", "coef": 1},
      ],
      "coefTotal": 3,
    },
    {
      "matiere": "R3.02 | Développement efficace",
      "evaluations": [
        {
          "note": 18,
          "coefficient": 1
        }
      ],
      "moyenne": 19.5,
      "coefs": [
        {"ue_id": 1, "ue": "Hello", "coef": 1},
        {"ue_id": 2, "ue": "ggg", "coef": 1},
        {"ue_id": 3, "ue": "Bye", "coef": 1},
      ],
      "coefTotal": 3,
    },
  ],
}


export default StatsBoard;