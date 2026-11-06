const { response } = require('express')
const db = require('../database/connect')

class Diary {
    constructor({id, entry_date, title, context}) {
        this.id = id,
        this.entry_date = entry_date,
        this.title = title,
        this.context = context
    }

    static async getAll() {
        const response = await db.query('SELECT * FROM diary_entries;')

        if(response.rows.length === 0) {
            throw new Error('There are no entries available currently')
        }
        return response.rows.maps(d => new Diary(d))
    }

    // static async getOneById (id) {

    // }
    
}

module.exports = Diary