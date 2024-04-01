import { Markdown } from 'alem';

const FeatureOverview = () => {
   const mdContent = Buffer.from(`IyBGZWF0dXJlIE92ZXJ2aWV3CgpBbGVtIGlzIGEgd2ViMyAqKkphdmFTY3JpcHQqKiAvICoqVHlwZVNjcmlwdCoqIGxpYnJhcnkgdG8gY3JlYXRlIHdlYjMgYXBwcyBmb3IgTmVhciBCT1MuCgojIyBDb21wb25lbnQKCllvdSBjYW4gY3JlYXRlIGFueSBjb21wb25lbnQgZmlsZSB1c2luZyAqKkphdmFTY3JpcHQqKiBvciAqKlR5cGVTY3JpcHQqKi4gVGhlIGVudHJ5cG9pbnQgbXVzdCBiZSBhbiBBcHAgY29tcG9uZW50IGxpa2Ugc286CgpgYGB0c3gKY29uc3QgQXBwID0gKCkgPT4gewogIHJldHVybiAoCiAgICA8PgogICAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPgogICAgPC8+CiAgKTsKfTsKCmV4cG9ydCBkZWZhdWx0IEFwcDsKYGBgCgojIyBDb21wb25lbnQgUHJvcHMKClBhc3NpbmcgcHJvcGVydGllcyB0byBhIGNvbXBvbmVudCBpcyB2ZXJ5IHNpbXBsZS4gSnVzdCB1c2UgcmVhY3QncyBkZWZhdWx0czoKCmBgYHRzeApleHBvcnQgY29uc3QgQ29tcG9uZW50QSA9ICh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkgPT4gewogIHJldHVybiA8cD57bmFtZX08L3A+Owp9OwoKZXhwb3J0IGNvbnN0IENvbXBvbmVudEIgPSAoKSA9PiB7CiAgcmV0dXJuIDxDb21wb25lbnRBIG5hbWU9IldlbmR6IiAvPjsKfTsKCmV4cG9ydCBjb25zdCBDb21wb25lbnRDID0gKGNvbXBvbmVudFByb3BzOiB7IG5hbWU6IHN0cmluZyB9KSA9PiB7CiAgcmV0dXJuIDxwPntjb21wb25lbnRQcm9wcy5uYW1lfTwvcD47Cn07CmBgYAo=`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default FeatureOverview;