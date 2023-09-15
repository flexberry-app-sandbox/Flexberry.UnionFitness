import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  descr_dir: DS.attr('string'),
  name_dir: DS.attr('string')
});

export let ValidationRules = {
  descr_dir: {
    descriptionKey: 'models.i-i-s-union-fitness-direction.validations.descr_dir.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name_dir: {
    descriptionKey: 'models.i-i-s-union-fitness-direction.validations.name_dir.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
