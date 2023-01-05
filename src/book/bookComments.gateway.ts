import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

import { BookCommentsService } from './bookCommentsService';

@WebSocketGateway({ cors: true })
export class BookGateway {
  constructor(private readonly bookCommentsService: BookCommentsService) {}

  @SubscribeMessage('getAllComments')
  async handleHelloMessage(client: any, payload: any) {
    const bookComments = await this.bookCommentsService.create({
      id: 1,
      bookId: 1,
      comment: 'sssssssssssssss',
    });
    const bookCommentss = await this.bookCommentsService.findAll();
    console.log(bookComments);

    return bookComments;
  }
}

// Добавьте обработчик getAllComments, который получает ID книги и возвращает список всех комментариев.
// Добавьте обработчик addComment, который получает текст комментария и сохраняет его.
