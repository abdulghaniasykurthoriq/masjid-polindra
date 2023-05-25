import Content from '@/Components/moleculs/content'
import HeaderPage from '@/Components/moleculs/headerPage';
import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

function Pemasukan() {
  return (
    <Content>
      <div className="flex flex-col  min-h-screen bg-blue-50">
        <HeaderPage title="Form Pemasukan" />
        
        <FormPemasukan />
      </div>
    </Content>
  );
}

export default Pemasukan;

const FormPemasukan = () => {
  const [items, setItems] = useState([]);

  let angka = 0;

  const onPlus = () => {
    // setCurr(curr + 1);
    angka += 1;
    const newItem = (
      <div className="w-full max-w-xl">
        <div className="border-2 w-full max-w-xl pl-2 mt-4 mb-2 mr-2">
          <div className="m-2 flex items-center">
            <label className="max-w-[200px] w-full">Kategory*</label>
            <select
              defaultValue={1}
              className="select w-full max-w-xs mr-2 border-2 border-gray-200"
            >
              <option value={1} disabled selected>
                infaq jumat
              </option>
              <option value={1}>01</option>
              <option value={1}>02</option>
              <option value={1}>03</option>
            </select>
          </div>
          <div className="m-2 flex items-center">
            <label className="max-w-[200px] w-full">Jumlah Pemasukan*</label>
            <div className="form-control w-full max-w-xs">
              <label className="input-group w-full">
                <span>Rp</span>
                <input
                  type="number"
                  placeholder="enter the amount"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>
          <div className="m-2 flex items-center">
            <label className="max-w-[200px] w-full">Keterangan*</label>
            <select
              defaultValue={1}
              className="select w-full max-w-xs mr-2 border-2 border-gray-200"
            >
              <option value={1} disabled selected>
                infaq jumat
              </option>
              <option value={1}>01</option>
              <option value={1}>02</option>
              <option value={1}>03</option>
            </select>
          </div>
        </div>
      </div>
    );
    const newItems = [...items, newItem];
    setItems(newItems);
    scroll.scrollToBottom({ duration: 1000, smooth: true });
  };
  return (
    <div className="w-full">
      <div className="sm:mx-10 bg-white">
        <div className=" border-b-2 px-10 py-4 ">
          <p>Tambah Pemasukan</p>
        </div>
        <form className="p-2 px-8">
          <div className="m-2 flex items-center">
            <label className="max-w-[200px] w-full">Kode Pemasukan</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs bg-gray-300"
            />
          </div>

          <div className="m-2 flex items-center">
            <label className="max-w-[200px] w-full">Kode Pemasukan</label>
            <div className="flex">
              {/* //! : tanggal */}
              <select
                defaultValue={1}
                className="select mr-2 border-2 border-gray-200"
              >
                <option value={1} disabled selected>
                  05
                </option>
                <option value={1}>01</option>
                <option value={1}>02</option>
                <option value={1}>03</option>
              </select>
              {/* //! : hari */}
              <select
                defaultValue={1}
                className="select mx-2 border-2 border-gray-200"
              >
                <option value={1} disabled selected>
                  05
                </option>
                <option value={1}>01</option>
                <option value={1}>02</option>
                <option value={1}>03</option>
              </select>
              {/* //! : tahun */}
              <select
                defaultValue={1}
                className="select mx-2 border-2 border-gray-200"
              >
                <option value={1} disabled selected>
                  2019
                </option>
                <option value={1}>2020</option>
                <option value={1}>2021</option>
                <option value={1}>2022</option>
              </select>
            </div>
          </div>

          {/* //!:ITEM PEMASUKAN */}
          <div className="flex items-end">
            <div className="border-2 pl-2 mt-4 mb-2 mr-2 w-full max-w-xl">
              <div className="m-2 flex items-center">
                <label className="max-w-[200px] w-full">Kategory*</label>
                <select
                  defaultValue={1}
                  className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                >
                  <option value={1} disabled selected>
                    infaq jumat
                  </option>
                  <option value={1}>01</option>
                  <option value={1}>02</option>
                  <option value={1}>03</option>
                </select>
              </div>
              <div className="m-2 flex items-center">
                <label className="max-w-[200px] w-full">
                  Jumlah Pemasukan*
                </label>
                <div className="form-control w-full max-w-xs">
                  <label className="input-group w-full">
                    <span>Rp</span>
                    <input
                      type="number"
                      placeholder="enter the amount"
                      className="input w-full input-bordered"
                    />
                  </label>
                </div>
              </div>
              <div className="m-2 flex items-center">
                <label className="max-w-[200px] w-full">Keterangan*</label>
                <select className="select w-full max-w-xs mr-2 border-2 border-gray-200">
                  <option disabled selected>
                    infaq jumat
                  </option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </div>
            </div>
            <div
              onClick={onPlus}
              className={
                items.length == 0
                  ? "w-12 h-12 bg-blue-400 mb-2 text-center text-2xl font-bold text-white"
                  : "hidden"
              }
            >
              +
            </div>
          </div>

          {items.map((item, index) => (
            <div key={index} id={index} className="flex items-end">
              {item}
              {index == items.length - 1 && (
                <button onClick={onPlus} className="btn btn-primary mb-2">
                  +
                </button>
              )}
            </div>
          ))}

          <div className={`max-w-[200px] py-10`}>
            <button className="btn btn-primary w-full">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
};






// function Pemasukan() {
//   return (
//     <Content>
        
//         <div className='flex justify-center items-center h-screen'>
//             Form pemasukan
//         </div>
//     </Content>
//   )
// }

// export default Pemasukan