"use client";

import { useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";
import { getSiteUrl } from "@/src/lib/siteUrl";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  async function onGoogleLogin() {
    setError(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${getSiteUrl()}/auth/callback`,
      },
    });

    if (error) setError(error.message);
  }

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ width: 320, padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <h1 style={{ margin: 0, fontSize: 18 }}>Sign in</h1>
        <p style={{ marginTop: 8, color: "#555" }}>Use your Google account.</p>

        <button
          onClick={onGoogleLogin}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Continue with Google
        </button>

        {error && <p style={{ marginTop: 12, color: "crimson" }}>{error}</p>}
      </div>
    </main>
  );
}