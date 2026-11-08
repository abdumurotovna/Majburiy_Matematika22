import React, { useRef, useState, useEffect } from 'react';
import { X, Eraser, PenTool, Trash2, Download, RotateCcw } from 'lucide-react';

interface ScratchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScratchpadModal: React.FC<ScratchpadModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState<string>('#1e293b');
  const [lineWidth, setLineWidth] = useState<number>(3);
  const [isEraser, setIsEraser] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Grid lines for math notebook feel
    drawGrid(ctx, rect.width, rect.height);
  }, [isOpen]);

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.save();
    ctx.strokeStyle = 'rgba(203, 213, 225, 0.4)'; // Slate 300
    ctx.lineWidth = 0.5;

    const step = 24;
    for (let x = 0; x < width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();
  };

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.strokeStyle = isEraser ? '#ffffff' : color;
    ctx.lineWidth = isEraser ? lineWidth * 4 : lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    drawGrid(ctx, rect.width, rect.height);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header Toolbar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 flex items-center justify-center text-sky-600 dark:text-sky-400">
              <PenTool className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Qoralama Daftari (Scratchpad)</h3>
              <p className="text-[11px] text-slate-500">Misollarni qo'lda hisoblab, chizib ko'rish uchun katakli doska.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Color buttons */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
              {[
                { name: 'Graphite', hex: '#1e293b' },
                { name: 'Sky Blue', hex: '#0284c7' },
                { name: 'Emerald', hex: '#059669' },
                { name: 'Ruby', hex: '#e11d48' },
              ].map((c) => (
                <button
                  key={c.hex}
                  onClick={() => {
                    setColor(c.hex);
                    setIsEraser(false);
                  }}
                  className={`w-5 h-5 rounded-full transition-transform ${
                    color === c.hex && !isEraser ? 'scale-125 ring-2 ring-offset-1 ring-slate-400' : 'opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>

            {/* Eraser */}
            <button
              onClick={() => setIsEraser(!isEraser)}
              className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1 ${
                isEraser
                  ? 'bg-amber-100 dark:bg-amber-900/50 border-amber-300 text-amber-900 dark:text-amber-200'
                  : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
              }`}
              title="O'chirg'ich"
            >
              <Eraser className="w-4 h-4" />
              <span className="hidden sm:inline">O'chirg'ich</span>
            </button>

            {/* Clear */}
            <button
              onClick={clearCanvas}
              className="p-2 bg-white dark:bg-slate-700 hover:bg-slate-100 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors flex items-center gap-1"
              title="Tozalash"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">Tozalash</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Canvas Body */}
        <div className="flex-1 relative bg-white touch-none cursor-crosshair">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-full block"
          />
        </div>
      </div>
    </div>
  );
};
