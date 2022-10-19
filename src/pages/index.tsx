import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../Header";

const App = () => {
  return (
    <>
      <Head>
        <title>Kanboss</title>
      </Head>

      <div className="flex h-screen w-screen flex-row bg-slate-50">
        <Sidebar />

        <div className="w-screen">
          <Header />
        </div>
      </div>
    </>
  );
};

export default App;
