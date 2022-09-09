import Brush from './tools/Brush';
import Eraser from './tools/Eraser';
import Circle from './tools/Circle';
import Line from './tools/Line';
import Rect from './tools/Rect';

export const TOOL_TYPE = {
  brush: Brush,
  eraser: Eraser,
  circle: Circle,
  line: Line,
  rect: Rect,
} as const;

export type ToolTypeName = keyof typeof TOOL_TYPE;

export type ToolInstanceType = InstanceType<typeof TOOL_TYPE[ToolTypeName]>;
