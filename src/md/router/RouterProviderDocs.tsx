import { Markdown } from 'alem';

const RouterProviderDocs = () => {
   const mdContent = Buffer.from(`IyMgUm91dGVyIFByb3ZpZGVyCg==`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default RouterProviderDocs;
