let urlLogin: string = 'http://localhost:3000/auth/login'
export const enviroments = {
  urlLogin: urlLogin,
  urlAuth: `${urlLogin}/api/oauth2/v1/token?grant_type=password`,
  urlRefreshToken: `${urlLogin}/api/oauth2/v1/token?grant_type=refresh_token&refresh_token`,
}
