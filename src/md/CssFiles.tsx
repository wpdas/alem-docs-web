import { Markdown } from 'alem';

const CssFiles = () => {
   const mdContent = Buffer.from(`IyBDU1MgRmlsZXMKCkR1cmluZyBjb21waWxhdGlvbiwgY3NzIGZpbGVzIGFyZSBtZXJnZWQgYW5kIGJlY29tZSBqdXN0IG9uZSwgc28gYmUgY2FyZWZ1bCBub3QgdG8gb3ZlcndyaXRlIGNlcnRhaW4gcmVzb3VyY2VzIHN1Y2ggYXMgY2xhc3Nlcy4gUHJlZmVyIHRvIHVzZSBgc3R5bGVkLWNvbXBvbmVudHNgIGFzIHRoaXMgdHlwZSBvZiBwcm9ibGVtIGlzIGF1dG9tYXRpY2FsbHkgY29ycmVjdGVkIGJ5IHRoZSBjb21waWxlci4KCioqY3NzIG1vZHVsZXMqKiBmZWF0dXJlIGlzIGJlaW5nIGRldmVsb3BlZCBhbmQgd2lsbCBiZSBhdmFpbGFibGUgaW4gdGhlIG5leHQgdmVyc2lvbnMuIFdoZW4gdGhpcyBpcyBkb25lLCB0aGUgY3NzIGZpbGVzIHdpbGwgbm8gbG9uZ2VyIGJlIG1lcmdlZCBpbiBvbmUuCgpBbMOpbSBjdXJyZW50bHkgc3VwcG9ydHMgVGFpbHdpbmQsIHlvdSBtaWdodCB3YW50IHRvIHVzZSBpdCBpbnN0ZWFkIG9mIHB1cmUgY3NzLgoKSWYgeW91IHdhbnQgdG8gY3JlYXRlIGEgbmV3IHByb2plY3QgdXNpbmcgVGFpbHdpbmQsIGdvIHRvIHRoZSBbSW5zdGFsbGF0aW9uXShodHRwczovL2FsZW0uZGV2Lz9wYXRoPWluc3RhbGxhdGlvbikgc2VjdGlvbi4gSWYgeW91IGFscmVhZHkgaGF2ZSBhIHByb2plY3QgaW4gcHJvZ3Jlc3MgYW5kIHdhbnQgdG8gY29uZmlndXJlIFRhaWx3aW5kIG9uIGl0LCB1cGRhdGUgQWzDqW0gaW4geW91ciBhcHBsaWNhdGlvbiB0byB1c2UgdmVyc2lvbiAxLjIuMCBvciBoaWdoZXIsIHRoZW4gZ28gdG8gdGhlIFtUYWlsd2luZCBTZXR1cF0oaHR0cHM6Ly9hbGVtLmRldi8/cGF0aD10YWlsd2luZCkgc2Vzc2lvbi4K`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default CssFiles;
