import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class jwtAuthGuard extends AuthGuard('jwt'){

}