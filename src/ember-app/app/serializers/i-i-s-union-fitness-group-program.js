import { Serializer as GroupProgramSerializer } from
  '../mixins/regenerated/serializers/i-i-s-union-fitness-group-program';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(GroupProgramSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
