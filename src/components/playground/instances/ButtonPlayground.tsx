import { PropsPlayground } from '../PropsPlayground';
import { buttonConfig } from '../propDefinitions';
import { Button } from '../../design-system/Button';

export function ButtonPlayground() {
  return <PropsPlayground config={buttonConfig} renderComponent={(props) => <Button {...props} />} />;
}
