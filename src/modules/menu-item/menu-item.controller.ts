import { Controller, Get, Param } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { menuItemTypes } from './menu-item.taxonomy';

@Controller('menu-item')
export class MenuItemController {
    constructor(private readonly menuItemService: MenuItemService) {}

    @Get(':type')
    async getByType(
        @Param('type') type: menuItemTypes,
    ) {
        return await this.menuItemService.findByType(type);
    }
}
