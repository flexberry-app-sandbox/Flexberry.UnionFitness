import {
  defineNamespace,
  Model as GroupPragramMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-group-pragram';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(GroupPragramMixin, {
});

defineNamespace(Model);

export default Model;
