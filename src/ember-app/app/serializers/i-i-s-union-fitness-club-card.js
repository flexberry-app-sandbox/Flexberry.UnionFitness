import { Serializer as ClubCardSerializer } from
  '../mixins/regenerated/serializers/i-i-s-union-fitness-club-card';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ClubCardSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
