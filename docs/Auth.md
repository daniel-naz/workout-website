
# Auth

Auth is handled using supabase.

Current supported auth providers

- [ ] Google
- [ ] Email
- [ ] Phone

Login provider example:

```ts
const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
        redirectTo: `${siteUrl}/auth/callback`,
    },
});
```

See more at [auth docs](https://supabase.com/docs/guides/auth).
