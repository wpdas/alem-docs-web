import { useEffect } from "alem/bos";
import useTitleStore from "@dapp/stores/useTitleStore";

const useTitle = (title: string) => {
  const { update: updateTitle } = useTitleStore();
  useEffect(() => {
    updateTitle({ title });
  }, [title]);
};

export default useTitle;
