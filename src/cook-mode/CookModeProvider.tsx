import { PropsWithChildren, useEffect, useRef, useState } from "react";

import CookModeContext from "./CookModeContext";

interface WakeLockSentinelLike {
  addEventListener?: (type: "release", listener: () => void) => void;
  release: () => Promise<void>;
  removeEventListener?: (type: "release", listener: () => void) => void;
}

interface WakeLockNavigator extends Navigator {
  wakeLock?: {
    request: (type: "screen") => Promise<WakeLockSentinelLike>;
  };
}

function CookModeProvider({ children }: PropsWithChildren<{}>) {
  const [isCookModeEnabled, setCookModeEnabled] = useState(false);
  const sentinelRef = useRef<WakeLockSentinelLike | null>(null);

  const isSupported =
    typeof navigator !== "undefined" &&
    Boolean((navigator as WakeLockNavigator).wakeLock);

  useEffect(() => {
    if (!isSupported) {
      return;
    }

    let isDisposed = false;

    function handleRelease() {
      sentinelRef.current = null;
    }

    async function syncWakeLock() {
      if (!isCookModeEnabled) {
        if (sentinelRef.current) {
          sentinelRef.current.removeEventListener?.("release", handleRelease);
          await sentinelRef.current.release().catch(() => undefined);
          sentinelRef.current = null;
        }

        return;
      }

      if (document.visibilityState !== "visible" || sentinelRef.current) {
        return;
      }

      try {
        const wakeLock = (navigator as WakeLockNavigator).wakeLock;

        if (!wakeLock) {
          return;
        }

        const sentinel = await wakeLock.request("screen");

        if (isDisposed) {
          await sentinel.release().catch(() => undefined);
          return;
        }

        sentinel.addEventListener?.("release", handleRelease);
        sentinelRef.current = sentinel;
      } catch (_error) {
        if (!isDisposed) {
          setCookModeEnabled(false);
        }
      }
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        void syncWakeLock();
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    void syncWakeLock();

    return () => {
      isDisposed = true;
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (sentinelRef.current) {
        sentinelRef.current.removeEventListener?.("release", handleRelease);
        void sentinelRef.current.release().catch(() => undefined);
        sentinelRef.current = null;
      }
    };
  }, [isCookModeEnabled, isSupported]);

  return (
    <CookModeContext.Provider
      value={{ isCookModeEnabled, isSupported, setCookModeEnabled }}
    >
      {children}
    </CookModeContext.Provider>
  );
}

export default CookModeProvider;
