import { Markdown } from 'alem';

const GetLocation = () => {
   const mdContent = Buffer.from(`PCEtLSBUT0RPOiBNdWRhciBwYXJhIGdldExvY2F0aW9uKCkgLS0+CjwhLS0gRnVuY2lvbmEgYXBlbmFzIGRlbnRybyBkb3MgZmlsaG9zIGRvIFJvdXRlcyAtLT4KCjwhLS0gRG9jdW1lbnRhciBvIHNlZ3VpbnRlOiBQcmVmaXJhIHVzYXIgZ2V0TG9jYXRpb24oKS5wYXRobmFtZSA8cmVjdXJzbz4gcGFyYSBldml0YXIgY29uZmxpdG9zIGRlIG5vbWVzIGFww7NzIGEgY29tcGlsYcOnw6NvLiAtLT4KPCEtLSBvdSBlbWJydWxoZSBvIHJlY3Vyc28gY29tIGEgZnVuw6fDo28gbmEgcXVhbCBlbGUgZXN0w6Egc2VuZG8gdXNhZG8uIC0tPgo8IS0tIFRPRE86IFBlbnNhciBudW1hIGZvcm1hIGRlIGNvcnJpZ2lyIGlzc28gbmFzIHByb3hpbWFzIHZlcnPDtWVzIC0tPgoKIyMgR2V0IExvY2F0aW9uCgpUaGlzIGhvb2sgcmV0dXJucyB0aGUgY3VycmVudCBsb2NhdGlvbiBvYmplY3QuIEl0IGNhbiBiZSB1c2VmdWwgaWYgeW91J2QgbGlrZSB0byBwZXJmb3JtIHNvbWUgc2lkZSBlZmZlY3Qgd2hlbmV2ZXIgdGhlIGN1cnJlbnQgbG9jYXRpb24gY2hhbmdlcy4KClVzZSBgZ2V0TG9jYXRpb24oKS5pc1JvdXRlc1JlYWR5YCB0byBnZXQgdG8ga25vdyB3aGVuIHRoZSByb3V0ZXMgYXJlIHJlYWR5IHRvIGJlIGFjY2Vzc2VkLgoKYGBgdHMKLy8gaHR0cDovLzEyNy4wLjAuMTo4MDgwL2FsZW0tbGliLm5lYXIvd2lkZ2V0L0luZGV4P3BhdGg9cHJvZmlsZQppbXBvcnQgeyBnZXRMb2NhdGlvbiB9IGZyb20gImFsZW0iOwoKZXhwb3J0IGNvbnN0IFNvbWVDb21wb25lbnQgPSAoKSA9PiB7CiAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbigpOwogIGNvbnNvbGUubG9nKGxvY2F0aW9uKTsKICAvLyB7IGlzUm91dGVzUmVhZHk6IHRydWUsIHBhdGhuYW1lOiAicHJvZmlsZSIsIHJvdXRlczogWyJob21lIiwgInByb2ZpbGUiXSB9CgogIHJldHVybiAiIjsKfTsKYGBgCg==`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default GetLocation;
