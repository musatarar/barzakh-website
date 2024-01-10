import { Module } from '@nestjs/common';
import { typeOrmDatabaseOptions } from '@/database/data-source';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItemModule } from './menu-item/menu-item.module';

@Module({
  imports: [
    MenuItemModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmDatabaseOptions),
  ],

})
export class AppModule {}
