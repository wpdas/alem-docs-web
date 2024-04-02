import { Markdown } from 'alem';

const UseRoutes = () => {
   const mdContent = Buffer.from(`IyBVc2UgUm91dGVzCgpIb29rIHVzZWQgdG8gcmV0dXJuIHRoZSBjdXJyZW50IGRhdGEgdXRpbGl6ZWQgYnkgdGhlIGBSb3V0ZXJgIGNvbXBvbmVudC4KCmBgYHRzCmltcG9ydCB7IHVzZVJvdXRlcyB9IGZyb20gImFsZW0iOwoKZXhwb3J0IGNvbnN0IFNvbWVDb21wb25lbnQgPSAoKSA9PiB7CiAgY29uc3Qgcm91dGVzUHJvcHMgPSB1c2VSb3V0ZXMoKTsKICBjb25zb2xlLmxvZyhyb3V0ZXNQcm9wcyk7CiAgLy8geyByb3V0ZXNJbml0aWFsaXplZDogdHJ1ZSwgYWN0aXZlUm91dGU6ICdob21lJywgcm91dGVQYXJhbWV0ZXJOYW1lOiAncGF0aCcsIHJvdXRlczogWydob21lJywgJ3Byb2ZpbGUnXSwgcm91dGVUeXBlOiAnQ29udGVudEJhc2VkJyB9CgogIHJldHVybiAiIjsKfTsKYGBgCg==`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default UseRoutes;
