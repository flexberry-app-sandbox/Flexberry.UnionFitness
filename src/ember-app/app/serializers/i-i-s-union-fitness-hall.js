import { Serializer as HallSerializer } from
  '../mixins/regenerated/serializers/i-i-s-union-fitness-hall';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(HallSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
