import { IsEmail, IsString } from "class-validator";

export class LoginDto {
    @IsEmail()
    email: string

    @IsString({ message: "Invalid password" })
    password: string
}
