import { Module } from '@nestjs/common';
import { BookComments, BookCommentsSchema } from './BookCommentModel';
import { BookCommentsService } from './bookCommentsService';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BookComments.name, schema: BookCommentsSchema },
    ]),
  ],
  providers: [BookCommentsService],
  exports: [BookCommentsService],
})
export class BookModule {}
