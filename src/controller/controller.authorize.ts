import userModel from '../model/model.user'
import jwt from 'jsonwebtoken'
import config from '../config'
/**
 * 登录
 * @param req 
 * @param res 
 */
export async function login(req: any, res: any) {
  const { username, password } = req.body
  try {
    const { results }: any = await userModel.get({ username })
    const user = results[0]
    if (!user) {
      throw new Error('用户不存在')
    }
    if (user.password !== password) {
      throw new Error('密码不正确')
    }
    // 生成token
    const maxAge: number = config.TOKEN_MAX_AGE
    const token: string = jwt.sign(
      {
        uid: user.id,
        exp: Math.floor(Date.now() / 1000) + maxAge
      },
      config.TOKEN_SECRET
    )
    res.send({
      status: 'success',
      user,
      authorization: {
        token,
        maxAge
      }
    })
  } catch ({ message }) {
    res.send({
      message,
      status: 'error'
    })
  }
}

/**
 * 注册
 * @param req 
 * @param res 
 */
export async function register(req: any, res: any) {
  const { username, password } = req.body
  try {
    const { results }: any = await userModel.get({ username })
    const user = results[0]
    if (user) {
      throw new Error('用户已存在')
    }
    // 添加新用户
    await userModel.post({
      username,
      password
    })
    login(req, res)
  } catch ({ message }) {
    res.send({
      message,
      status: 'error'
    })
  }
}
