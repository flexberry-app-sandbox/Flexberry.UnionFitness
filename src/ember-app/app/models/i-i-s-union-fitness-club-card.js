import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ClubCardMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-club-card';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ClubCardMixin, Validations, {
});

export default Model;
