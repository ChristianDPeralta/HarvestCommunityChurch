'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const STORAGE_KEY = 'iamfoundationAdminAuth';
const COOKIE_NAME = 'iamfoundationAdminAuth';

export interface SignedAdminState {
  username: string;
}

function getAuthCookieValue() {
  if (typeof document === 'undefined') {
    return null;
  }

  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setAuthCookie(value: string) {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(value)}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
}

function clearAuthCookie() {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie = `${COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
}

export function signInAdmin(username: string) {
  if (typeof window !== 'undefined') {
    const payload = JSON.stringify({ username });
    window.localStorage.setItem(STORAGE_KEY, payload);
    setAuthCookie(payload);
    window.dispatchEvent(new Event('iamfoundationAdminAuthChanged'));
  }
}

export function signOutAdmin() {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(STORAGE_KEY);
    clearAuthCookie();
    window.dispatchEvent(new Event('iamfoundationAdminAuthChanged'));
  }
}

export function getSignedAdmin(): SignedAdminState | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && typeof parsed.username === 'string') {
        return parsed as SignedAdminState;
      }
    } catch {
      if (raw === 'true') {
        return { username: 'admin' };
      }
    }
  }

  const cookieValue = getAuthCookieValue();
  if (cookieValue) {
    try {
      const parsed = JSON.parse(cookieValue);
      if (parsed && typeof parsed === 'object' && typeof parsed.username === 'string') {
        return parsed as SignedAdminState;
      }
    } catch {
      if (cookieValue === 'true') {
        return { username: 'admin' };
      }
    }
  }

  return null;
}

export function isAdminSignedIn() {
  return !!getSignedAdmin();
}

export function getAdminUsername() {
  return getSignedAdmin()?.username ?? null;
}

export default function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const syncAuthState = () => {
      const signedAdmin = getSignedAdmin();

      if (signedAdmin) {
        setIsAuthorized(true);
        return;
      }

      setIsAuthorized(false);
      router.replace('/admin/login');
    };

    syncAuthState();
    window.addEventListener('iamfoundationAdminAuthChanged', syncAuthState);

    return () => {
      window.removeEventListener('iamfoundationAdminAuthChanged', syncAuthState);
    };
  }, [router]);

  if (isAuthorized === null) {
    return (
      <div className="min-h-[320px] flex items-center justify-center">
        <p className="text-slate-700">Checking admin access…</p>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
}
