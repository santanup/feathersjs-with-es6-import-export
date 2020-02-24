// Initializes the `my-service` service on path `/my-service`
import { MyService } from './my-service.class';

import createModel from '../../models/my-service.model';
import hooks from './my-service.hooks';

export default function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/my-service', new MyService(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('my-service');

  service.hooks(hooks);
};
