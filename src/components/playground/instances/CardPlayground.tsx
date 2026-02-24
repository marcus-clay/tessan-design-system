import { PropsPlayground } from '../PropsPlayground';
import { cardConfig } from '../propDefinitions';
import { Card } from '../../design-system/Card';

export function CardPlayground() {
  return <PropsPlayground config={cardConfig} renderComponent={(props) => <Card {...props} />} />;
}
