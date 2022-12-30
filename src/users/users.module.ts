import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema,user } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt/jwtConstant';
import { JwtStrategy } from './jwt.Strategy';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: user.name,schema:userSchema}
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '1m'
      }
    })
  ],
  providers: [UserService,JwtStrategy],
  controllers: [UserController]
})
export class UsersModule {}
