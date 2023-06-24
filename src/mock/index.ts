import type { ResultVO, Item, User } from '@/types'
import { Response, createServer } from 'miragejs'
import { USER } from '@/role'

export const makeServer = () => server

const server = createServer({})

server.namespace = 'api'

server.get(
  'items',
  () => {
    const resultVO: ResultVO = { code: 200 }
    resultVO.data = {
      items: items
    }
    return resultVO
  },
  { timing: 2000 }
)

server.get(
  'items/:id',
  (_schema, request) => {
    const resultVO: ResultVO = { code: 200 }
    const id = request.params.id
    resultVO.data = {
      item: items.find((i) => i.id == id)
    }
    return resultVO
  },
  { timing: 1000 }
)

server.post('login', (_schema, request) => {
  const resultVO: ResultVO = { code: 200 }
  const { number, password } = JSON.parse(request.requestBody)
  const user = users.find((u) => u.number == number && u.password == password)
  if (user) {
    resultVO.data = { user: { name: user.name } }
    return new Response(
      200,
      {
        role: USER,
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      },
      resultVO
    )
  }
  resultVO.code = 401
  resultVO.message = '用户名密码错误'
  return resultVO
})
// ！无效！原生fetch可以，axios无法获取primise返回对象
server.passthrough('https://api.github.com/**')

// ===========================
const createItems = () => {
  const items: Item[] = []
  for (let index = 0; index < 20; index++) {
    items.push({
      id: `${index + 1}`,
      name: '芒果巴旦木奶糕点心软糯雪花酥牛轧糖之恋网红零食小吃休闲食品',
      href: `https://picsum.photos/110/110`,
      price: (Math.random() * 100).toFixed(2)
    })
  }
  return items
}
const items = createItems()
const users: User[] = [{ name: 'BO', number: '1001', password: '1001' }]
