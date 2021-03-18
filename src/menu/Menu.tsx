import React, {useEffect, useState} from 'react';
import {AnchorDto, loadMenu, MenuDto, PageDto} from '../backend/menu';
import {Page} from '../tree-list/Page.interface';
import TreeList from '../tree-list/TreeList';
import MenuLoader from './MenuLoader';

function isPresent<T>(value?: T | null): value is T {
    return !!value;
}

function getPageIds(dto: AnchorDto | PageDto): string[] | undefined {
    if ('pages' in dto) {
        return dto.pages ?? [];
    }
}

function getMenuItemById(id: string, allData: MenuDto): PageDto | AnchorDto | undefined {
    return allData.entities.pages[id] || allData.entities.anchors[id]
}

function buildLevel(ids: string[], allData: MenuDto): Page[] {
    return ids.map(pagId => {
        const pageDto = getMenuItemById(pagId, allData);

        if (pageDto) {
            const pageIds = getPageIds(pageDto);

            return {
                id: pageDto.id,
                title: pageDto.title,
                pages: pageIds ? buildLevel(pageIds, allData) : undefined,
            }
        }

        return null;
    }).filter(isPresent);
}


function prepareMenuData(dto: MenuDto): Page[] {
    return buildLevel(dto.topLevelIds, dto);
}

export interface MenuProps {
    onSelect: (selectedItem: PageDto | AnchorDto) => void;
}

const Menu: React.FC<MenuProps> = ({onSelect}) => {
    const [menuData, setMenuData] = useState<MenuDto | null>(null);

    useEffect(() => {
        loadMenu().then(dto => setMenuData(dto));
    }, []);

    const sendSelectedItem = (itemId: string) => {
        const selected = menuData ? getMenuItemById(itemId, menuData) : undefined;

        if (selected) {
            onSelect(selected);
        }
    };

    return (
        <>
            {menuData && <TreeList pages={prepareMenuData(menuData)} onSelect={sendSelectedItem}/>}
            {!menuData && <MenuLoader />}
        </>
    );
}

export default Menu;
