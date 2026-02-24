import { PropsPlayground } from '../PropsPlayground';
import { badgeConfig } from '../propDefinitions';
import { Badge } from '../../design-system/Badge';

export function BadgePlayground() {
  return <PropsPlayground config={badgeConfig} renderComponent={(props) => <Badge {...props} />} />;
}
