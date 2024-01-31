export async function fetchNotes(data = {}) {
  const body = Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
    )
    .join("&");
  const response = await fetch('https://api-notes-dev.vercel.app/notes', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", // x-www-form-urlencoded
      Accept: "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body,
  } )
  return response.json();
}

export function getMoyennesMatieres(notes) {
  notes.forEach((matiere) => {
    let moyenne = 0;
    let coef = 0;
    matiere.evaluations.forEach((evaluation) => {
      moyenne += evaluation.note * evaluation.coefficient;
      coef += evaluation.coefficient;
    });
    matiere.moyenne = Math.round((moyenne / coef) * 100) / 100;
  });
}

export function getCoefficentsMatieres(notes, coefficientMat) {
  notes.forEach((matiere) => {
    const coefMat = coefficientMat.find(
      (coef) => coef.matiere === matiere.matiere,
    );
    matiere.coefs = coefMat && coefMat.coefs;
    matiere.coefTotal = coefMat ? matiere.coefs.reduce((acc, b) => acc + b.coef, 0) : 0;
  });

}

export function getMoyenneGenerale(notes) {
  const moy = notes.reduce(
    (acc, matiere) => acc + matiere.moyenne * matiere.coefTotal,
    0,
  );
  console.log("notes", notes);
  console.log("moyenne générale", moy)
  return moy;
}