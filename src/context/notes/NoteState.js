import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "65e5783ea46e134f81b6ec9f",
          "user": "65c9eb20630b523e2296bcbe",
          "Title": "Myy First Title",
          "Description": "MyFirst Description",
          "Tag": "My First Tag",
          "Date": "2024-03-04T07:29:02.273Z",
          "__v": 0
        },
        {
          "_id": "65e5785ba46e134f81b6eca2",
          "user": "65c9eb20630b523e2296bcbe",
          "Title": "Myy Second Title",
          "Description": "MySecond Description",
          "Tag": "My Second Tag",
          "Date": "2024-03-04T07:29:31.941Z",
          "__v": 0
        },
        {
            "_id": "65e5783ea46e134f81b6ec9f",
            "user": "65c9eb20630b523e2296bcbe",
            "Title": "Myy First Title",
            "Description": "MyFirst Description",
            "Tag": "My First Tag",
            "Date": "2024-03-04T07:29:02.273Z",
            "__v": 0
        },
        {
            "_id": "65e5785ba46e134f81b6eca2",
            "user": "65c9eb20630b523e2296bcbe",
            "Title": "Myy Second Title",
            "Description": "MySecond Description",
            "Tag": "My Second Tag",
            "Date": "2024-03-04T07:29:31.941Z",
            "__v": 0
          },
          {
              "_id": "65e5783ea46e134f81b6ec9f",
              "user": "65c9eb20630b523e2296bcbe",
              "Title": "Myy First Title",
              "Description": "MyFirst Description",
              "Tag": "My First Tag",
              "Date": "2024-03-04T07:29:02.273Z",
              "__v": 0
          },
          {
            "_id": "65e5785ba46e134f81b6eca2",
            "user": "65c9eb20630b523e2296bcbe",
            "Title": "Myy Second Title",
            "Description": "MySecond Description",
            "Tag": "My Second Tag",
            "Date": "2024-03-04T07:29:31.941Z",
            "__v": 0
          },
          {
              "_id": "65e5783ea46e134f81b6ec9f",
              "user": "65c9eb20630b523e2296bcbe",
              "Title": "Myy First Title",
              "Description": "MyFirst Description",
              "Tag": "My First Tag",
              "Date": "2024-03-04T07:29:02.273Z",
              "__v": 0
          },
      ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <noteContext.Provider value={{notes, setNotes}}>
            { props.children }
        </noteContext.Provider> 
    )
}

export default NoteState;