const Term = () => {
  return (
    <div>
      <div className="w-full">
        <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-md font-mono subpixel-antialiased 
              bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden border border-[rgba(216,236,248,0.2)]">
          <div className="top mb-2 flex">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="mt-4 flex">
            <span className="text-green-400 whitespace-nowrap mr-2">Hackfed@Community:~$ </span>
            <span className="flex-1 items-center pl-2 text-md">
              <span className="text-red-500">sudo</span> <span className="text-yellow-400">rm</span> -rf <span className="text-blue-500">/limits</span> &&
              <span className="text-green-400 whitespace-nowrap "> echo</span> <span className="text-gray-300">"No limits, just innovation."</span>
            </span>
          </div>
          <div className="mt-4 flex">
            <span className="text-green-400 whitespace-nowrap mr-2">Hackfed@Community:~$ </span>
            <span className="flex-1 typing items-center pl-2 text-md">
              <span className="text-green-400 whitespace-nowrap "> echo</span> <span className="text-gray-300">"Deploying creativity..."</span> &&
              <span className="text-blue-500">./build-dreams</span> --target=<span className="text-red-500">world</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;

