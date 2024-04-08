import { Markdown } from 'alem';

const CssFiles = () => {
   const mdContent = Buffer.from(`IyBDU1MgRmlsZXMKCkR1cmluZyBjb21waWxhdGlvbiwgY3NzIGZpbGVzIGFyZSBtZXJnZWQgYW5kIGJlY29tZSBqdXN0IG9uZSwgc28gYmUgY2FyZWZ1bCBub3QgdG8gb3ZlcndyaXRlIGNlcnRhaW4gcmVzb3VyY2VzIHN1Y2ggYXMgY2xhc3Nlcy4gUHJlZmVyIHRvIHVzZSBgc3R5bGVkLWNvbXBvbmVudHNgIGFzIHRoaXMgdHlwZSBvZiBwcm9ibGVtIGlzIGF1dG9tYXRpY2FsbHkgY29ycmVjdGVkIGJ5IHRoZSBjb21waWxlci4K`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default CssFiles;
