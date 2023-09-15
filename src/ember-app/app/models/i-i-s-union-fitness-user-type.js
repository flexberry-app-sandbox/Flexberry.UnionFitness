import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as UserTypeMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-user-type';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(UserTypeMixin, Validations, {
});

export default Model;
