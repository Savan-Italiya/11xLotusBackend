// import { Module } from '@nestjs/common';
// import { RoleService } from './role.service';
// import { RoleController } from './role.controller';

// @Module({
//   controllers: [RoleController],
//   providers: [RoleService],
// })
// export class RoleModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './entities/role.entity';
import { Permission } from './entities/permissions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission])],
  providers: [RoleService],
  controllers: [RoleController],
  exports: [TypeOrmModule],
})
export class RoleModule {}