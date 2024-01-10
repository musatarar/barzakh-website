import { Injectable, ExecutionContext, CallHandler, NestInterceptor } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Observable } from 'rxjs';

@Injectable()
export class CacheClearInterceptor implements NestInterceptor {
    constructor(
        @Inject(CACHE_MANAGER) protected readonly cacheManager: Cache,
    ) {}

    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        // Delete the entire cache.
        await this.cacheManager.reset();
        
        return next.handle();
    }
}
