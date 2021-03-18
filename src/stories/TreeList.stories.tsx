import {Meta, Story} from "@storybook/react/types-6-0";
import TreeList, {TreeListProps} from "../tree-list/TreeList";
import './TreeList.stories.css';
import '../index.css'

export default {
    title: 'Example/TreeList',
    component: TreeList,
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const BaseTemplate: Story<TreeListProps> = (props) => <TreeList {...props}/>

export const Example = BaseTemplate.bind({});
Example.args = {
    pages: [
        {
            id: "Install_and_set_up__product_",
            title: "Install and set up IntelliJ IDEA",
            pages: [
                {
                    id: "Install_and_set_up__product_",
                    title: "Install and set up IntelliJ IDEA",
                },
                {
                    id: "Install_and_set_up__product_",
                    title: "Install and set up IntelliJ IDEA",
                    pages: [
                        {
                            id: "Accessibility",
                            title: "Accessibility",
                        },
                        {
                            id: "Accessibility",
                            title: "Accessibility",
                        }
                    ]
                },
                {
                    id: "Install_and_set_up__product_",
                    title: "Install and set up IntelliJ IDEA",
                },
            ]
        },
        {
            id: "Accessibility",
            title: "Accessibility",
        }
    ],
};
