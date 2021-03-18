import React from 'react';
import {Page} from "./Page.interface";
import PageItem from './page-item/PageItem';

export interface TreeListProps {
    pages: Page[];
    onSelect: (selectedItemId: string) => void;
}

const TreeList: React.FC<TreeListProps> = ({pages, onSelect}: TreeListProps) => {
    return (
        <nav>
            <ul>
                {pages.map(page => <PageItem page={page} level={0} onSelect={onSelect} key={page.id}/>)}
            </ul>
        </nav>
    );
}

export default TreeList;
