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
