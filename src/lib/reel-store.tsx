import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Reel } from "./mock";

type ReelStore = {
  open: (reels: Reel[], startId: string) => void;
  close: () => void;
  reels: Reel[];
  currentId: string | null;
  isOpen: boolean;
};

const Ctx = createContext<ReelStore | null>(null);

export function ReelStoreProvider({ children }: { children: ReactNode }) {
  const [reels, setReels] = useState<Reel[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const open = useCallback((r: Reel[], id: string) => { setReels(r); setCurrentId(id); }, []);
  const close = useCallback(() => { setCurrentId(null); }, []);
  return (
    <Ctx.Provider value={{ open, close, reels, currentId, isOpen: currentId !== null }}>
      {children}
    </Ctx.Provider>
  );
}

export function useReelStore() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useReelStore requires provider");
  return v;
}
