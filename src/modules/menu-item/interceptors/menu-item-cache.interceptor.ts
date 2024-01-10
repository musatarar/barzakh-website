import { Injectable, ExecutionContext, CallHandler, NestInterceptor } from '@nestjs/common';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import { HttpAdapterHost, Reflector } from '@nestjs/core';
import { loadPackage } from '@nestjs/common/utils/load-package.util';
import { Cache } from 'cache-manager';
import { Observable, map, of, tap } from 'rxjs';




@Injectable()
export class MenuItemCacheInterceptor implements NestInterceptor {
    constructor(
        @Inject(CACHE_MANAGER) protected readonly cacheManager: Cache,
        protected readonly reflector: Reflector
        ) {
        const cacheManagerPackage = loadPackage(
            'cache-manager',
            'CacheModule',
            () => require('cache-manager'),
            );
    }

    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const key = request.params.type;
        try{
            const value = await this.cacheManager.get(key);
            if (value) return of(value);
            return next.handle().pipe(
                tap(response => {
                    this.cacheManager.set(key, response, parseInt(process.env.CACHE_EXPIRY))
                })
            )
        } catch (err) {
            return next.handle();
        }
    }
}