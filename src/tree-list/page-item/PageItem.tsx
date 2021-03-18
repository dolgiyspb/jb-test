import React, {SyntheticEvent, useState} from "react";
import {Page} from "../Page.interface";
import Arrow from "./Arrow.svg";
import styles from './PageItem.module.css';
import AnimateHeight from "react-animate-height";

export interface PageItemProps {
    page: Page;
    level: number;
    highlighted?: boolean;
    onSelect: (selectedItemId: string) => void;
}

const levelMargin = 12;

const PageItem: React.FC<PageItemProps> = ({page: {title, id, pages}, level, highlighted, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState<0 | 'auto'>(0);
    const [isUserSelect, setIsUserSelect] = useState(false);

    const toggleOpenState = (event: SyntheticEvent) => {
        event.stopPropagation();
        const newState = !isOpen;

        setHeight(newState ? 'auto' : 0);
        setIsOpen(!isOpen);

        if (newState) {
            onSelect(id);
        }
    };

    const handleKeyboard = (event: SyntheticEvent<Element, KeyboardEvent>) => {
        if (['Space', 'Enter'].includes(event.nativeEvent.code)) {
            toggleOpenState(event);
        }
    }

    const shouldBeHighlighted = highlighted || isUserSelect;

    return (
        <>
            <li
                className={`${styles.title} ${shouldBeHighlighted ? styles.highlighted : ''} ${isUserSelect ? styles.selected : ''}`}
                style={{paddingLeft: level * levelMargin}}
                tabIndex={0}
                onClick={toggleOpenState}
                onKeyPress={handleKeyboard}
                onFocus={() => setIsUserSelect(true)}
                onBlur={() => setIsUserSelect(false)}
            >
                {pages && <img src={Arrow} className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`} alt="open/close arrow"/>}
                {title}
            </li>
            {pages && <AnimateHeight
                height={height}
                duration={500}
            >
                {
                    pages.map(page =>
                        <PageItem
                            page={page}
                            level={level + 1}
                            highlighted={shouldBeHighlighted}
                            onSelect={onSelect}
                            key={page.id}
                        />
                    )
                }
            </AnimateHeight>}
        </>
    );
}

export default PageItem;
