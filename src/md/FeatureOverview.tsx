import { Markdown } from 'alem';

const FeatureOverview = () => {
   const mdContent = Buffer.from(`IyBGZWF0dXJlIE92ZXJ2aWV3CgpBbGVtIGlzIGEgd2ViMyAqKkphdmFTY3JpcHQqKiAvICoqVHlwZVNjcmlwdCoqIGxpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcyBmb3IgTkVBUiBCT1MgREFwcHMuCgotICoqRGVjbGFyYXRpdmU6KiogQWxlbSBtYWtlcyBpdCBwYWlubGVzcyB0byBjcmVhdGUgaW50ZXJhY3RpdmUgVUlzLiBEZXNpZ24gc2ltcGxlIHZpZXdzIGZvciBlYWNoIHN0YXRlIGluIHlvdXIgYXBwbGljYXRpb24sIGFuZCBBbGVtIHdpbGwgZWZmaWNpZW50bHkgdXBkYXRlIGFuZCByZW5kZXIganVzdCB0aGUgcmlnaHQgY29tcG9uZW50cyB3aGVuIHlvdXIgZGF0YSBjaGFuZ2VzLiBEZWNsYXJhdGl2ZSB2aWV3cyBtYWtlIHlvdXIgY29kZSBtb3JlIHByZWRpY3RhYmxlLCBzaW1wbGVyIHRvIHVuZGVyc3RhbmQsIGFuZCBlYXNpZXIgdG8gZGVidWcuCi0gKipDb21wb25lbnQtQmFzZWQ6KiogQnVpbGQgZW5jYXBzdWxhdGVkIGNvbXBvbmVudHMgdGhhdCBtYW5hZ2UgdGhlaXIgb3duIHN0YXRlLCB0aGVuIGNvbXBvc2UgdGhlbSB0byBtYWtlIGNvbXBsZXggVUlzLiBTaW5jZSBjb21wb25lbnQgbG9naWMgaXMgd3JpdHRlbiBpbiBKYXZhU2NyaXB0LCB5b3UgY2FuIGVhc2lseSBwYXNzIHJpY2ggZGF0YSB0aHJvdWdoIHlvdXIgYXBwLgotICoqTGVhcm4gT25jZSwgV3JpdGUgQW55d2hlcmU6KiogV2UgZG9uJ3QgbWFrZSBhc3N1bXB0aW9ucyBhYm91dCB0aGUgcmVzdCBvZiB5b3VyIHRlY2hub2xvZ3kgc3RhY2ssIHNvIHlvdSBjYW4gZGV2ZWxvcCBuZXcgZmVhdHVyZXMgaW4gQWxlbSB3aXRob3V0IHJld3JpdGluZyBleGlzdGluZyBjb2RlLgotICoqQ1NTOioqIEFsZW0gc3VwcG9ydHMgLmNzcyBmaWxlcy4gSnVzdCBjcmVhdGUgdGhlbSBhbmQgdGhleSB3aWxsIGFsbCBiZSBpbmNsdWRlZCBpbiB0aGUgYXBwbGljYXRpb24uCi0gKipSb3V0ZXMgU3lzdGVtOioqIEFuIGludGVncmF0ZWQgcm91dGVyIHN5c3RlbSB0aGF0IG1ha2VzIGl0IHBvc3NpYmxlIHRvIG5hdmlnYXRlIGJldHdlZW4gcGFnZXMgZWFzaWx5LgotICoqTXVjaCBtb3JlOioqIFRha2UgYSBsb29rIGF0IHRoZSBvdGhlciBkb2N1bWVudGF0aW9uIGl0ZW1zIHRvIGxlYXJuIGhvdyB0byB1c2UgYWxsIHRoZSBmZWF0dXJlcyBwcm92aWRlZCBieSBBbGVtLgoKQWxlbSBzdXBwb3J0cyBhbGwgdGhlIHRoaW5ncyB0aGF0IEJPUyBzdXBwb3J0cy4KCiMjIENvbXBvbmVudAoKWW91IGNhbiBjcmVhdGUgYW55IGNvbXBvbmVudCBmaWxlIHVzaW5nICoqSmF2YVNjcmlwdCoqIG9yICoqVHlwZVNjcmlwdCoqLiBUaGUgZW50cnlwb2ludCBtdXN0IGJlIGFuIEFwcCBjb21wb25lbnQgbGlrZSBzbzoKCmBgYHRzeApjb25zdCBBcHAgPSAoKSA9PiB7CiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxoMT5IZWxsbyBXb3JsZDwvaDE+CiAgICA8Lz4KICApOwp9OwoKZXhwb3J0IGRlZmF1bHQgQXBwOwpgYGAKCiMjIENvbXBvbmVudCBQcm9wcwoKUGFzc2luZyBwcm9wZXJ0aWVzIHRvIGEgY29tcG9uZW50IGlzIHZlcnkgc2ltcGxlLiBKdXN0IHVzZSByZWFjdCdzIGRlZmF1bHRzOgoKYGBgdHN4CmV4cG9ydCBjb25zdCBDb21wb25lbnRBID0gKHsgbmFtZSB9OiB7IG5hbWU6IHN0cmluZyB9KSA9PiB7CiAgcmV0dXJuIDxwPntuYW1lfTwvcD47Cn07CgpleHBvcnQgY29uc3QgQ29tcG9uZW50QiA9ICgpID0+IHsKICByZXR1cm4gPENvbXBvbmVudEEgbmFtZT0iV2VuZHoiIC8+Owp9OwpgYGAK`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default FeatureOverview;
