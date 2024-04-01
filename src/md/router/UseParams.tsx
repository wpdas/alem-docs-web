import { Markdown } from 'alem';

const UseParams = () => {
   const mdContent = Buffer.from(`IyMgVXNlIFBhcmFtcwoKVGhpcyBob29rIHJldHVybnMgYWxsIHBhcmFtZXRlcnMgcHJvdmlkZWQgYnkgdGhlIFVSTC4KCmBgYHRzCi8vIGh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9hbGVtLWxpYi5uZWFyL3dpZGdldC9JbmRleD9wcm9qZWN0SWQ9MTIzCmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gImFsZW0iOwoKZXhwb3J0IGNvbnN0IFNvbWVDb21wb25lbnQgPSAoKSA9PiB7CiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7CiAgY29uc29sZS5sb2cocGFyYW1zKTsgLy8geyBwcm9qZWN0SWQ6ICIxMjMiIH0KCiAgcmV0dXJuICIiOwp9OwpgYGAK`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default UseParams;
