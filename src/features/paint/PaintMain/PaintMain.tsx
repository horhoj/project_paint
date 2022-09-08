import { FC, useEffect, useRef, useState } from 'react';
import Brush from '../tools/Brush';
import { TOOL_TYPE, ToolType, ToolTypeName } from '../types';
import { ToolBar } from '../ToolBar';
import styles from './PaintMain.module.scss';

export const PaintMain: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useState<ToolType | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const brush = new Brush(canvasRef.current);
      setTool(brush);
    }
  }, []);

  const handleSetTool = (toolType: ToolTypeName) => {
    if (!canvasRef.current) {
      return;
    }
    const tool = new TOOL_TYPE[toolType](canvasRef.current);
    if (toolType === 'brush') {
      tool.strokeColor = '#000000';
      tool.fillColor = '#000000';
    }
    if (toolType === 'eraser') {
      tool.strokeColor = '#FFFFFF';
      tool.fillColor = '#FFFFFF1';
    }

    if (toolType === 'circle') {
      tool.strokeColor = '#000000';
      tool.fillColor = '#000000';
    }

    setTool(tool);
  };

  return (
    <div className={styles.wrap}>
      <div>
        <ToolBar setTool={handleSetTool} />
      </div>
      <div>
        <canvas
          className={styles.canvas}
          ref={canvasRef}
          width={800}
          height={600}
          style={{ backgroundColor: 'white' }}
        />
      </div>
    </div>
  );
};
