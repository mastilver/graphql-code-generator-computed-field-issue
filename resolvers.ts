import { Resolvers } from "./typings";

const resolvers: Resolvers = {
  Query: {
    user() {
      return {
        id: '1',
        firstName: 'John',
        lastName: 'Smith',
        // Property 'fullName' is missing in type '{ id: string; firstName: string; lastName: string; }' but required in type 'User'.
      }
    }
  },
  User: {
    fullName(user) {
      return `${user.firstName} ${user.lastName}`;
    }
  }
}

export default resolvers