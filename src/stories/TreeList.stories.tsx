import {Meta, Story} from "@storybook/react/types-6-0";
import TreeList, {TreeListProps} from "../tree-list/TreeList";
import './TreeList.stories.css';

export default {
    title: 'Example/TreeList',
    component: TreeList,
} as Meta;

const Template: Story<TreeListProps> = (props) => <TreeList {...props}/>

export const BaseExample = Template.bind({});
BaseExample.args = {
    pages: [
        {
            id: "Install_and_set_up__product_",
            title: "Install and set up IntelliJ IDEA",
            url: "install-and-set-up-product.html",
            pages: [
                {
                    id: "Install_and_set_up__product_",
                    title: "Install and set up IntelliJ IDEA",
                    url: "install-and-set-up-product.html",
                },
                {
                    id: "Install_and_set_up__product_",
                    title: "Install and set up IntelliJ IDEA",
                    url: "install-and-set-up-product.html",
                    pages: [
                        {
                            id: "Accessibility",
                            title: "Accessibility",
                            url: "accessibility.html",
                        },
                        {
                            id: "Accessibility",
                            title: "Accessibility",
                            url: "accessibility.html",
                        }
                    ]
                },
                {
                    id: "Install_and_set_up__product_",
                    title: "Install and set up IntelliJ IDEA",
                    url: "install-and-set-up-product.html",
                },
            ]
        },
        {
            id: "Accessibility",
            title: "Accessibility",
            url: "accessibility.html",
        }
    ]
};
