import { Serializer as ActionSerializer } from
  '../mixins/regenerated/serializers/i-i-s-union-fitness-action';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ActionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
