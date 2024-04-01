import { Markdown } from 'alem';

const IsDevelopment = () => {
   const mdContent = Buffer.from(`IyMgaXNEZXZlbG9wbWVudAoKVXNlZnVsIGZlYXR1cmUgdG8ga25vdyBpZiB0aGUgZW52aXJvbm1lbnQgaXMgZGV2ZWxvcG1lbnQgb3IgcHJvZHVjdGlvbi4KCmBgYHRzeAppbXBvcnQgeyBpc0RldmVsb3BtZW50IH0gZnJvbSAiYWxlbSI7Cgpjb25zdCBhbnN3ZXIgPSBpc0RldmVsb3BtZW50ID8gIlllcCIgOiAiTm9wZSI7CmBgYAo=`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default IsDevelopment;
