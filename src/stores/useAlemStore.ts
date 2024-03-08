import { asyncFetch } from "alem";
import { createStore, useStore } from "alem/store";

type StoreProps = {
  currentVersion: string;
};

createStore("alemStore", { currentVersion: "" });
const useAlemStore = () => useStore<StoreProps>("alemStore");
export default useAlemStore;

// Populate initial content
asyncFetch("https://api.github.com/repos/wpdas/alem/tags").then((data) => {
  const { update } = useAlemStore();
  update({ currentVersion: data.body[0].name.replace("v", "") });
});
