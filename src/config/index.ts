import { pathFilter } from 'express-unless'
// 不需要权限验证的请求
export const DO_NOT_CHECK_REQUEST_PATH: pathFilter[] = [
  '/login',
  '/register',
  '/yeba/visit',
  '/yeba/rechargeOrder',
  '/mailVerifyCode',
  '/allArticle',
  {
    url: '/^/article/d+$/',
    methods: ['get']
  }
]
// 腾讯云对象存储SecretId
export const COS_SECRET_ID: string = 'AKIDb7ScfYqoDTaN1TP7EAtAPSO9k9NTwFtU'
// 腾讯云对象存储SecretKey
export const COS_SECRET_KEY: string = 'f9t7B3jHyibVGuQlz2vfHk285sTs5FDz'
// 腾讯云对象存储bucket
export const COS_BUCKET: string = 'zr-1253381776'
// 腾讯云对象存储region
export const COS_REGION: string = 'ap-guangzhou'
export default {
  PORT: 80,
  DATABASE_HOST: 'localhost',
  USER: 'zr_dev',
  PASSWORD: 'YZ4371716',
  SESSION_DATABASE: 'session_db',
  SESSION_NAME: 'uid',
  TOKEN_SECRET: 'dangerous',
  TOKEN_MAX_AGE: 60 * 60 * 24, // second
  DO_NOT_CHECK_REQUEST_PATH,
  COS_SECRET_ID,
  COS_SECRET_KEY,
  COS_BUCKET,
  COS_REGION
}
