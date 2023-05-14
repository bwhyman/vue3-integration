import { type Item } from '@/types/Type'
const items: Item[] = []

const create = () => {
  for (let index = 0; index < 20; index++) {
    items.push({
      id: `${index + 1}`,
      name: '芒果巴旦木奶糕点心软糯雪花酥牛轧糖之恋网红零食小吃休闲食品',
      href: `https://picsum.photos/110/110?random=${index + 1}`,
      price: (Math.random() * 100).toFixed(2)
    })
  }
}
create()

export const listRecommendItems = (): Promise<Item[]> =>
  new Promise((reslove) => {
    setTimeout(() => {
      reslove(items)
    }, 2000)
  })

export const getItem = (id: string): Promise<Item> =>
  new Promise((reslove) => {
    setTimeout(() => {
      const item = items.find((item) => id == item.id)
      reslove(item!)
    }, 1000)
  })
