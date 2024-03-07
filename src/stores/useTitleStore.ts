import { createStore, useStore } from "alem/store";

type StoreProps = {
  title: string;
};

createStore("titleStore", { title: "" });
const useTitleStore = () => useStore<StoreProps>("titleStore");
export default useTitleStore;
