import { RefreshCw } from "lucide-react";


interface SyncButtonProps {
  onSync: () => void;
  loading: boolean;
}


export default function SyncButton({
  onSync,
  loading
}: SyncButtonProps) {

  return (
    <button
      onClick={onSync}
      disabled={loading}
      className="
        flex items-center gap-2
        rounded-xl
        bg-blue-600
        px-5 py-3
        font-semibold
        text-white
        hover:bg-blue-700
        disabled:opacity-50
      ">

      <RefreshCw
        size={18}
        className={loading ? "animate-spin" : ""}
      />

      {loading ? "Syncing..." : "Sync Logs"}

    </button>
  );
}