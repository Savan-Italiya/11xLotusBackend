import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RoleService } from '../role/role.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly roleService: RoleService,
  ) { }

  @Post('register/superagent')
  @ApiOperation({ summary: 'Register a new superagent' })
  @ApiResponse({ status: 201, description: 'SuperAgent has been successfully registered.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 409, description: 'User already exists.' })
  async registerSuperAgent(@Body() createAuthDto: CreateAuthDto) {
    const superAgentRole = await this.roleService.findByName('Super_agent');
    createAuthDto.role_id = Number(superAgentRole.id);
    return this.authService.register(createAuthDto);
  }

  @Post('register/subagent')
  @ApiOperation({ summary: 'Register a new subagent' })
  @ApiResponse({ status: 201, description: 'SubAgent has been successfully registered.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 409, description: 'User already exists.' })
  async registerSubAgent(@Body() createAuthDto: CreateAuthDto) {
    // createAuthDto.role_id = 2;
    const superAgentRole = await this.roleService.findByName('Sub_agent');
    createAuthDto.role_id = Number(superAgentRole.id);
    return this.authService.register(createAuthDto);
  }

  @Post('register/subadmin')
  @ApiOperation({ summary: 'Register a new subadmin' })
  @ApiResponse({ status: 201, description: 'SubAdmin has been successfully registered.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 409, description: 'User already exists.' })
  async registerSubAdmin(@Body() createAuthDto: CreateAuthDto) {
    const superAgentRole = await this.roleService.findByName('Sub_admin');
    createAuthDto.role_id = Number(superAgentRole.id);
    return this.authService.register(createAuthDto);
  }

  @Post('register/user')
  @ApiOperation({ summary: 'Register a new normal user' })
  @ApiResponse({ status: 201, description: 'User has been successfully registered.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 409, description: 'User already exists.' })
  async registerUser(@Body() createAuthDto: CreateAuthDto) {
    createAuthDto.role_id = 4;
    return this.authService.register(createAuthDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 200, description: 'User has been successfully logged in.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  async login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
}
