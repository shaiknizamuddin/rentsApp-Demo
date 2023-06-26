import mongoose from "mongoose";
const schema = mongoose.Schema;

const propertyModel = new schema({
  property_name: { type: String, required: true },
  phone_number: {
    type: String,
    match: [
      /^[1-9]\d{9}$/,
      "The value of path {PATH} ({VALUE}) is not a valid mobile number.",
    ],
  },
  property_address: { type: String, required:true },
  start_date: { type: Date },
  property_value: { type: String },
  no_of_floors: { type: String },
  year_built: { type: String },
  created_at: { type: Date, default: Date.now },
  is_active: { type: Boolean, default: "false" },
  maintainence: { type: String },
  property_tax: { type: String },
  water_tax: { type: String },
  latitude: { type: String },
  longitude: { type: String },
});

const propertySchema = mongoose.model("Property", propertyModel);
export default propertySchema;
