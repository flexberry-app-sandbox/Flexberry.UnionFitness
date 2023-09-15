import {
  defineNamespace,
  Model as UserMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-user';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(UserMixin, {
});

defineNamespace(Model);

export default Model;
