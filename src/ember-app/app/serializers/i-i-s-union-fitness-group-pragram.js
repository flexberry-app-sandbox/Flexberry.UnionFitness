import { Serializer as GroupPragramSerializer } from
  '../mixins/regenerated/serializers/i-i-s-union-fitness-group-pragram';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(GroupPragramSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
