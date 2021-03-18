import {Meta, Story} from '@storybook/react/types-6-0';
import MenuLoader from '../menu/MenuLoader';
import '../index.css'

export default {
    title: 'Example/MenuLoader',
    component: MenuLoader,
} as Meta;

const BaseTemplate: Story = props => <MenuLoader {...props}/>
export const Example = BaseTemplate.bind({});
