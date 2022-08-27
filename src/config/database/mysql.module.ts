import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: async () => ({
        type: 'mysql',
        url: process.env.DATABASE_URL,
        migrationsTableName: 'migration',
        synchronize: true,
        migrationsRun: true,
        entities: ['dist/**/*.entity{.ts,.js}'],
        migrations: ['dist/src/config/database/migrations/*.js'],
        migrationsTransactionMode: 'each',
        uuidExtension: 'uuid-ossp',
        installExtensions: true,
        cli: {
          migrationsDir: join(
            __dirname,
            'src',
            'config',
            'database',
            'migrations',
          ),
        },
      }),
      inject: [],
    }),
  ],
})
export class DBProviderModule {}
