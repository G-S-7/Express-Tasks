// College db
const professorSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    id: {
        type: String, required: true
    },
    course: {
        type: String
    }
});
module.exports = mongoose.model("Professor", professorSchema);
