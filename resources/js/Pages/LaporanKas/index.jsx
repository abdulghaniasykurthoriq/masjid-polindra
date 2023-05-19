
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import Content from '@/Components/moleculs/content'
import React from 'react'
function LaporanKas() {
  return (
    <Content>
      <div className=" min-h-screen ">
        <Header />
        <div className="relative">
          <ListCard />
          <div
            className="
          h-[50px] 
          sm:h-[70px] 
          md:h-[100px] 
          lg:h-[70px] 
          xl:h-[130px] 
          border-b-2 mx-6 "
          >
            {/* //TODO: This is line */}{" "}
          </div>
          <div className="flex mx-16 my-4">
            {/* start table  */}
            <div className="overflow-x-auto w-full ">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Kategori</th>
                    <th>Nominal</th>
                    <th>Tanggal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>pemasukan </td>
                    <td>Rp. 1.900.000</td>
                    <td>23,Agst, 2020</td>
                    <td>
                      <button className="btn btn-accent">Show detail</button>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover">
                    <td>pemasukan</td>
                    <td>Rp. 1.000.000</td>
                    <td>23,Agst, 2020</td>
                    <td>
                      <button className="btn btn-accent">Show detail</button>
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>pengeluaran</td>
                    <td>Rp. 500.000</td>
                    <td>23,Agst, 2020</td>
                    <td>
                      <button className="btn btn-accent">Show detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>pengeluaran</td>
                    <td>Rp. 500.000</td>
                    <td>23,Agst, 2020</td>
                    <td>
                      <button className="btn btn-accent">Show detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>pengeluaran</td>
                    <td>Rp. 500.000</td>
                    <td>23,Agst, 2020</td>
                    <td>
                      <button className="btn btn-accent">Show detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>pengeluaran</td>
                    <td>Rp. 500.000</td>
                    <td>23,Agst, 2020</td>
                    <td>
                      <button className="btn btn-accent">Show detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>pengeluaran</td>
                    <td>Rp. 500.000</td>
                    <td>23,Agst, 2020</td>
                    <td>
                      <button className="btn btn-accent">Show detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* end table */}

            {/* //todo: grafik */}
            {/* <div className="hidden xl:flex bg-gray-200  w-[400px] h-200 text-center justify-center items-center">
              this is grafik <br />
              under constructured
            </div> */}
          </div>
        </div>
      </div>
    </Content>
  );
}

const Header = () => {
  return (
    <div className="w-full flex justify-between px-12 bg-blue-50 pt-12 pb-32 h-10 lg:h-56">
      {/* //todo: input search */}
      <div className="form-control">
        <label className="input-group">
          <span className="bg-white text-gray-300">
            <FaSearch />
          </span>
          <input type="text" placeholder="Search . . ." className="input" />
        </label>
      </div>

      {/* //todo: logout  */}
      <div className="hidden sm:flex items-center text-lg font-medium">
        <p className="px-2">Logout</p>
        <BiLogOutCircle />
      </div>
    </div>
  );
};

const ListCard = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center absolute top-[-50px] lg:top-[-90px]">
      {/* <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  h-40 w-40"></div>
       */}
      <div
        className="
            bg-gradient-to-r  from-[#FEECD2] to-100% to-[#D0D5FC]
            md:w-60 md:h-32 
            lg:w-[200px] 
            xl:w-72 xl:h-40 m-2 px-4 lg:px-8 py-2 lg:py-4 flex flex-col justify-between"
      >
        <p className=" z-10 text-[9px] sm:text-lg">Pemasukan</p>
        <p className="z-10 text-center xl:text-3xl">Rp.999.999.999</p>
        <p className="z-10 text-xs text-right">periode 32 oktober</p>
      </div>
      <div
        className="
             bg-gradient-to-r  from-[#FDEFC8] to-100% to-[#FEE1ED]
             md:w-60 md:h-32 md:mx-1
             lg:w-[200px] 
             xl:w-72 xl:h-40 m-2 px-4 lg:px-8 py-2 lg:py-4 flex flex-col justify-between"
      >
        <p className=" z-10 text-[9px] sm:text-lg">Pemasukan</p>
        <p className="z-10 text-center xl:text-3xl">Rp.999.999.999</p>
        <p className="z-10 text-xs text-right">periode 32 oktober</p>
      </div>
      <div
        className="
            bg-gradient-to-r  from-[#e5fcbc] to-100% to-[#A2C960]
            md:w-60 md:h-32
            lg:w-[200px] 
            xl:w-72 xl:h-40 m-2 px-4 lg:px-8 py-2 lg:py-4 flex flex-col justify-between relative"
      >
        <div className="hidden xl:flex h-16 w-16 bg-opacity-50  bg-[#DBE8C7] rounded-full absolute top-0 right-0 ">
          <div className="h-24 w-24 bg-opacity-50  bg-[#D0E0B3] rounded-full absolute right-[55%] top-[10%] ">
            <div
              className="
                        bg-opacity-50
                        h-36 w-36 rounded-full absolute right-[50%] top-[10%] bg-[#D0E0B3]"
            ></div>
          </div>
        </div>
        <p className="z-10 text-[9px]  sm:text-lg">Pemasukan</p>
        <p className="z-10 text-center xl:text-3xl">Rp.50.000</p>
        <p className="z-10 text-xs text-right">periode 32 oktober</p>
      </div>
    </div>
  );
};

export default LaporanKas;
