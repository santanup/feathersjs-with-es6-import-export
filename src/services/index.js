import users from './users/users.service.js';
import myService from './my-service/my-service.service';

// eslint-disable-next-line no-unused-vars
export default function (app) {
  app.configure(users);
  app.configure(myService);
}
