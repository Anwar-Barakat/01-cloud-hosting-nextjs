export interface CreateArticleDto {
  title: string;
  body: string;
}

export interface UpdateArticleDto {
  title?: string;
  body?: string;
}

export interface RegisterUserDto {
  username: string;
  email: string;
  password: string;
}
