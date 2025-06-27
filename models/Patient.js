const patientSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    token: {
        type: Number, required: true
    },
    lastVisit: {
        type: Date, required: true
    }
});
module.exports = mongoose.model("Patient", patientSchema);
