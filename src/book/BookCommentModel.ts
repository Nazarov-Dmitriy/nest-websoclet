import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BookCommentsDocument = BookComments & Document;

@Schema()
export class BookComments {
  @Prop({ required: true })
  public id: string;

  @Prop({ required: true })
  public bookId: string;

  @Prop({ required: true })
  public comment: string;
}

export const BookCommentsSchema = SchemaFactory.createForClass(BookComments);

// import mongoose, { Document, Schema } from 'mongoose';
// import BookComments from '../interface/BookComments';

// const schema = new Schema({
//   id: {
//     type: Number,
//     required: true,
//   },
//   bookId: {
//     type: Number,
//     required: true,
//   },
//   comment: {
//     type: String,
//     required: true,
//   },
// });
// export const BookCommentsModels = mongoose.model<BookComments & Document>(
//   'Book',
//   schema,
// );
