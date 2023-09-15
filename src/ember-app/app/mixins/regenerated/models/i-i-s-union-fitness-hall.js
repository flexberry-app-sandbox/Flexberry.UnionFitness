import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  descr_h: DS.attr('string'),
  name_h: DS.attr('string')
});

export let ValidationRules = {
  descr_h: {
    descriptionKey: 'models.i-i-s-union-fitness-hall.validations.descr_h.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name_h: {
    descriptionKey: 'models.i-i-s-union-fitness-hall.validations.name_h.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
