import { Markdown } from 'alem';

const Navigate = () => {
   const mdContent = Buffer.from(`IyMgTmF2aWdhdGUKClRoaXMgZmVhdHVyZSBtYWtlcyBpdCBwb3NzaWJsZSB0byBwcm9ncmFtbWF0aWNhbGx5IG5hdmlnYXRlIHRvIGF2YWlsYWJsZSByb3V0ZXMuIFRoZSBVUkwgd2lsbCBub3QgYmUgYWZmZWN0ZWQhCgpgYGB0c3gKaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICJhbGVtIjsKCmV4cG9ydCBjb25zdCBTb21lQ29tcG9uZW50ID0gKCkgPT4gewogIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4gewogICAgbmF2aWdhdGUoInByb2ZpbGUiKTsKICB9OwoKICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0+R28gdG8gUHJvZmlsZTwvYnV0dG9uPjsKfTsKYGBgCg==`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default Navigate;
