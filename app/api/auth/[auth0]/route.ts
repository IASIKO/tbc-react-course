import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/api/auth-users/create-auth-user",
    authorizationParams: {
      prompt: "login",
    },
  }),
});
