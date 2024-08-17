import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import { CreateUserDto } from "./Dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User
  ) {}
  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ where: { email } });
  }

  async createUser(createCustomerDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createCustomerDto);
  }
}
