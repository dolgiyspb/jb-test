import React from 'react';
import {Page} from "./Page.interface";
import PageList from "./page-list/PageList";

export interface TreeListProps {
    pages: Page[];
}

const TreeList: React.FC<TreeListProps> = ({pages}: TreeListProps) => {
    return (
        <nav>
            <PageList pages={pages}/>
        </nav>
    );
}

export default TreeList;
