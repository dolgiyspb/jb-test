import React from 'react';
import styles from './MenuLoader.module.css';

const blocksCount = 2;
const subBlocksCount = 3;
const range = (count: number) => [...Array(count).keys()];

const MenuLoader: React.FC = () => {
    return (
        <>
            {range(blocksCount).map(() =>
                <>
                    <div className={styles.skeleton}></div>
                    {range(subBlocksCount).map(() => <div className={`${styles.skeleton} ${styles.subBlock}`}></div>)}
                </>
            )
            }
        </>
    );
}

export default MenuLoader;
