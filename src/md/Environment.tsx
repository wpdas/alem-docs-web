import { Markdown } from 'alem';

const Environment = () => {
   const mdContent = Buffer.from(`IyBFbnZpcm9ubWVudAoKQ3JlYXRlIGEgYC5lbnZgIGZpbGUgdG8gc2V0IHVwIHRoZSBwcm9qZWN0J3MgZW52aXJvbm1lbnQgYW5kIG90aGVyIHZhcnMuCgoqKmUuZzoqKiBpZiB5b3UgYWRkIGBOT0RFX0VOVj1kZXZlbG9wbWVudGAgdG8geW91ciBgLmVudmAgZmlsZS4gVGhpcyB3aWxsIHNldCB0aGUgcHJvamVjdCBlbnYgYXMgYGRldmVsb3BtZW50YC4KClRoZSBhYnNlbmNlIG9mIHRoZSBgLmVudmAgZmlsZSBtZWFucyB0aGF0IGBOT0RFX0VOVj1wcm9kdWN0aW9uYC4KCllvdSBjYW4gdXNlIGBnZXRBbGVtRW52aXJvbm1lbnQoKWAgcHJvdmlkZWQgYnkgQWzDqW0gdG8gYWNjZXNzIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHZhbHVlLgo=`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default Environment;
