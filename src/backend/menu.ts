export interface PageDto {
    id: string;
    title: string;
    pages?: string[];
    anchors?: string[]
}

export interface AnchorDto {
    id: string;
    title: string;
    anchor: string;
}

export interface MenuDto {
    entities: {
        pages: {
            [id: string]: PageDto;
        },
        anchors: {
            [id: string]: AnchorDto;
        },
    };
    topLevelIds: string[];
}

export async function loadMenu(): Promise<MenuDto> {
    // Добавим небольшую задержку, чтобы увидеть лоадер
    return new Promise<void>(resolve => setTimeout(() => resolve(), 1000))
        .then(() => fetch('/menu.data.json'))
        .then(res => res.json());
}
