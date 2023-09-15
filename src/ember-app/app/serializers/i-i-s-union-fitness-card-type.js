import { Serializer as CardTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-union-fitness-card-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CardTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
