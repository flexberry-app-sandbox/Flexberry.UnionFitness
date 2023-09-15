import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  club_card: DS.attr('string'),
  date_active: DS.attr('string'),
  date_birth: DS.attr('string'),
  date_reg: DS.attr('string'),
  email: DS.attr('string'),
  name_cl: DS.attr('string'),
  passport: DS.attr('string'),
  phone_cl: DS.attr('string')
});

export let ValidationRules = {
  club_card: {
    descriptionKey: 'models.i-i-s-union-fitness-user.validations.club_card.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  date_active: {
    descriptionKey: 'models.i-i-s-union-fitness-user.validations.date_active.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  date_birth: {
    descriptionKey: 'models.i-i-s-union-fitness-user.validations.date_birth.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  date_reg: {
    descriptionKey: 'models.i-i-s-union-fitness-user.validations.date_reg.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  email: {
    descriptionKey: 'models.i-i-s-union-fitness-user.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name_cl: {
    descriptionKey: 'models.i-i-s-union-fitness-user.validations.name_cl.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  passport: {
    descriptionKey: 'models.i-i-s-union-fitness-user.validations.passport.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phone_cl: {
    descriptionKey: 'models.i-i-s-union-fitness-user.validations.phone_cl.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
