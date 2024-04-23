import { Markdown } from 'alem';

const GetAlemEnvironment = () => {
   const mdContent = Buffer.from(`IyBHZXQgQWxlbSBFbnZpcm9ubWVudAoKVXNlZnVsIGZlYXR1cmUgdG8gZ2V0IHRoZSBjdXJyZW50IGVudmlyb25tZW50IHZhbHVlLiBVc2UgYC5lbnZgIHRvIHNldCB0aGUgZW52aXJvbm1lbnQuCgpgYGBzaAojIHNldCB0aGUgcHJvamVjdCdzIGVudmlyb25tZW50Ck5PREVfRU5WPXN0YWdpbmcKYGBgCgpgYGB0c3gKaW1wb3J0IHsgZ2V0QWxlbUVudmlyb25tZW50IH0gZnJvbSAiYWxlbSI7Cgpjb25zb2xlLmxvZyhnZXRBbGVtRW52aXJvbm1lbnQoKSk7IC8vIHN0YWdpbmcKYGBgCg==`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default GetAlemEnvironment;
