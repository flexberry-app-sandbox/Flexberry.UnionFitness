import { Serializer as UserTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-union-fitness-user-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(UserTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
