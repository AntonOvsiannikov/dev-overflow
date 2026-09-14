interface SignInWithOAuthUser {
  name: string;
  username: string;
  email: string;
  image: string;
}

interface SignInWithOAuthParams {
  user: SignInWithOAuthUser;
  provider: string;
  providerAccountId: string;
}

interface AuthCredentials {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface CreateQuestionParams {
  title: string;
  content: string;
  tags: string[];
}

interface EditQuestionParams extends CreateQuestionParams {
  questionId: string;
}

interface GetQuestionParams {
  questionId: string;
}
