import { useRecoilValue, RecoilRoot } from "recoil";
import {
  jobsCountAtom,
  messageCountAtom,
  networkCountAtom,
  notificationCountAtom,
  totalCountSelector,
} from "./store/atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp></MainApp>
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const jobsCount = useRecoilValue(jobsCountAtom);
  const networkCount = useRecoilValue(networkCountAtom);
  const msgCount = useRecoilValue(messageCountAtom);
  const notiCount = useRecoilValue(notificationCountAtom);

  // Expensive operation, needs to be wrapped aroung useMemo,
  // If App renders because of none of the state variables it depend upon, its an unneccessary recalculation


  // const totalCount = useMemo(() => {
  //   return jobsCount + networkCount + msgCount + notiCount;
  // }, [jobsCount, networkCount, msgCount, notiCount]);

  // Or Use Recoil Selector

  // Selector is derived from other atoms/ Selectors
  const totalCount = useRecoilValue(totalCountSelector);

  return (
    <>
      <div className="topbar">
        <button>Home</button>
        <button>
          My Network ({networkCount >= 100 ? "99+" : networkCount})
        </button>
        <button>Jobs ({jobsCount})</button>
        <button>Messaging ({msgCount})</button>
        <button>Notifications ({notiCount})</button>
        <button>Me ({totalCount})</button>
      </div>
    </>
  );
}

export default App;
