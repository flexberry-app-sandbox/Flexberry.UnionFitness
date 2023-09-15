import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as GroupProgramMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-group-program';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(GroupProgramMixin, Validations, {
});

export default Model;
