import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as DirectionMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-direction';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(DirectionMixin, Validations, {
});

export default Model;
