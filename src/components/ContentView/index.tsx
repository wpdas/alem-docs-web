import AppRoutes from "../../Routes";
import { ContentViewContainer } from "./styles";
import { navigate, useEffect, useLocation, useParams, useState, useStore } from "alem";

const ContentView = () => {
  // BOS -- ALEM: Usado para testar useState / useEffect
  // BOS
  // const foooBarrr = useState(1);
  // const [valor, setValor] = foooBarrr;
  // console.log("BOS useState:", foooBarrr);

  // ALEM
  // const foo = useStore("teste");
  // const { count } = foo;
  // console.log("FOO-> Count", foo.count, count, valor);

  // let sectionUsed = false;
  const [sectionUsed, setSectionUsed] = useState(false);

  // Watch the section parameter.
  const urlParams = useParams();
  const { isRoutesReady } = useLocation();

  useEffect(() => {
    if (urlParams.section && !sectionUsed && isRoutesReady) {
      navigate(urlParams.section);
      setSectionUsed(true);
    }
  }, [urlParams, sectionUsed, isRoutesReady]);

  return (
    <ContentViewContainer>
      {/* <button
        onClick={() => {
          // setValor(valor + 1);
          foo.update({ count: count + 1 });
          setValor(count + 1);
        }}
      >
        ALEM {count}
      </button>
      <button
        onClick={() => {
          setValor(valor + 1);
        }}
      >
        BOS {valor}
      </button> */}
      <AppRoutes />
    </ContentViewContainer>
  );
};

export default ContentView;
