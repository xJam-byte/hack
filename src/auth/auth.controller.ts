import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/user/Dto/create-user.dto";
import { LoginUserDto } from "src/user/Dto/login-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body() customerDto: CreateUserDto) {
    return this.authService.login(customerDto);
  }

  @Post("/registration")
  async registration(@Body() customerDto: CreateUserDto) {
    return this.authService.registration(customerDto);
  }

  @Post("/registration/google")
  async registrationGoogle(@Body() customerDto: CreateUserDto) {
    return this.authService.registrationGoogle(customerDto);
  }
  @Post("/login/google")
  async loginGoogle(@Body() customerDto: LoginUserDto) {
    return this.authService.loginGoogle(customerDto);
  }
}
