import {
  defineNamespace,
  Model as HallMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-hall';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(HallMixin, {
});

defineNamespace(Model);

export default Model;
