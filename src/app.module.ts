import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookCommentsService } from './book/bookCommentsService';
import { BookGateway } from './book/bookComments.gateway';
import { BookModule } from './book/bookComments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BookModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.ME_CONFIG_MONGODB_URL),
  ],
  controllers: [AppController],
  providers: [AppService, BookCommentsService, BookGateway],
})
export class AppModule {}
