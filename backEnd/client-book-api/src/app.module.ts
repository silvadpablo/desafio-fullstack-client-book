import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ClientModule } from './modules/client/client.module';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [UsersModule, AuthModule, ClientModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
