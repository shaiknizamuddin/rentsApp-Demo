import mongoose from "mongoose";
const Schema = mongoose.Schema;

const paymentModel = new Schema({
  payment_date: { type: Date },
  payment_type: { type: String, enum: ["rent", "expenses", "tax", "misc"] },
  payment_mode: { type: String, enum: ["online", "cash"] },
  tenent_id: {
    type: Schema.Types.ObjectId,
    ref: "Tenent",
  },
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: "Owner",
  },
  comments: { type: String },
  created_at: { type: Date, default: Date.now },
});

const paymentSchema = mongoose.model("Payments", paymentModel);
export default paymentSchema;
