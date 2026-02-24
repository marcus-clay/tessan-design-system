import { PropsPlayground } from '../PropsPlayground';
import { listItemConfig } from '../propDefinitions';
import { ListItem } from '../../design-system/ListItem';

export function ListItemPlayground() {
  return <PropsPlayground config={listItemConfig} renderComponent={(props) => <ListItem {...props} />} />;
}
