import { ArrowSlide } from "@/components/routes/sandbox/arrow-slide";

export default function AnimationsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center w-[768px] h-[768px] bg-white rounded-2xl border border-dashed border-gray-400">
        <ArrowSlide />
      </div>
    </div>
  );
}