import { Serializer as ScheduleSerializer } from
  '../mixins/regenerated/serializers/i-i-s-union-fitness-schedule';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ScheduleSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
