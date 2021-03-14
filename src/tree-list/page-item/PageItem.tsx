import React, {SyntheticEvent, useState} from "react";
import {Page} from "../Page.interface";
import Arrow from "./Arrow.svg";
import styles from './PageItem.module.css';
import PageList from "../page-list/PageList";
import AnimateHeight from "react-animate-height";

const PageItem: React.FC<Page> = ({title, id, pages}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [height, setHeight] = useState<0 | 'auto'>(0);

    const open = (event: SyntheticEvent) => {
        event.stopPropagation();
        const newState = !isOpened;

        setHeight(newState ? 'auto' : 0);
        setIsOpened(!isOpened);
    };

    return (
        <div className={styles.page} key={id}>
            {pages && <img src={Arrow} className={`${styles.arrow} ${isOpened ? styles.rotated : ''}`} onClick={open} alt="open/close arrow"/>}
            <li className={styles.title} onClick={open}>{title}</li>
            <div className={styles.child}>
                <AnimateHeight
                    duration={500}
                    height={height}
                >
                    {pages && <PageList pages={pages}/>}
                </AnimateHeight>
            </div>
        </div>
    );
}

export default PageItem;
