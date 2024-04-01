import { Markdown } from 'alem';

const Navigate = () => {
   const mdContent = Buffer.from(`IyMgTmF2aWdhdGUKClRoaXMgZmVhdHVyZSBtYWtlcyBpdCBwb3NzaWJsZSB0byBwcm9ncmFtbWF0aWNhbGx5IG5hdmlnYXRlIHRvIGF2YWlsYWJsZSByb3V0ZXMuIFRoZSBVUkwgd2lsbCBub3QgYmUgYWZmZWN0ZWQhCgpJdCBzaG91bGQgYmUgdXNlZCB3aXRoIGBSb3V0ZXJgLgoKYGBgdHN4CmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAiYWxlbSI7CgpleHBvcnQgY29uc3QgU29tZUNvbXBvbmVudCA9ICgpID0+IHsKICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpID0+IHsKICAgIG5hdmlnYXRlKCJwcm9maWxlIik7CiAgfTsKCiAgcmV0dXJuIDxidXR0b24gb25DbGljaz17b25DbGlja0hhbmRsZXJ9PkdvIHRvIFByb2ZpbGU8L2J1dHRvbj47Cn07CmBgYAo=`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default Navigate;
