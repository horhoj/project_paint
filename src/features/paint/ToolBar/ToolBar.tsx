import { FC } from 'react';
import { ToolTypeName } from '../types';
import styles from './ToolBar.module.scss';

interface ToolBarProps {
  setTool: (toolType: ToolTypeName) => void;
}

export const ToolBar: FC<ToolBarProps> = ({ setTool }) => {
  return (
    <div className={styles.wrap}>
      <button className={styles.toolButton} onClick={() => setTool('brush')}>
        brush
      </button>

      <button className={styles.toolButton} onClick={() => setTool('eraser')}>
        eraser
      </button>

      <button className={styles.toolButton} onClick={() => setTool('circle')}>
        circle
      </button>

      <button className={styles.toolButton} onClick={() => setTool('line')}>
        line
      </button>

      <button className={styles.toolButton} onClick={() => setTool('rect')}>
        rect
      </button>
    </div>
  );
};
