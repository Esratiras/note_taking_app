const mongoose = require('mongoose')

const NoteShema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },

    date: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('Notes', NoteShema)