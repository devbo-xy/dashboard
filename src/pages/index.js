import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-full bg-white relative overflow-hidden">
      <div className="flex justify-end">
        <div className="h-full w-[16%] bg-[#F5F6FD] border-r-[0.01rem] border-r-gray-100 shadow-sm p-8 fixed left-0">
          <div className="flex flex-col space-y-12">
            <div className="flex justify-center">
              <h2 className="font-bold text-2xl uppercase">lukman</h2>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="">
                <h2 className="uppercase font-bold text-sm text-black">
                  Main Navigation
                </h2>
              </div>
              <div className="">
                <h2 className="font-bold text-sm text-gray-400">Dashboard</h2>
              </div>
              <div className="">
                <h2 className="font-bold text-sm text-gray-400">Transaction</h2>
              </div>
              <div className="">
                <h2 className="font-bold text-sm text-gray-400">Contacts</h2>
              </div>
              <div className="">
                <h2 className="font-bold text-sm text-gray-400">Library</h2>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="">
                <h2 className="uppercase font-bold text-sm text-black">
                  Settings & Schedule
                </h2>
              </div>
              <div className="">
                <h2 className="font-bold text-sm text-gray-400">Base Wallet</h2>
              </div>
              <div className="">
                <h2 className="font-bold text-sm text-gray-400">My Contacts</h2>
              </div>
              <div className="">
                <h2 className="font-bold text-sm text-gray-400">Invoices</h2>
              </div>
              <div className="">
                <h2 className="font-bold text-sm text-gray-400">Schedules</h2>
              </div>
            </div>
            <div className="w-[4rem] h-[4rem] bg-white rounded-full left-[6rem] flex justify-center items-center absolute bottom-[14rem] z-[1] shadow-xl">
              <span className="w-[2.5rem] h-[2.5rem] bg-[#E88E71] text-white text-2xl font-bold flex justify-center items-center rounded-full">
                ?
              </span>
            </div>
            <div className="w-full h-[15rem] bg-gradient-to-r from-[#F8F1E1]/90 to-[#DFE0F4]/90 rounded-2xl relative overflow-hidden flex flex-col px-4 py-6">
              <span className="absolute bg-white/80 opacity-60 w-[7rem] h-[7rem] rounded-full -top-[4rem] -left-[4.5rem]" />
              <span className="absolute bg-white/80 opacity-60 w-[14rem] h-[14rem] rounded-full -bottom-[8rem] -right-[6rem]" />
              <div className="flex flex-col justify-between h-full">
                <div className="h-full items-center flex flex-col justify-center z-[1] space-y-2">
                  <div className="flex justify-center items-center">
                    <h2 className="text-[#595042] font-semibold text-xl">
                      Help Center
                    </h2>
                  </div>
                  <div>
                    <p className="text-[#595042] text-center text-sm mx-auto">
                      Having trouble in lukman. Please contact us for more
                      questions
                    </p>
                  </div>
                </div>
                <div className="w-full bg-white flex justify-center py-3 rounded-xl z-[1] shadow-2xl">
                  <h2 className="text-sm font-bold text-[#595042]">
                    Go To Help Center
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[84%] h-[14rem] bg-[#F5F6FD] border-b-[0.01rem] border-b-gray-100 shadow-sm ">
          <div className="flex flex-col">
            <div className="w-full items-center h-full z-[5] py-8 px-[5rem]">
              <div className="flex justify-between items-center">
                <div className="bg-white w-[20%] h-[3rem] rounded-md p-2">
                  <input className="w-full h-full outline-none" />
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <h2 className="font-bold text-md text-gray-400">Wallet</h2>
                  </div>
                  <div className="">
                    <h2 className="font-bold text-md text-gray-400">Wallet</h2>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <h2 className="font-bold text-md text-gray-400">Wallet</h2>
                  </div>
                  <div className="">
                    <h2 className="font-bold text-md text-gray-400">Wallet</h2>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="">
                    <h2 className="font-bold text-md text-gray-400">
                      Hi, Lukman
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-row space-x-8">
              <div className="bg-gradient-to-r from-[#F8F1E1] to-[#DFE0F4] w-[28rem] h-[13rem] rounded-2xl p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-black text-sm font-bold">
                        Your Working Balance
                      </h2>
                    </div>
                    <div>
                      <h2 className="text-gray-400 text-sm font-bold border-b-2 border-b-gray-400">
                        Saving Account
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center">
                      <h2 className="text-black text-4xl font-bold">
                        PKR 9,250,000
                      </h2>
                    </div>
                    <div className="flex justify-center items-center">
                      <h2 className="text-black text-sm font-bold border-b-2">
                        PKR
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#FBEDCF] to-[#F8E2E6] w-[28rem] h-[13rem] rounded-2xl p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-black text-sm font-bold">
                        Your Saving Status
                      </h2>
                    </div>
                    <div className="w-6 h-6 bg-gray-400 items-center flex justify-center rounded-full cursor-pointer">
                      <h2 className="text-white text-sm font-bold">?</h2>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-6">
                    <div className="flex justify-center items-center w-20 h-20 bg-[#F7D5CD] rounded-full"></div>
                    <div className="flex flex-col justify-center">
                      <div className="text-start">
                        <h2 className="text-[#D54B39] text-2xl font-bold text-start">
                          4.28%
                        </h2>
                      </div>
                      <div>
                        <h2 className="text-black text-sm font-bold">
                          Your Spending Increased
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#DDF8C1] to-[#EEFCEB] w-[28rem] h-[13rem] rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
