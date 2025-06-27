// hospital db
const doctorSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    id: {
        type: String, required: true
    },
    specialization: {
        type: String, required: true
    },
    experience: {
        type: Number
    }
});
module.exports = mongoose.model("Doctor", doctorSchema);
