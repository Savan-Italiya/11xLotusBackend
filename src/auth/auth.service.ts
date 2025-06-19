import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) { }

  async register(createAuthDto: CreateAuthDto) {
    const existingUser = await this.userRepository.findOne({
      where: [
        { email: createAuthDto.email },
        { username: createAuthDto.username },
      ],
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    await this.validateRoleSpecificRequirements(createAuthDto);

    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);

    const user = this.userRepository.create({
      ...createAuthDto,
      password: hashedPassword,
      balance: createAuthDto.initial_balance || 0,
      is_active: true,
    });

    await this.userRepository.save(user);

    // Generate JWT token
    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      username: user.username,
      mobile_number: user.mobile_number,
      role_id: user.role_id
    });

    return {
      message: 'User registered successfully',
      token
    };
  }

  private async validateRoleSpecificRequirements(createAuthDto: CreateAuthDto) {
    switch (createAuthDto.role_id) {
      case 1: // SuperAgent
        if (!createAuthDto.initial_balance) {
          throw new BadRequestException('Initial balance is required for SuperAgent');
        }
        break;

      case 2: // SubAgent
        if (!createAuthDto.initial_balance) {
          throw new BadRequestException('Initial balance is required for SubAgent');
        }

      case 3: // SubAdmin
        // Add any specific validation for SubAdmin
        break;

      case 4: // Normal User
        // Add any specific validation for Normal User
        break;

      default:
        throw new BadRequestException('Invalid role ID');
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.userRepository.findOne({
      where: { email: loginAuthDto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      loginAuthDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      username: user.username,
      mobile_number: user.mobile_number,
      role_id: user.role_id
    });

    return {
      message: 'Login successful',
      token
    };
  }
}
