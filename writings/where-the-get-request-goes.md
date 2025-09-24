# Where your GET goes for `https://ayaanjaved.in/`

**Summary:** This document captures the first leg of the journey when a browser sends a `GET /` to `https://ayaanjaved.in/`. We’ll stop right after the connection is established to the server that terminates TLS.

---

## DNS resolution

* `ayaanjaved.in` **A record →** `23.88.0.53` (confirmed locally via DNS lookup).
* `www.ayaanjaved.in` **CNAME →** `ayaanjaved.in` → **A record →** `23.88.0.53`.

## Who owns that IP?

* The address `23.88.0.53` is advertised on **Hetzner’s network (AS24940)**.
* **Reverse DNS** for the IP currently points to `linux11.hostguy.com` — this suggests a VPS/dedicated server or a reseller setup hosted with Hetzner.
* (Refs used when checking: *IPinfo* and other standard IP whois/RDNS tools.)

  * IPinfo
  * IPinfo

## Establishing the connection

1. The browser opens **TCP** to `23.88.0.53:443`.
2. It performs a **TLS handshake** (using **SNI** for `ayaanjaved.in`), negotiating the cipher suite and receiving the certificate for that hostname.
3. At this point, the browser is talking to **whatever is bound to port 443 on that machine**—typically a reverse proxy like **Nginx/Caddy/Apache**, or a **Node** process directly.

> We’ll pick up from here next time with: proxy handoff (if any) → Next.js runtime → middleware/file/route resolution.