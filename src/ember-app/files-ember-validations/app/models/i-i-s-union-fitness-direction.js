import {
  defineNamespace,
  Model as DirectionMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-direction';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(DirectionMixin, {
});

defineNamespace(Model);

export default Model;
