import { Injectable,HttpException } from '@nestjs/common';
import { user,userDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { userDTO } from '../dto/user.dto';
import { hash,compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(user.name) private userModel:Model<userDocument>,
        private jwtService:JwtService
        ){}
    
    async signIn(user:userDTO){
        let { password }=user;
        let hashString=await hash(password,5);
        user.password=hashString;

        return this.userModel.create(user);
    }
    
    async logIn(user:userDTO){
        const { email,password }=user;
        const findUser=await this.userModel.findOne({ email });
        if(!findUser) throw new HttpException('Usuario no encontrado',404);
        const checkPass=await compare(password,findUser.password);
        if(!checkPass) throw new HttpException('Contrasen\'a erro\'nea',403);
        
        const payload={name:findUser.name,email:findUser.email};
        const token=this.jwtService.sign(payload);

        const data={
            user:findUser,
            token
        };

        return data;
    }
    
    async findAll(){
        return await this.userModel.find();
    }

}