import Virtualization from "./Virtualization";
import VirtualizationList from "./VirtualizationList";
import "./App.css";

//array
const LIST = Array.from({ length: 10000 }, (_, index) => `List element ${index + 1}`);
export default function App() {
  // return <Virtualization />;
  return <VirtualizationList list={LIST} innerHeight={35} width={350} height={400} />;
}
