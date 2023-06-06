export const USER = 'fe0f2c'
export const ADMIN = '7dab98'

export const setRole = async (role: string) => {
  if (role == USER) {
    await import('./user')
  }
}
