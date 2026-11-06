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
        return response.rows.map(d => new Diary(d))
    }

    static async show(id){
        const response = await db.query('SELECT * FROM diary_entries WHERE id =$1;',[id])
      
        if (response.rows.length === 0) {
        throw new Error("The Diary does not exist");
        }            
        else {
            return new Diary(response.rows[0])
        }
            
    }

    static async create (data){

        if (!data.title){
            throw 'This entry need a title'
        }
        const existing = await db.query ('SELECT * FROM diary_entries WHERE id = $1;', [data.id]);
        

        if (existing.rows.length > 0) {
            throw 'The entry already exists'
        }
        const response = await db.query ('INSERT INTO diary_entries (entry_date, title, context) VALUES ($1, $2, $3) RETURNING *;', [data.entry_date,data.title,data.context])
        
        return new Diary(response.rows[0])

    }
    

    async update(data) {
        const context = data.context || this.context;
        // const date = data.entry_date || this.entry_date;
        
        const response = await db.query('UPDATE diary_entries SET context = $1 WHERE id = $2 RETURNING *', [context, this.id])
        return new Diary(response.rows[0])
    } 

    async destroy(){
        await db.query('DELETE FROM diary_entries WHERE id = $1;', [this.id]);
    }
    
}

module.exports = Diary