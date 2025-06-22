import { Model, model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: {
      type: String,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
      required: true,
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String, trim: true },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a positive number"],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

bookSchema.pre("save", function (next) {
  this.title = this.title.trim();
  this.author = this.author.trim();
  next();
});

// book available logic
bookSchema.statics.decreaseCopies = async function (
  bookId: string,
  quantity: number
) {
  const book = await this.findById(bookId);
  if (!book) throw new Error("Book not found");
  if (book.copies < quantity) throw new Error("Not enough copies available");
  book.copies -= quantity;
  book.available = book.copies > 0;
  await book.save();
  return book;
};

interface BookModel extends Model<IBook> {
  decreaseCopies(bookId: string, quantity: number): Promise<IBook>;
}

export const Book = model<IBook, BookModel>("Book", bookSchema);
