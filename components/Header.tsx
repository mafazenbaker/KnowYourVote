import { StarIcon } from "./icons";

export default function Header({ compact = false }: { compact?: boolean }) {
  return (
    <header className="bg-brand-navy text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span
            className="grid h-9 w-9 place-items-center rounded-lg bg-brand-red text-white"
            aria-hidden
          >
            <StarIcon className="h-5 w-5" />
          </span>
          <span className="text-xl font-bold tracking-tight">
            KnowYour<span className="text-brand-coral">Vote</span>
          </span>
        </div>
        {!compact && (
          <span className="hidden text-sm text-white/70 sm:block">
            Nonpartisan · November 2026 Election
          </span>
        )}
      </div>
    </header>
  );
}
