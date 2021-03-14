import {Page} from "../Page.interface";
import React from "react";
import PageItem from "../page-item/PageItem";

export interface PageListProps {
    pages: Page[];
}

const PageList: React.FC<PageListProps> = ({pages}: PageListProps) => {
    return (
        <ul>
            {pages.map(page => <PageItem {...page} />)}
        </ul>
    );
}

export default PageList;
