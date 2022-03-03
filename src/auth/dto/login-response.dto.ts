export class LoginResponseDto {
  readonly uuid: string;
  readonly username: string;
  readonly rol: number;
  readonly entityId: number;
  readonly active?: boolean;
  readonly created_at?: Date;
  readonly updated_at?: Date;
  readonly access_token: string;
}
