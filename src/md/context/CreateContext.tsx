import { Markdown } from 'alem';

const CreateContext = () => {
   const mdContent = Buffer.from(`IyBDcmVhdGUgQ29udGV4dAoKU2ltaWxhciB0byBSZWFjdCdzIENvbnRleHQgQVBJLCBBbMOpbSBhbHNvIHByb3ZpZGVzIGEgd2F5IHRvIGNyZWF0ZSBjb250ZXh0cy4gQ29udGV4dHMgYXJlIHZlcnkgaGVscGZ1bCB3aGVuIHlvdSB3YW50IHRvIGNyZWF0ZSBhIHNwZWNpZmljIGRhdGEgc3RydWN0dXJlIGFuZCBwYXNzIGl0IHRvIGNoaWxkIGNvbXBvbmVudHMuCgpCeSBuYXR1cmUsIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBtYW5pcHVsYXRlIHByb3ZpZGVyIG9iamVjdHMgYXQgdGhlIHNhbWUgbGF5ZXIgaW4gd2hpY2ggdGhleSBhcmUgdXNlZCwgc2ltaWxhciB0byBSZWFjdC4KCioqU2ltcGxlIEV4YW1wbGU6KioKCmBgYHRzeAovLyBVc2VyUHJvdmlkZXIudHN4CgppbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAiYWxlbSI7CgovLyBJbnRlcmZhY2UKaW50ZXJmYWNlIFVzZXJDb250ZXh0UHJvcHMgewogIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjsKICBuYW1lOiBzdHJpbmc7Cn0KCmNvbnN0IFVzZXJQcm92aWRlciA9ICgpID0+IHsKICAvLyBDcmVhdGUgYSBwcm92aWRlciB1c2luZyBhIHJlZmVyZW5jZSBrZXkKICAvLyBzZXREZWZhdWx0RGF0YTogdXNlZCB0byBzZXQgaW5pdGlhbCBkYXRhCiAgLy8gdXBkYXRlRGF0YTogdXNlZCB0byB1cGRhdGUgZGF0YQogIGNvbnN0IHsgc2V0RGVmYXVsdERhdGEsIHVwZGF0ZURhdGEgfSA9IGNyZWF0ZUNvbnRleHQ8VXNlckNvbnRleHRQcm9wcz4oInVzZXItcHJvdmlkZXIiKTsKCiAgLy8gSW5pdGlhbCAvIGRlZmF1bHQgZGF0YQogIHNldERlZmF1bHREYXRhKHsKICAgIGlzQXV0aGVudGljYXRlZDogISFjb250ZXh0LmFjY291bnRJZCwKICAgIGFjY291bnRJZDogY29udGV4dC5hY2NvdW50SWQsCiAgfSk7Cn07CmBgYAoKIyBVc2UgQ29udGV4dAoKVXNpbmcgY29udGV4dCB3aXRoIGB1c2VDb250ZXh0YDoKCmBgYHRzeAppbXBvcnQgVXNlclByb3ZpZGVyIGZyb20gIi4vY29udGV4dHMvVXNlclByb3ZpZGVyIjsKCmNvbnN0IEFwcCA9ICgpID0+IHsKICBVc2VyUHJvdmlkZXIoKTsKCiAgcmV0dXJuIDxDaGlsZENvbXBvbmVudCAvPjsKfTsKYGBgCgpgYGB0c3gKaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gImFsZW0iOwoKaW50ZXJmYWNlIFVzZXJDb250ZXh0UHJvcHMgewogIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjsKICBuYW1lOiBzdHJpbmc7Cn0KCmNvbnN0IENoaWxkQ29tcG9uZW50ID0gKCkgPT4gewogIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0PFByb2plY3RzQ29udGV4dFByb3BzPigidXNlci1jb250ZXh0Iik7CgogIGNvbnNvbGUubG9nKHVzZXIpOwogIC8vIHsgaXNBdXRoZW50aWNhdGVkOiB0cnVlLCBhY2NvdW50SWQ6ICJ3ZW5kZXJzb25waXJlcy5uZWFyIiB9CgogIHJldHVybiAiIjsKfTsKYGBgCgoqKkhhbmRsaW5nIGFzeW5jIGRhdGE6KioKCmBgYHRzeAovLyBDYXJ0UHJvdmlkZXIudHN4CgppbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCBhc3luY0ZldGNoIH0gZnJvbSAiYWxlbSI7CgovLyBJbnRlcmZhY2UKaW50ZXJmYWNlIENhcnRDb250ZXh0UHJvcHMgewogIGl0ZW1zOiBzdHJpbmdbXTsKICByZWFkeTogYm9vbGVhbjsKCiAgLy8gYWN0aW9ucwogIGZldGNoQ2FydEl0ZW1zOiAoKSA9PiB2b2lkOwp9Cgpjb25zdCBDYXJ0UHJvdmlkZXIgPSAoKSA9PiB7CiAgY29uc3QgeyBzZXREZWZhdWx0RGF0YSwgdXBkYXRlRGF0YSB9ID0gY3JlYXRlQ29udGV4dDxDYXJ0Q29udGV4dFByb3BzPigiY2FydC1wcm92aWRlciIpOwoKICAvLyBJbml0aWFsIC8gZGVmYXVsdCBkYXRhCiAgc2V0RGVmYXVsdERhdGEoewogICAgaXRlbXM6IFtdLAogICAgcmVhZHk6IGZhbHNlLAoKICAgIGZldGNoQ2FydEl0ZW1zOiAoKSA9PiB7CiAgICAgIGNvbnN0IHNlbGYgPSB1c2VDb250ZXh0PENhcnRDb250ZXh0UHJvcHM+KCJjYXJ0LWNvbnRleHQiKTsKCiAgICAgIGlmICghc2VsZi5yZWFkeSkgewogICAgICAgIGFzeW5jRmV0Y2goImh0dHBzOi8vYXBpLmNvbS9jYXJ0L2l0ZW1zIikudGhlbigocmVzcG9uc2UpID0+IHsKICAgICAgICAgIC8vIFVwZGF0ZSBpdGVtcwogICAgICAgICAgdXBkYXRlRGF0YSh7CiAgICAgICAgICAgIGl0ZW1zOiByZXNwb25zZS5ib2R5LAogICAgICAgICAgICByZWFkeTogdHJ1ZSwKICAgICAgICAgIH0pOwogICAgICAgIH0pOwogICAgICB9CiAgICB9LAogIH0pOwoKICAvLyAoT3B0aW9uYWwpOiBBdXRvIGZldGNoIGNhcnQgaXRlbXMKICBjb25zdCBzZWxmID0gdXNlQ29udGV4dDxDYXJ0Q29udGV4dFByb3BzPigiY2FydC1jb250ZXh0Iik7CiAgaWYgKCFzZWxmLnJlYWR5KSB7CiAgICBzZWxmLmZldGNoQ2FydEl0ZW1zKCk7CiAgfQp9OwpgYGAKClRoZW4geW91IGNhbiB1c2UgdGhlIGRhdGE6CgpgYGB0c3gKaW1wb3J0IENhcnRQcm92aWRlciBmcm9tICIuL2NvbnRleHRzL0NhcnRQcm92aWRlciI7Cgpjb25zdCBBcHAgPSAoKSA9PiB7CiAgQ2FydFByb3ZpZGVyKCk7CgogIHJldHVybiA8Q2hpbGRDb21wb25lbnQgLz47Cn07CmBgYAoKYGBgdHN4CmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gImFsZW0iOwoKaW50ZXJmYWNlIENhcnRDb250ZXh0UHJvcHMgewogIGl0ZW1zOiBzdHJpbmdbXTsKICByZWFkeTogYm9vbGVhbjsKICBmZXRjaENhcnRJdGVtczogKCkgPT4gdm9pZDsKfQoKY29uc3QgQ2hpbGRDb21wb25lbnQgPSAoKSA9PiB7CiAgY29uc3QgY2FydCA9IHVzZUNvbnRleHQ8Q2FydENvbnRleHRQcm9wcz4oImNhcnQtY29udGV4dCIpOwoKICB1c2VFZmZlY3QoKCkgPT4gewogICAgLy8gRmV0Y2ggY2FydCBpdGVtcyAoaW4gY2FzZSB5b3UgYXJlIG5vdCB1c2luZyB0aGUgYXV0byBmZXRjaCkKICAgIGNhcnQuZmV0Y2hDYXJ0SXRlbXMoKTsKICB9LCBbXSk7CgogIGNvbnNvbGUubG9nKGNhcnQuaXRlbXMpOwogIC8vIFtpdGVtMSwgaXRlbTIsIGl0ZW0zLCAuLi5dCgogIHJldHVybiAiIjsKfTsKYGBgCg==`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default CreateContext;
