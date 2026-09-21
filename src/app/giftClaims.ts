import {
  collection,
  doc,
  onSnapshot,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

const CLAIMS_COLLECTION = "giftClaims";

/** Mapa giftId -> true enquanto o presente já foi confirmado como comprado. */
export function useTakenGifts() {
  const [taken, setTaken] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, CLAIMS_COLLECTION), (snapshot) => {
      const next: Record<string, boolean> = {};
      snapshot.forEach((docSnap) => {
        next[docSnap.id] = true;
      });
      setTaken(next);
    });
    return unsubscribe;
  }, []);

  return taken;
}

/**
 * Tenta confirmar um presente como comprado. Falha com `alreadyTaken: true`
 * se outra pessoa confirmou esse mesmo presente antes.
 */
export async function confirmGiftTaken(
  giftId: string,
): Promise<{ ok: true } | { ok: false; alreadyTaken: boolean }> {
  const ref = doc(db, CLAIMS_COLLECTION, giftId);
  try {
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(ref);
      if (snap.exists()) {
        throw new Error("already-taken");
      }
      tx.set(ref, { takenAt: serverTimestamp() });
    });
    return { ok: true };
  } catch {
    return { ok: false, alreadyTaken: true };
  }
}
