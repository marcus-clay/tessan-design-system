import { PropsPlayground } from '../PropsPlayground';
import { inputConfig } from '../propDefinitions';
import { Input } from '../../design-system/Input';

export function InputPlayground() {
  return <PropsPlayground config={inputConfig} renderComponent={(props) => <Input {...props} />} />;
}
