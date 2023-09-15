import {
  defineNamespace,
  Model as CardTypeMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-card-type';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CardTypeMixin, {
});

defineNamespace(Model);

export default Model;
