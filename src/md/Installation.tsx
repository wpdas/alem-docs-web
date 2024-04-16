import { Markdown } from 'alem';

const Installation = () => {
   const mdContent = Buffer.from(`IyBJbnN0YWxsYXRpb24KCioqWW914oCZbGwgbmVlZCB0byBoYXZlIE5vZGUgMTguMC4wIG9yIGxhdGVyIHZlcnNpb24gb24geW91ciBsb2NhbCBkZXZlbG9wbWVudCBtYWNoaW5lKiouIFlvdSBjYW4gdXNlIFtudm1dKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGlvbml4L252bSNpbnN0YWxsYXRpb24pIChtYWNPUy9MaW51eCkgb3IgW252bS13aW5kb3dzXShodHRwczovL2dpdGh1Yi5jb20vY29yZXlidXRsZXIvbnZtLXdpbmRvd3Mjbm9kZS12ZXJzaW9uLW1hbmFnZXItbnZtLWZvci13aW5kb3dzKSB0byBzd2l0Y2ggTm9kZSB2ZXJzaW9ucyBiZXR3ZWVuIGRpZmZlcmVudCBwcm9qZWN0cy4KCkFsc28sIG1ha2Ugc3VyZSB5b3UgaGF2ZSAqKkdpdCoqIGluc3RhbGxlZCBvbiB5b3VyIG1hY2hpbmUuCgpVc2UgdGhlIGNvbW1hbmQgYmVsb3cgdG8gc3RhcnQgYW4gaW5pdGlhbCBib2lsZXJwbGF0ZS4KCiMjIyBKYXZhU2NyaXB0CgpgYGBzaAojIE5weApucHggY3JlYXRlLWFsZW0tZGFwcCBteS1hcHAKY2QgbXktYXBwCm5wbSBzdGFydApgYGAKCmBgYHNoCiMgWWFybgp5YXJuIGNyZWF0ZSBhbGVtLWRhcHAgbXktYXBwCmNkIG15LWFwcAp5YXJuIHN0YXJ0CmBgYAoKIyMjIFR5cGVTY3JpcHQKCmBgYHNoCiMgTnB4Cm5weCBjcmVhdGUtYWxlbS1kYXBwIG15LWFwcCAtLXRlbXBsYXRlIHR5cGVzY3JpcHQKY2QgbXktYXBwCm5wbSBzdGFydApgYGAKCmBgYHNoCiMgWWFybgp5YXJuIGNyZWF0ZSBhbGVtLWRhcHAgbXktYXBwIC0tdGVtcGxhdGUgdHlwZXNjcmlwdApjZCBteS1hcHAKeWFybiBzdGFydApgYGAK`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default Installation;
