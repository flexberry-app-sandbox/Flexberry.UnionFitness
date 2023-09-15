import { Serializer as DirectionSerializer } from
  '../mixins/regenerated/serializers/i-i-s-union-fitness-direction';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DirectionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
