import mongoose from "mongoose";
const schema = mongoose.Schema;

const tenentModel = new schema({
  tenent_name: { type: String, required: true },
  tenent_code: { type: String, required: true },
  email: { type: String, default: "" },
  phone_number: {
    type: String,
    required: true,
    match: [
      /^[1-9]\d{9}$/,
      "The value of path {PATH} ({VALUE}) is not a valid mobile number.",
    ],
  },
  property: { type: Object, default: { address: String, floor: String } }, 
  joining_date: { type: Date },
  leaving_date: { type: Date },
  rent_amount: { type: String },
  advance_amount: { type: String },
  water_bill: { type: String },
  advance_received_date: { type: Date },
  is_advance_amount_returned: { type: Boolean },
  comments: { type: String },
  complaints: { type: String },
  broker_name: { type: String },
  created_at: { type: Date, default: Date.now },
  is_active: { type: Boolean, default: "false" },
  role: { type: String, default: "Tenent" },
});

const tenentSchema = mongoose.model("Tenent", tenentModel);
export default tenentSchema;
