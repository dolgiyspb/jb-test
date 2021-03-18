import {Meta, Story} from '@storybook/react/types-6-0';
import Menu, {MenuProps} from '../menu/Menu';
import '../index.css'

export default {
    title: 'Example/Menu',
    component: Menu,
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const BaseTemplate: Story<MenuProps> = props => <Menu {...props}/>
export const Example = BaseTemplate.bind({});

