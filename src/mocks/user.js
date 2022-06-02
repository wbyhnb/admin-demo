export default {
    getUser: config => {
        const { username, password } = JSON.parse(config.body)
        // 先判断用户是否存在
        if (username === 'admin' || username === 'user') {
            // 判断账号和密码是否对应
            if (username === 'admin' && password === '123456') {
                return {
                    code: 200,
                    data: {
                        token: 123456,
                        message: '登录成功'
                    }
                }
            } else if (username === 'user' && password === '123456') {
                return {
                    code: 200,
                    data: {
                        token: 654321,
                        message: '登录成功'
                    }
                }
            } else {
                return {
                    code: -999,
                    data: {
                        message: '密码错误'
                    }
                }
            }
        } else {
            return {
                code: -999,
                data: {
                    message: '用户不存在'
                }
            }
        }
    }
}
