export interface User {
  id: number;
  name: string;
  sex: string;
  age: number;
}

export interface UserResponse {
  status: boolean;
  message: string;
  data: User[];
}

export interface Article {
  id: number;
  title: string;
  author: number;
  content: string;
}

export interface ArticleResponse {
  status: boolean;
  message: string;
  data: Article[];
}


