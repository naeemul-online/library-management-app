import { model, Schema } from "mongoose";
import { IBorrow } from "../interfaces/borrow.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    quantity: { type: Number, required: true, min: 1 },
    dueDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

borrowSchema.post("save", function (doc, next) {
  console.log(`Book borrowed! id: ${doc.book}, quantity: ${doc.quantity}`);
  next();
});

export const Borrow = model<IBorrow>("Borrow", borrowSchema);
