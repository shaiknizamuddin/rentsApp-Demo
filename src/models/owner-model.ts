import mongoose from "mongoose";
const schema = mongoose.Schema;

const model = new schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: String },
  phone_number: {
    type: String,
    required: true,
    match: [
      /^[1-9]\d{9}$/,
      "The value of path {PATH} ({VALUE}) is not a valid mobile number.",
    ],
  },
  password: { type: String, required: true },
  last_active: { type: Date },
  created_at: { type: Date, default: Date.now },
  is_active: { type: Boolean, default: "false" },
  role: { type: String, enum: ["owner", "admin"] },
});

const ownerSchema = mongoose.model("Owner", model);
export default ownerSchema;
