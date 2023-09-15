import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-union-fitness-group-program', 'Unit | Model | i-i-s-union-fitness-group-program', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-union-fitness-action',
    'model:i-i-s-union-fitness-card-type',
    'model:i-i-s-union-fitness-club-card',
    'model:i-i-s-union-fitness-direction',
    'model:i-i-s-union-fitness-group-pragram',
    'model:i-i-s-union-fitness-group-program',
    'model:i-i-s-union-fitness-hall',
    'model:i-i-s-union-fitness-schedule',
    'model:i-i-s-union-fitness-user-type',
    'model:i-i-s-union-fitness-user',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
