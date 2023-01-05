import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { map } from 'rxjs';
import { Socket } from 'socket.io';
import { bookCommentsService } from './bookCommentsService';

@WebSocketGateway({ cors: true })
export class BookGateway {
  constructor(private readonly bookCommentsService: bookCommentsService) {}

  @SubscribeMessage('getAllComments')
  async getAllComments(
    @MessageBody() bookId: { bookId: number },
    @ConnectedSocket() client: Socket,
  ) {
    await this.bookCommentsService.create({
      id: 1,
      bookId: 1,
      comment: 'sssssssssssssss',
    });
    await this.bookCommentsService.create({
      id: 2,
      bookId: 2,
      comment: 'sssssssssssssss',
    });
    const bookComments = await this.bookCommentsService
      .findAll()
      .then((res) => res.map((item) => item.comment));

    return {
      bookId: bookId.bookId,
      bookComments: bookComments,
    };
  }

  @SubscribeMessage('addComment')
  async addComment(
    @MessageBody() data: { data: string },
    @ConnectedSocket() client: Socket,
  ) {
    const comment = await this.bookCommentsService.create({
      id: 2,
      bookId: 2,
      comment: data.data,
    });

    return comment;
  }
}
