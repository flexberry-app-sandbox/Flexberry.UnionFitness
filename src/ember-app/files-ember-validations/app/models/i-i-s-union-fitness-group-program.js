import {
  defineNamespace,
  Model as GroupProgramMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-group-program';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(GroupProgramMixin, {
});

defineNamespace(Model);

export default Model;
