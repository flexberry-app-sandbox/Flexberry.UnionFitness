import {
  defineNamespace,
  Model as UserTypeMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-user-type';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(UserTypeMixin, {
});

defineNamespace(Model);

export default Model;
