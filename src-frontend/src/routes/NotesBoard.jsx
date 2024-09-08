import NotesList from "../components/notes-list/NotesList";
import { Outlet, useLoaderData } from "react-router-dom";

function NotesBoard() {
  const notes = useLoaderData();

  return (
    <>
      <NotesList notes={notes}/>
      <Outlet />
    </>
  );
}

export default NotesBoard;

export async function loader() {
  try {
    const res = await fetch('http://localhost:8000/notes');
    const data = await res.json();

    return data.notes;
  } catch (error) {
    console.log(error)
  }
}
