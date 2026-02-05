
# Auth

Auth is handled using supabase.

Current supportes auth providers

- Google

Login provider example:

```ts
const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
        redirectTo: `${siteUrl}/auth/callback`,
    },
});
```
