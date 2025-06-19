import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { PaymentModule } from './payment/payment.module';
import { BettingModule } from './betting/betting.module';
import { SportsModule } from './sports/sports.module';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { RoleModule } from './role/role.module';
import { PassportModule } from '@nestjs/passport';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        ssl: configService.get('DB_SSL') === 'true',
        autoLoadEntities: true,
        //  synchronize: configService.get('NODE_ENV') !== 'production',
        //  logging: configService.get('NODE_ENV') !== 'production',
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UserModule,
    GameModule,
    PaymentModule,
    BettingModule,
    SportsModule,
    AuthModule,
    WalletModule,
    RoleModule,
    NotificationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
