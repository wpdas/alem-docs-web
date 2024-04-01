import { Markdown } from 'alem';

const CreateContext = () => {
   const mdContent = Buffer.from(`IyMgQ3JlYXRlIENvbnRleHQK`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default CreateContext;
