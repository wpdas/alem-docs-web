import { Markdown } from 'alem';

const UseParams = () => {
   const mdContent = Buffer.from(`IyBVc2UgUGFyYW1zCgpUaGlzIGhvb2sgcmV0dXJucyBhbGwgcGFyYW1ldGVycyBwcm92aWRlZCBieSB0aGUgVVJMLgoKYGBgdHMKLy8gaHR0cDovLzEyNy4wLjAuMTo4MDgwL2FsZW0tbGliLm5lYXIvd2lkZ2V0L0luZGV4P3Byb2plY3RJZD0xMjMKaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAiYWxlbSI7CgpleHBvcnQgY29uc3QgU29tZUNvbXBvbmVudCA9ICgpID0+IHsKICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTsKICBjb25zb2xlLmxvZyhwYXJhbXMpOyAvLyB7IHByb2plY3RJZDogIjEyMyIgfQoKICByZXR1cm4gIiI7Cn07CmBgYAo=`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default UseParams;
