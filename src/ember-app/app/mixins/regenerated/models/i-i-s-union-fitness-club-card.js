import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  active: DS.attr('string'),
  card_type: DS.attr('string'),
  date_act: DS.attr('string'),
  date_end: DS.attr('string'),
  name_card: DS.attr('string'),
  user: DS.attr('string'),
  cardType: DS.hasMany('i-i-s-union-fitness-card-type', { inverse: 'clubCard', async: false })
});

export let ValidationRules = {
  active: {
    descriptionKey: 'models.i-i-s-union-fitness-club-card.validations.active.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  card_type: {
    descriptionKey: 'models.i-i-s-union-fitness-club-card.validations.card_type.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  date_act: {
    descriptionKey: 'models.i-i-s-union-fitness-club-card.validations.date_act.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  date_end: {
    descriptionKey: 'models.i-i-s-union-fitness-club-card.validations.date_end.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name_card: {
    descriptionKey: 'models.i-i-s-union-fitness-club-card.validations.name_card.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  user: {
    descriptionKey: 'models.i-i-s-union-fitness-club-card.validations.user.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cardType: {
    descriptionKey: 'models.i-i-s-union-fitness-club-card.validations.cardType.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};
