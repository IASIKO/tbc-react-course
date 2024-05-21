export default function Loading() {
  return (
    <main className="bg-white w-screen h-screen dark:bg-dark">
      <div className=" bg-slate-200 w-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-gray animate-pulse">
        <div className="w-[500px] flex">
          <main className="bg-white w-screen h-screen dark:bg-dark">
            <div className="bg-slate-200 w-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-gray animate-pulse">
              <div className="w-[500px] flex">
                <div className="w-full flex flex-col items-center gap-40">
                  <form className="w-full flex flex-col justify-center items-center px-[90px]">
                    <div className="bg-gray-300 dark:bg-gray-700 rounded w-40 h-6 mb-3 animate-pulse"></div>
                    <div className="w-full outline-none py-[5px] px-[15px] border border-gray-300 dark:border-gray-700 mb-3 animate-pulse">
                      <div className="bg-gray-200 dark:bg-gray-600 h-10"></div>
                    </div>
                    <div className="w-full outline-none py-[5px] px-[15px] border border-gray-300 dark:border-gray-700 mb-3 animate-pulse">
                      <div className="bg-gray-200 dark:bg-gray-600 h-10"></div>
                    </div>
                    <div className="h-11 flex justify-center w-full py-[5px] bg-gray-300 dark:bg-gray-700 mb-3 animate-pulse"></div>
                    <p className="text-[18px] bg-gray-200 dark:bg-gray-600 w-64 h-6 animate-pulse"></p>
                    <div className="bg-gray-300 dark:bg-gray-700 rounded mt-4 w-40 h-6 animate-pulse"></div>
                    <div className="absolute bottom-14 bg-gray-300 dark:bg-gray-700 rounded w-20 h-4 animate-pulse"></div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
