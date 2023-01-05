import { Injectable } from '@nestjs/common';
import BookCommentsDto from 'src/interface/BookCommentsDto';
import { BookComments, BookCommentsDocument } from './BookCommentModel';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BookCommentsService {
  constructor(
    @InjectModel(BookComments.name)
    private BookCommentsModel: Model<BookCommentsDocument>,
  ) {}

  public async create(data: BookCommentsDto): Promise<BookComments> {
    const bookComments = new this.BookCommentsModel(data);

    await bookComments.save();
    return bookComments;
  }

  async update(
    id: string,
    data: BookCommentsDto,
  ): Promise<BookComments | undefined> {
    const bookComments = await this.BookCommentsModel.findByIdAndUpdate(
      id,
      data,
    ).select('-__v');
    return bookComments;
  }

  async delete(id: string) {
    await this.BookCommentsModel.deleteOne({ _id: id });
  }

  async findAll(): Promise<BookComments[]> {
    console.log(1);

    const bookComments = await this.BookCommentsModel.find().select('-__v');
    console.log(bookComments);
    console.log('sssssss');
    return bookComments;
  }

  async findAllBookComment(id: number): Promise<BookComments | undefined> {
    const books = await this.BookCommentsModel.findById(id).select('-__v');
    return books;
  }
}
