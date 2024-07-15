import { UsersApi } from "../datasources/users-api.data";

export interface MyContext {
  // user?: String;
  // dbURI?: String;
  dataSources: {
    usersApi: UsersApi;
  }
}


