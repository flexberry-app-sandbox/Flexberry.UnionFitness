import {
  defineNamespace,
  Model as ScheduleMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-schedule';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ScheduleMixin, {
});

defineNamespace(Model);

export default Model;
