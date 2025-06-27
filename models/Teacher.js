const teacherSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    id: {
        type: String, required: true
    },
    subject: {
        type: String
    }
});
module.exports = mongoose.model("Teacher", teacherSchema);
