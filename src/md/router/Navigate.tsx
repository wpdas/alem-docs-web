import { Markdown } from 'alem';

const Navigate = () => {
   const mdContent = Buffer.from(`IyBOYXZpZ2F0ZQoKVGhpcyBmZWF0dXJlIG1ha2VzIGl0IHBvc3NpYmxlIHRvIHByb2dyYW1tYXRpY2FsbHkgbmF2aWdhdGUgdG8gYXZhaWxhYmxlIHJvdXRlcy4gVGhlIFVSTCB3aWxsIG5vdCBiZSBhZmZlY3RlZCEKCkl0IHNob3VsZCBiZSB1c2VkIHdpdGggYFJvdXRlcmAuCgpgYGB0c3gKaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICJhbGVtIjsKCmV4cG9ydCBjb25zdCBTb21lQ29tcG9uZW50ID0gKCkgPT4gewogIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4gewogICAgbmF2aWdhdGUoInByb2ZpbGUiKTsKICB9OwoKICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0+R28gdG8gUHJvZmlsZTwvYnV0dG9uPjsKfTsKYGBgCg==`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default Navigate;
