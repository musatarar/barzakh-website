import { Module } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { MenuItemController } from './menu-item.controller';
import { MenuItem } from './entities/menu-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';



@Module({
  imports: [
    TypeOrmModule.forFeature([MenuItem]),
    CacheModule.register()
  ],
  controllers: [MenuItemController],
  providers: [MenuItemService]
})
export class MenuItemModule {}
