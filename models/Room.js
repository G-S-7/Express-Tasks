const roomSchema = new mongoose.Schema(
    {roomno: {type: Number, required: true},
    status:{ type: String, enum:['A', 'N/A'], default:'A'}
}
);
module.exports = mongoose.model("Room", roomSchema);
