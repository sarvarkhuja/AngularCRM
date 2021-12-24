import { Gender } from '../gender.model';

export class User {
  firstName: string;
  lastName: string;
  birthDate: Date;
  logoUrl: string;
  genderId: number;
  gender: Gender;
  userId: string;
  wish: string;
}
