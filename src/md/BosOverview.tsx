import { Markdown } from 'alem';

const BosOverview = () => {
   const mdContent = Buffer.from(`IyBORUFSIEFQSXMgYW5kIENvbXBvbmVudHMKClRoZSBuYXRpdmUgTkVBUiBWTSAoQk9TKSByZXNvdXJjZXMgY29udGludWUgdG8gZnVuY3Rpb24uCgpHZXQgdG8ga25vdyBtb3JlIGFib3V0IHRoZSBCT1MgYnVpbHQgaW4gcmVzb3VyY2VzIGhlcmU6IFtodHRwczovL2RvY3MubmVhci5vcmcvYnVpbGQvbmVhci1jb21wb25lbnRzL2FuYXRvbXkvc3RhdGVdKGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9idWlsZC9uZWFyLWNvbXBvbmVudHMvYW5hdG9teS9zdGF0ZSkKCmBgYHRzeAovLyBOT1RFOiBUaGVzZSBhcmUganVzdCB0aGUgQk9TIGZlYXR1cmUgcmVmZXJlbmNlcyB0eXBlcwppbXBvcnQgewogIEZpbGVzLAogIEluZmluaXRlU2Nyb2xsLAogIElwZnNJbWFnZVVwbG9hZCwKICBNYXJrZG93biwKICBOZWFyLAogIE92ZXJsYXlUcmlnZ2VyLAogIFNvY2lhbCwKICBTdGF0ZSwKICBTdG9yYWdlLAogIFRvb2x0aXAsCiAgVHlwZUFoZWFkLAogIFZNLAogIFdpZGdldCwKICBhc3luY0ZldGNoLAogIGNsaXBib2FyZCwKICBjb250ZXh0LAogIGZldGNoLAogIHByb3BzLAogIHN0YXRlLAogIHVzZUNhY2hlLAogIHVzZUVmZmVjdCwKICB1c2VTdGF0ZSwKICB1c2VNZW1vLAogIHVzZUNhbGxiYWNrLAogIEJpZywKfSBmcm9tICJhbGVtIjsKCmV4cG9ydCBjb25zdCBDb21wb25lbnRDID0gKCkgPT4gewogIGNvbnNvbGUubG9nKHByb3BzKTsgLy8gd2lsbCBwcmludCB0aGUgd2lkZ2V0IHByb3BzCgogIHJldHVybiA8Q29tcG9uZW50QSBuYW1lPSJXZW5keiIgLz47Cn07CmBgYAo=`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default BosOverview;
