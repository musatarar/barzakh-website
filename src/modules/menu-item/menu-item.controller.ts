import { Controller, Delete, Get, Param, UseInterceptors } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { menuItemTypes } from './menu-item.taxonomy';
import { MenuItemCacheInterceptor } from './interceptors/menu-item-cache.interceptor';
import { CacheClearInterceptor } from './interceptors/menu-item-cache-empty.interceptor';

@Controller('menu-item')
export class MenuItemController {
    constructor(private readonly menuItemService: MenuItemService) {}

    @Get(':type')
    @UseInterceptors(MenuItemCacheInterceptor)
    async getByType(
        @Param('type') type: menuItemTypes,
    ) {
        return await this.menuItemService.findByType(type);
    }

    @Delete()
    @UseInterceptors(CacheClearInterceptor)
    async deleteCache() {
        return;
    }
}
