import { Module } from '@nestjs/common';
import { bookCommentsService } from './bookCommentsService';
import { MongooseModule } from '@nestjs/mongoose';
import { BookComments, BookCommentsSchema } from './BookCommentModel';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BookComments.name, schema: BookCommentsSchema },
    ]),
  ],
  providers: [bookCommentsService],
  exports: [bookCommentsService],
})
export class BookModule {}
