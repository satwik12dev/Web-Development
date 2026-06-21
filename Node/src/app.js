const express = require('express');

const app = express()
app.use(express.json())
const note = []

/* POST /notes*/
app.post("/notes", (req, res) => {
    note.push(req.body)
    res.status(201).json({
        message: "note created succesfully"
    })
})

app.get("/notes", (req,res) =>{
    res.status(200).json({
        note : note,
        message:"notes fetched successfully"
    })
})

app.delete("/notes/:index", (req, res) => {
    const idx = req.params.index
    delete note[idx]
    res.status(200).json({
        message: "note deleted successfully"
    })
})

app.patch("/notes/:index", (req,res) => {
    const idx = req.params.index
    const description = req.body.description
    const title = req.body.title
    
    note[idx].description=description
    note[idx].title=title

    res.status(200).json({
        message:"Note updated successfully"
    })
})
module.exports = app