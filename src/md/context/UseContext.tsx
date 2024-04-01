import { Markdown } from 'alem';

const UseContext = () => {
   const mdContent = Buffer.from(`IyMgVXNlIENvbnRleHQK`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default UseContext;
