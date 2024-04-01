import { Markdown } from 'alem';

const UseRoutes = () => {
   const mdContent = Buffer.from(`IyMgVXNlIFJvdXRlcwo=`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default UseRoutes;
