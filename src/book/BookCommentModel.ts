import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BookCommentsDocument = BookComments & Document;

@Schema()
export class BookComments {
  @Prop()
  public id: number;

  @Prop()
  public bookId: number;

  @Prop()
  public comment: string;
}

export const BookCommentsSchema = SchemaFactory.createForClass(BookComments);
