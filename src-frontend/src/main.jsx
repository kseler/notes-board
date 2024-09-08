import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import NoteBoard, {loader as notesLoader} from './routes/NotesBoard'
import RootLayout from './routes/RootLayout';
import NewNote, {action} from './routes/new-note/NewNote';
import NoteDetails, {loader as noteDetailsLoader} from './components/note-details/NoteDetails';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout /> ,
    children: [
      {
        path: '/',
        element: <NoteBoard />,
        loader: notesLoader,
        children: [
          {path: '/create-note', element: <NewNote />, action},
          {path: ':id', element: <NoteDetails />, loader: noteDetailsLoader}
        ]
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
