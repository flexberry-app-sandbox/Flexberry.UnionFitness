import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as CardTypeMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-card-type';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(CardTypeMixin, Validations, {
});

export default Model;
