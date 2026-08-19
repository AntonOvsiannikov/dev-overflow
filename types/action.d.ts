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
