import { PropsPlayground } from '../PropsPlayground';
import { headerConfig } from '../propDefinitions';
import { Header } from '../../design-system/Header';

export function HeaderPlayground() {
  return <PropsPlayground config={headerConfig} renderComponent={(props) => <Header {...props} />} />;
}
