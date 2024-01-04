import { Injectable } from '@nestjs/common';
import { MenuItem } from './entities/menu-item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { menuItemTypes } from './menu-item.taxonomy';

@Injectable()
export class MenuItemService {
    constructor(
       @InjectRepository(MenuItem)
       private readonly menuItemRepository: Repository<MenuItem>
    ){}

    async findByType(type: menuItemTypes): Promise<MenuItem[]>{
        return this.menuItemRepository.find({ where: { type } })
    }
}
