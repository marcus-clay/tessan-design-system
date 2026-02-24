import { PropsPlayground } from '../PropsPlayground';
import { bottomNavConfig } from '../propDefinitions';
import { BottomNav } from '../../design-system/BottomNav';

export function BottomNavPlayground() {
  return <PropsPlayground config={bottomNavConfig} renderComponent={(props) => <BottomNav {...props} />} />;
}
