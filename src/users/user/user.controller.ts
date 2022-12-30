import { Controller,Post,Get, Body ,Req, Res, Param,HttpCode, UseGuards} from '@nestjs/common';
import { ApiBearerAuth,ApiTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { userDTO } from '../dto/user.dto';
import { jwtAuthGuard } from '../jwt.user.guard';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('user')
export class UserController {
    
    constructor(private userService:UserService){}

    @UseGuards(jwtAuthGuard)
    @Get('/get-all')
    findAll(){
        return this.userService.findAll();
    }
    
    @Post('/sign-in')
    signIn(@Body() user:userDTO){
        return this.userService.signIn(user);
    }
    
    @Post('/log-in')
    logIn(@Body() user:userDTO){
        return this.userService.logIn(user);
    }
}