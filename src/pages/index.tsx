import Head from "next/head";
import Sidebar from "../components/Sidebar";

const App = () => {
  return (
    <>
      <Head>
        <title>Kanboss</title>
      </Head>

      <div className="flex h-screen w-screen flex-row bg-slate-50">
        <Sidebar />

        <div className="w-screen">
          <div className="h-50 flex justify-between bg-white p-5">
            <div className="flex items-center gap-5">
              <h1 className="text-bold flex justify-between text-4xl text-slate-800 ">
                Class of 2022
              </h1>

              <input
                className="h-5 bg-slate-200 p-4 text-white"
                placeholder="Find something here..."
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
