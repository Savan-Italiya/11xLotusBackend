import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, HttpCode, HttpStatus, BadRequestException } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
// @UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User has been successfully registered.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 409, description: 'User with this email already exists.' })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 200, description: 'User has been successfully logged in.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, description: 'Return the user.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  findOne(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('Invalid user ID. ID must be a valid number.');
    }
    return this.userService.findOne(numericId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by id' })
  @ApiResponse({ status: 200, description: 'User has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({ status: 200, description: 'User has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  // @Get('email/:email')
  // @ApiOperation({ summary: 'Get user by email' })
  // @ApiResponse({ status: 200, description: 'Return the user.' })
  // @ApiResponse({ status: 404, description: 'User not found.' })
  // @ApiResponse({ status: 401, description: 'Unauthorized.' })
  // findByEmail(@Param('email') email: string) {
  //   return this.userService.findByEmail(email);
  // }

  // @Get('mobile/:mobile')
  // @ApiOperation({ summary: 'Get user by mobile number' })
  // @ApiResponse({ status: 200, description: 'Return the user.' })
  // @ApiResponse({ status: 404, description: 'User not found.' })
  // @ApiResponse({ status: 401, description: 'Unauthorized.' })
  // findByMobile(@Param('mobile') mobile: string) {
  //   return this.userService.findByMobile(mobile);
  // }

  // @Get('username/:username')
  // @ApiOperation({ summary: 'Get user by username' })
  // @ApiResponse({ status: 200, description: 'Return the user.' })
  // @ApiResponse({ status: 404, description: 'User not found.' })
  // @ApiResponse({ status: 401, description: 'Unauthorized.' })
  // findByUsername(@Param('username') username: string) {
  //   return this.userService.findByUsername(username);
  // }

  // @Get('role/:roleId')
  // @ApiOperation({ summary: 'Get users by role' })
  // @ApiResponse({ status: 200, description: 'Return users with the specified role.' })
  // @ApiResponse({ status: 401, description: 'Unauthorized.' })
  // findByRole(@Param('roleId') roleId: string) {
  //   return this.userService.findByRole(+roleId);
  // }

  // @Get('active/status')
  // @ApiOperation({ summary: 'Get users by active status' })
  // @ApiResponse({ status: 200, description: 'Return users based on active status.' })
  // @ApiResponse({ status: 401, description: 'Unauthorized.' })
  // findByActiveStatus(@Query('isActive') isActive: boolean) {
  //   return this.userService.findByActiveStatus(isActive);
  // }

  // @Get('pagination')
  // @ApiOperation({ summary: 'Get users with pagination' })
  // @ApiResponse({ status: 200, description: 'Return paginated users.' })
  // @ApiResponse({ status: 401, description: 'Unauthorized.' })
  // findWithPagination(
  //   @Query('page') page: number = 1,
  //   @Query('limit') limit: number = 10
  // ) {
  //   return this.userService.findWithPagination(page, limit);
  // }

  // @Get('count')
  // @ApiOperation({ summary: 'Get total count of users' })
  // @ApiResponse({ status: 200, description: 'Return total count of users.' })
  // @ApiResponse({ status: 401, description: 'Unauthorized.' })
  // getCount() {
  //   return this.userService.getCount();
  // }
}
