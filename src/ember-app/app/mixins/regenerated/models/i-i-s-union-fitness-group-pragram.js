import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  descr_pr: DS.attr('string'),
  duration: DS.attr('string'),
  hall: DS.attr('string'),
  instr: DS.attr('string'),
  name_pr: DS.attr('string'),
  type_pr: DS.attr('string')
});

export let ValidationRules = {
  descr_pr: {
    descriptionKey: 'models.i-i-s-union-fitness-group-pragram.validations.descr_pr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  duration: {
    descriptionKey: 'models.i-i-s-union-fitness-group-pragram.validations.duration.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  hall: {
    descriptionKey: 'models.i-i-s-union-fitness-group-pragram.validations.hall.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  instr: {
    descriptionKey: 'models.i-i-s-union-fitness-group-pragram.validations.instr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name_pr: {
    descriptionKey: 'models.i-i-s-union-fitness-group-pragram.validations.name_pr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  type_pr: {
    descriptionKey: 'models.i-i-s-union-fitness-group-pragram.validations.type_pr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
