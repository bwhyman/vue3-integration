export interface User {
  name?: string
  number?: string
  password?: string
}

export interface Item {
  id?: string
  name?: string
  price?: string
  href?: string
}

export interface ResultVO {
  code: number
  message?: string
  data?: any
}
