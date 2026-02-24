import { PropsPlayground } from '../PropsPlayground';
import { toggleConfig } from '../propDefinitions';
import { Toggle } from '../../design-system/Toggle';

export function TogglePlayground() {
  return <PropsPlayground config={toggleConfig} renderComponent={(props) => <Toggle {...props} />} />;
}
