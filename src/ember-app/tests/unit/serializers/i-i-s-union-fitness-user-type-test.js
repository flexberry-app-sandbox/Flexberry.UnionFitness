import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-union-fitness-user-type', 'Unit | Serializer | i-i-s-union-fitness-user-type', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-union-fitness-user-type',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
