import React from 'react';
import Logo from '../../assets/logo.png';
import useFormatDate from '../../helpers/useFormatDate';
import useFormatRupiah from '../../helpers/useFormatRupiah';
function Monitor(props) {
    let index = 0;
    console.log('props.postingan.length', props.postingan.length)
    setInterval(function(){
        
        if(index === 4){
            window.location.href = `#0`
            index = 0
        }else{
            
            window.location.href = `#${index}`
        }
        index++
        console.log('index', index)
        

    },3000)

    return (
        <div className="bg-blue-50 h-screen flex">
            <aside className="w-96 border h-screen">
                <div className="flex items-center">
                    <div className="w-[100px] mt-8 mb-4 ml-8 mr-4">
                        <img src={Logo} alt="img" />
                    </div>
                    <p className="text-2xl font-bold">
                        Baitul <br /> Mutaqin
                    </p>
                </div>
                {/* TODO::SECTION */}
                <div>
                    <p className="text-2xl ml-8 mb-4">Laporan Keuangan</p>
                    {props.laporan_keuangan.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="flex justify-between px-8 pb-4 py-2 border-b-2"
                            >
                                <div>{item.status}</div>
                                <div>
                                    <p>{useFormatRupiah(item.total)}</p>
                                    <p>{useFormatDate(item.created_at)}</p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </aside>

            <div className="w-full h-screen flex items-center justify-center relative">
                <div className="carousel   h-1/2 w-2/3 rounded-3xl">
                  
                    {
                        props.postingan.map((postingan,index) => {
                            console.log('postingan.length', postingan.length)
                            return (
                                <div style={{backgroundColor:postingan.warna}} id={index} key={index} className="carousel-item relative w-full ">
                        <div className="relative  text-center flex items-center justify-center p-8 w-full ">
                            <p className="text-4xl text-white w-full ">
                                {postingan.text}
                                {/* hadirilah tablik akbar pada pukul 09.00 yang
                                dihadiri oleh habib syech abdul ghani asykur
                                thoriq */}
                            </p>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#${index == 0 ? props.postingan.length : index - 1}`} className="btn btn-circle">
                                ❮
                            </a>
                            <a href={`#${index === (props.postingan.length - 1) ? 0 : index + 1}`} className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                        </div>
                    </div>
                            )
                        })
                    }
              
                    {/* <div id="slide2" className="carousel-item relative w-full bg-blue-600">
                        <div className="relative  text-center flex items-center justify-center p-8 ">
                            <p className="text-4xl text-white">
                                hadirilah tablik akbar pada pukul 09.00 yang
                                dihadiri oleh habib syech abdul ghani asykur
                                thoriq
                            </p>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                        </div>
                    </div> */}

                    <div className='absolute bottom-0 flex justify-center'>
                        <div className='w-20 h-20 bg-red-200 '>
                            shubuh
                        </div>
                        <div className='w-20 h-20 bg-green-200 '>
                            dhuhur
                        </div>
                        <div className='w-20 h-20 bg-blue-200 '>
                            ashar
                        </div>
                        <div className='w-20 h-20 bg-accent '>
                            maghrib
                        </div>
                        <div className='w-20 h-20 bg-secondary '>
                            isya
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Monitor;
