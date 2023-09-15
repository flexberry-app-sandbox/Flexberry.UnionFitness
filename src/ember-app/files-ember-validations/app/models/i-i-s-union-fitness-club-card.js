import {
  defineNamespace,
  Model as ClubCardMixin
} from '../mixins/regenerated/models/i-i-s-union-fitness-club-card';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ClubCardMixin, {
});

defineNamespace(Model);

export default Model;
