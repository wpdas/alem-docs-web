import { Markdown } from 'alem';

const DeployingWithGithubActions = () => {
   const mdContent = Buffer.from(`IyBEZXBsb3lpbmcgQXBwIFdpdGggR2l0SHViIEFjdGlvbnMKClRvIGRlcGxveSB3aWRnZXRzIG9uIHB1c2ggdG8gYnJhbmNoLCBjcmVhdGUgYSBHaXRIdWIgQWN0aW9ucyB3b3JrZmxvdyBmaWxlIGluIHlvdXIgcmVwb3NpdG9yeS4KCioqTWFpbm5ldDoqKgoKRm9yIG1haW5uZXQgeW91IGNhbiBkbyBsaWtlIHNvOiBgLmdpdGh1Yi93b3JrZmxvd3MvZGVwbG95LW1haW5uZXQueW1sYCwgYW5kIGNvbmZpZ3VyZSBpdCBhcyBmb2xsb3dzOgoKYGBgeWFtbApuYW1lOiBEZXBsb3kgREFwcCB0byBNYWlubmV0CgpvbjoKICBwdXNoOgogICAgYnJhbmNoZXM6IFttYWluXSAjIGJyYW5jaCBmb3IgdHJpZ2dlcgoKam9iczoKICBkZXBsb3ktbWFpbm5ldDoKICAgIHVzZXM6IHdwZGFzL2FsZW0vLmdpdGh1Yi93b3JrZmxvd3MvZGVwbG95LnltbEBtYWluCiAgICB3aXRoOgogICAgICBzaWduZXItYWNjb3VudC1hZGRyZXNzOiA8U0lHTkVSX0FDQ09VTlRfSUQ+ICMgYWNjb3VudCB0byBzaWduIHdpdGggKHNob3VsZCBtYXRjaCBhbGVtLmNvbmZpZy5qc29uID4gYWNjb3VudCkKICAgICAgc2lnbmVyLXB1YmxpYy1rZXk6IDxTSUdORVJfUFVCTElDX0tFWT4KICAgIHNlY3JldHM6CiAgICAgIFNJR05FUl9QUklWQVRFX0tFWTogJHt7IHNlY3JldHMuU0lHTkVSX1BSSVZBVEVfS0VZIH19ICMgbXVzdCBiZSBpbnNpZGUgdGhlIGdpdGh1YiByZXBvIHNlY3JldHMKYGBgCgoqKlRlc3RuZXQ6KioKCkZvciB0ZXN0bmV0IHlvdSBjYW4gZG8gbGlrZSBzbzogYC5naXRodWIvd29ya2Zsb3dzL2RlcGxveS10ZXN0bmV0LnltbGAsIGFuZCBjb25maWd1cmUgaXQgYXMgZm9sbG93czoKCmBgYHlhbWwKbmFtZTogRGVwbG95IERBcHAgdG8gVGVzdG5ldAoKb246CiAgcHVzaDoKICAgIGJyYW5jaGVzOiBbc3RhZ2luZ10gIyBicmFuY2ggZm9yIHRyaWdnZXIKCmpvYnM6CiAgZGVwbG95LXRlc3RuZXQ6CiAgICB1c2VzOiB3cGRhcy9hbGVtLy5naXRodWIvd29ya2Zsb3dzL2RlcGxveS10ZXN0bmV0LnltbEBtYWluCiAgICB3aXRoOgogICAgICBzaWduZXItYWNjb3VudC1hZGRyZXNzOiA8U0lHTkVSX0FDQ09VTlRfSUQ+ICMgYWNjb3VudCB0byBzaWduIHdpdGggKHNob3VsZCBtYXRjaCBhbGVtLmNvbmZpZy5qc29uID4gYWNjb3VudCkKICAgICAgc2lnbmVyLXB1YmxpYy1rZXk6IDxTSUdORVJfUFVCTElDX0tFWT4KICAgIHNlY3JldHM6CiAgICAgIFNJR05FUl9QUklWQVRFX0tFWTogJHt7IHNlY3JldHMuVEVTVE5FVF9TSUdORVJfUFJJVkFURV9LRVkgfX0gIyBtdXN0IGJlIGluc2lkZSB0aGUgZ2l0aHViIHJlcG8gc2VjcmV0cwpgYGAKCkFkanVzdCB0aGUgd29ya2Zsb3cgYXMgbmVlZGVkLCB0aGVuIGNvbmZpZ3VyZSB5b3VyIHZhcmlhYmxlcyArIHNlY3JldHMgb24gR2l0SHViIFNldHRpbmdzIC0+IEFjdGlvbnMgLT4gc2VjcmV0cyAmIHZhcmlhYmxlcy4gVXNlIFtuZWFyLWNsaS1yc10oaHR0cHM6Ly9naXRodWIuY29tL25lYXIvbmVhci1jbGktcnMpIGZvciBnZW5lcmF0aW5nIGtleXBhaXJzLiBZb3UgY2FuIGFsc28gbG9naW4gdXNpbmcgTmVhciBDTEkgYW5kIGNoZWNrIHRoZSBrZXlwYWlycyBsb2NhbGx5LgoKIyMjIFdvcmtmbG93IElucHV0cwoKVGhlIHdvcmtmbG93IGFjY2VwdHMgdGhlIGZvbGxvd2luZyBpbnB1dHM6CgotIGBjbGktdmVyc2lvbmAgKG9wdGlvbmFsKTogVmVyc2lvbiBvZiBCT1MgQ0xJIHRvIHVzZSBmb3IgZGVwbG95bWVudCAoZS5nLiwgMC4zLjApLiBEZWZhdWx0OiAiMC4zLjYiCgotIGBkZXBsb3ktZW52YCAob3B0aW9uYWwpOiBFbnZpcm9ubWVudCB0byBkZXBsb3kgY29tcG9uZW50IGNvZGUgdG8gKGUuZy4sIG1haW5uZXQsIHRlc3RuZXQpLiBEZWZhdWx0OiAibWFpbm5ldCIKCi0gYHNpZ25lci1hY2NvdW50LWFkZHJlc3NgIChyZXF1aXJlZCk6IEFjY291bnQgdW5kZXIgd2hpY2ggY29tcG9uZW50IGNvZGUgc2hvdWxkIGJlIGRlcGxveWVkIGFuZCB1c2VkIGZvciBzaWduaW5nIHRoZSBkZXBsb3kgdHJhbnNhY3Rpb24uCgotIGBzaWduZXItcHVibGljLWtleWAgKHJlcXVpcmVkKTogUHVibGljIGtleSBmb3Igc2lnbmluZyB0cmFuc2FjdGlvbnMgaW4gdGhlIGZvcm1hdDogYGVkMjU1MTk6PHB1YmxpY19rZXk+YC4KCi0gYHNpZ25lci1wcml2YXRlLWtleWAgKHJlcXVpcmVkKTogUHJpdmF0ZSBrZXkgZm9yIHNpZ25pbmcgdHJhbnNhY3Rpb25zIGluIHRoZSBmb3JtYXQ6IGBlZDI1NTE5Ojxwcml2YXRlX2tleT5gLgo=`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default DeployingWithGithubActions;
