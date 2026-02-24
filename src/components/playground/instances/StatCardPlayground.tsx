import { PropsPlayground } from '../PropsPlayground';
import { statCardConfig } from '../propDefinitions';
import { StatCard } from '../../design-system/StatCard';

export function StatCardPlayground() {
  return <PropsPlayground config={statCardConfig} renderComponent={(props) => <StatCard {...props} />} />;
}
