import { useEffect, useState } from "react";
import { X, RefreshCw, ImagePlus } from "lucide-react";

const MAX_IMAGES = 4;

interface MultiImageUploadProps {
  images: (File | null)[];
  onChange: (images: (File | null)[]) => void;
  error?: string;
}

export default function MultiImageUpload({
  images,
  onChange,
  error,
}: MultiImageUploadProps) {
  function handleSelect(index: number, file: File | null) {
    const next = [...images];
    next[index] = file;
    onChange(next);
  }

  return (
    <div>
      <label className="text-sm font-medium text-ink block mb-1.5">
        Product images
      </label>
      <p className="text-xs text-ink-2 mb-3">
        Add up to {MAX_IMAGES} images. The first image is what buyers see on the
        product card — pick your best shot for it.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Array.from({ length: MAX_IMAGES }).map((_, index) => (
          <ImageSlot
            key={index}
            index={index}
            file={images[index]}
            onSelect={(file) => handleSelect(index, file)}
            onRemove={() => handleSelect(index, null)}
          />
        ))}
      </div>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}

function ImageSlot({
  index,
  file,
  onSelect,
  onRemove,
}: {
  index: number;
  file: File | null;
  onSelect: (file: File | null) => void;
  onRemove: () => void;
}) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    // Revoke the URL when this file changes again or the component
    // unmounts — prevents leaking blob URLs on every unrelated re-render.
    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <div className="relative">
      {index === 0 && (
        <span className="absolute -top-2 -left-2 z-10 bg-forest text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
          Cover
        </span>
      )}

      {previewUrl ? (
        <div className="relative aspect-square rounded-xl overflow-hidden border border-line group">
          <img src={previewUrl} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <label
              className="p-2 bg-white rounded-full cursor-pointer"
              aria-label="Replace image"
            >
              <RefreshCw size={14} className="text-ink" />
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => onSelect(e.target.files?.[0] ?? null)}
                className="hidden"
              />
            </label>
            <button
              type="button"
              onClick={onRemove}
              className="p-2 bg-white rounded-full"
              aria-label="Remove image"
            >
              <X size={14} className="text-red-500" />
            </button>
          </div>
        </div>
      ) : (
        <label className="aspect-square flex flex-col items-center justify-center gap-1.5 border-2 border-dashed border-line rounded-xl cursor-pointer hover:border-forest hover:bg-forest-xxl/30 transition-colors">
          <ImagePlus size={20} className="text-ink-3" strokeWidth={1.5} />
          <span className="text-[11px] text-ink-3">Add image</span>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(e) => onSelect(e.target.files?.[0] ?? null)}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
}
