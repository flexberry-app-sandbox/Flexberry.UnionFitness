import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as GroupPragramMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-group-pragram';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(GroupPragramMixin, Validations, {
});

export default Model;
