export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-zinc-800 border-t-primary rounded-full animate-spin" />
        <span className="text-zinc-600 text-xs font-medium tracking-[0.2em] uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}
