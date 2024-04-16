import { Markdown } from 'alem';

const Environment = () => {
   const mdContent = Buffer.from(`IyBFbnZpcm9ubWVudAoKQ3JlYXRlIGEgYC5lbnZgIGZpbGUgdG8gc2V0IHVwIHRoZSBwcm9qZWN0J3MgZW52aXJvbm1lbnQgYW5kIG90aGVyIHZhcnMuCgoqKmRldmVsb3BtZW50OioqIGFkZCBgTk9ERV9FTlY9ZGV2ZWxvcG1lbnRgIHRvIHlvdXIgYC5lbnZgIGZpbGUuIFRoaXMgd2lsbCBzZXQgdGhlIHByb2plY3QgZW52IGFzIGBkZXZlbG9wbWVudGAuCgpUaGUgYWJzZW5jZSBvZiB0aGUgYC5lbnZgIGZpbGUgbWVhbnMgdGhhdCBgTk9ERV9FTlY9cHJvZHVjdGlvbmAuCg==`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default Environment;
