"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabaseClient";

export default function AuthCallbackPage() {
  const router = useRouter();
  const [msg, setMsg] = useState("Finishing sign-in...");

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        setMsg(error.message);
        router.replace("/login");
        return;
      }

      if (data.session) router.replace("/");
      else router.replace("/login");
    })();
  }, [router]);

  return <p style={{ padding: 16 }}>{msg}</p>;
}