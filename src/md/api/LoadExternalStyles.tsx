import { Markdown } from 'alem';

const LoadExternalStyles = () => {
   const mdContent = Buffer.from(`IyMgTG9hZCBFeHRlcm5hbCBTdHlsZXMgLSBGb250cyAmIENTUwoKVXNlIHRoaXMgZmVhdHVyZSB0byBsb2FkIGV4dGVybmFsIGZvbnRzIGFuZCBjc3MgZmlsZXMgaW50byB5b3VyIGFwcGxpY2F0aW9uLiAoQWxlbSBzdXBwb3J0cyBsb2NhbCAuY3NzIGZpbGVzIHRvbywgc28geW91IGNhbiBqdXN0IGNyZWF0ZSB0aGVtIGZyb20gdGhlIHByb2plY3QncyByb290IGZvbGRlci4pCgpgbG9hZEV4dGVybmFsU3R5bGVzYCByZXR1cm5zIGEgYGJvb2xlYW5gIGluZm9ybWluZyB3aGV0aGVyIGFsbCBjc3MgZmlsZXMgaGF2ZSBhbHJlYWR5IGJlZW4gbG9hZGVkLgoKWW91IGNhbiB1c2UgYW55IGZvbnRzIGxpa2UgR29vZ2xlIEZvbnRzIG9yIENETiBGb250cy4KCllvdSBtdXN0IHNwZWNpZnkgYGZvbnQtZmFtaWx5YCBpbiB0aGUgYXBwbGljYXRpb24ncyBzdHlsZXMuCgpgYGB0c3gKaW1wb3J0IHsgbG9hZEV4dGVybmFsU3R5bGVzIH0gZnJvbSAiYWxlbSI7Cgpjb25zdCBBcHAgPSAoKSA9PiB7CiAgY29uc3Qgc3R5bGVzTG9hZGVkID0gbG9hZEV4dGVybmFsU3R5bGVzKFsKICAgICJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcCIsCiAgICAiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2NvZGVtaXJyb3IvY29kZW1pcnJvcjUvbGliL2NvZGVtaXJyb3IuY3NzIiwKICBdKTsKCiAgaWYgKCFzdHlsZXNMb2FkZWQpIHsKICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjsKICB9CgogIHJldHVybiA8cD5NeSBOaWNlIENvbnRlbnQ8L3A+Owp9OwoKZXhwb3J0IGRlZmF1bHQgQXBwOwpgYGAK`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default LoadExternalStyles;
