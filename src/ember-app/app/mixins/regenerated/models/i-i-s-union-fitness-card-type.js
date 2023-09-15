import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  descr_ct: DS.attr('string'),
  name_ct: DS.attr('string'),
  clubCard: DS.belongsTo('i-i-s-union-fitness-club-card', { inverse: 'cardType', async: false })
});

export let ValidationRules = {
  descr_ct: {
    descriptionKey: 'models.i-i-s-union-fitness-card-type.validations.descr_ct.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name_ct: {
    descriptionKey: 'models.i-i-s-union-fitness-card-type.validations.name_ct.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  clubCard: {
    descriptionKey: 'models.i-i-s-union-fitness-card-type.validations.clubCard.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
