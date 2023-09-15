import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  descr_ut: DS.attr('string'),
  name_ut: DS.attr('string')
});

export let ValidationRules = {
  descr_ut: {
    descriptionKey: 'models.i-i-s-union-fitness-user-type.validations.descr_ut.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name_ut: {
    descriptionKey: 'models.i-i-s-union-fitness-user-type.validations.name_ut.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
