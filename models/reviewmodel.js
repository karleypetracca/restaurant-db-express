const db = require('./conn');

class ReviewList {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    
    static async getAll() {
        try {
            const response = await db.any(`
            SELECT * FROM review
            INNER JOIN reviewer ON review.reviewer_id = reviewer.id;
            `);
            return response;
        } catch(error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

}

module.exports = ReviewList;