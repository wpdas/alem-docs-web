import { Markdown } from 'alem';

const IsDevelopment = () => {
   const mdContent = Buffer.from(`IyBpc0RldmVsb3BtZW50CgpVc2VmdWwgZmVhdHVyZSB0byBrbm93IGlmIHRoZSBlbnZpcm9ubWVudCBpcyBkZXZlbG9wbWVudCBvciBwcm9kdWN0aW9uLiBVc2UgYC5lbnZgIHRvIHNldCB0aGUgZW52aXJvbm1lbnQuCgpgYGBzaAojIHNldCB0aGUgcHJvamVjdCdzIGVudmlyb25tZW50Ck5PREVfRU5WPWRldmVsb3BtZW50CmBgYAoKYGBgdHN4CmltcG9ydCB7IGlzRGV2ZWxvcG1lbnQgfSBmcm9tICJhbGVtIjsKCmNvbnN0IGFuc3dlciA9IGlzRGV2ZWxvcG1lbnQgPyAiWWVwIiA6ICJOb3BlIjsKYGBgCg==`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default IsDevelopment;
