import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  duration: DS.attr('string'),
  hall: DS.attr('string'),
  instr: DS.attr('string'),
  name_pr: DS.attr('string'),
  type_prog: DS.attr('string')
});

export let ValidationRules = {
  duration: {
    descriptionKey: 'models.i-i-s-union-fitness-group-program.validations.duration.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  hall: {
    descriptionKey: 'models.i-i-s-union-fitness-group-program.validations.hall.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  instr: {
    descriptionKey: 'models.i-i-s-union-fitness-group-program.validations.instr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name_pr: {
    descriptionKey: 'models.i-i-s-union-fitness-group-program.validations.name_pr.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  type_prog: {
    descriptionKey: 'models.i-i-s-union-fitness-group-program.validations.type_prog.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
