import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ScheduleMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-schedule';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ScheduleMixin, Validations, {
});

export default Model;
