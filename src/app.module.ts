import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './book/Book.module';
import { BookGateway } from './book/bookComments.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.ME_CONFIG_MONGODB_URL),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService, BookGateway],
})
export class AppModule {}
