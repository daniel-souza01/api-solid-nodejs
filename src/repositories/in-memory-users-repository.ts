import { Prisma } from '@prisma/client'

export class InMemoryUsersRepository {
  public users: any = []

  async crate(data: Prisma.UserCreateInput) {
    this.users.push(data)
  }
}
