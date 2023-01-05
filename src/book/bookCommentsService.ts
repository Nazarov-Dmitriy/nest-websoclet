import { Injectable } from '@nestjs/common';
import { Model, Connection } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import BookCommentsDto from 'src/interface/BookCommentsDto';
import { BookCommentsDocument, BookComments } from './BookCommentModel';

@Injectable()
export class bookCommentsService {
  constructor(
    @InjectModel(BookComments.name)
    private BookComments: Model<BookCommentsDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public async findAll(): Promise<BookCommentsDocument[]> {
    const books = await this.BookComments.find().select('-__v');
    return books;
  }

  public async create(data: BookCommentsDto): Promise<BookCommentsDocument> {
    const book = new this.BookComments(data);

    return await book.save();
  }

  public async findAllBookComment(
    id: number,
  ): Promise<BookCommentsDocument | null> {
    const books = await this.BookComments.findById(id).select('-__v');
    return books;
  }

  async update(
    id: string,
    data: BookCommentsDto,
  ): Promise<BookComments | null> {
    const books = await this.BookComments.findByIdAndUpdate(id, data).select(
      '-__v',
    );
    return books;
  }

  async delete(id: string): Promise<void> {
    await this.BookComments.deleteOne({ _id: id });
  }
}
