import {
  defineNamespace,
  Model as ActionMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-action';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ActionMixin, {
});

defineNamespace(Model);

export default Model;
