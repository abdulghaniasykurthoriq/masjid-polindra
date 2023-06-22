import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import ChooseColor from '@/Components/atoms/ChooseColor';
export default function Detail(props) {
    const [text, setText] = useState('');
    const [warna, setWarna] = useState('#6e56ce');
    useEffect(() => {}, [warna]);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('warna', warna);
        console.log('text', text);

        const data = { warna, text };
        console.log('data', data);
        // alert('kocak gaming')

        const url = route('postingan.store', { text, warna });
        Inertia.post(url);
        // console.log('text', text)
    };
    const onRed = () => {
        setWarna('red');
        console.log('warna', warna);
    };
    const onGreen = () => {
        setWarna('green');
        console.log('warna', warna);
    };

    const handleCancel = () => {
        window.history.back();
    };

    return (
        <div className="flex">
            <Head title="Management Event Masjid" />
            <Sidebar props={props} />
            <div className="bg-blue-50 w-full">
                {/* Header section */}
                <div className="flex justify-between p-8">
                    <p className="text-3xl font-bold">MANAGEMENT POSTINGAN</p>
                    <p>logout</p>
                </div>

                <div className="mx-8 my-2 mb-8 min-h-[400px] bg-white mt-6 rounded-t-2xl">
                    <div>
                        <div className="p-4 flex items-center">
                            <p className="px-6 text-2xl font-bold">
                                Bikin Event
                            </p>
                        </div>
                    </div>
                    <form onSubmit={(e) => onSubmit(e)} className="pl-8">
                        <div className="  flex w-full  px-6 p-2 items-center">
                            <label className="max-w-[200px] w-full">
                                Warna
                            </label>
                            <div className="max-w-xl flex w-full">
                                <ChooseColor
                                    warna={warna}
                                    color={'#6e56ce'}
                                    onClick={() => setWarna('#6e56ce')}
                                />
                                <ChooseColor
                                    warna={warna}
                                    color={'#ab99ea'}
                                    onClick={() => setWarna('#ab99ea')}
                                />
                                <ChooseColor
                                    warna={warna}
                                    color={'#ab49ba'}
                                    onClick={() => setWarna('#ab49ba')}
                                />
                                <ChooseColor
                                    warna={warna}
                                    color={'#eb9091'}
                                    onClick={() => setWarna('#eb9091')}
                                />
                            </div>
                        </div>
                        <div className="  flex w-full  px-6 p-2 items-center">
                            <label className="max-w-[200px] w-full">
                                Text Post
                            </label>
                            <div className="max-w-xl w-full ">
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    className="textarea textarea-bordered w-full"
                                    placeholder="Post"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center max-w-4xl w-full">
                            <button className="btn btn-primary mx-1">
                                submit
                            </button>
                            <button
                                onClick={handleCancel}
                                className="btn btn-error mx-1"
                            >
                                cancel
                            </button>
                        </div>
                    </form>
                    {/* end list materi */}
                </div>
            </div>
        </div>
    );
}

const ChooseWarna = ({ warna, color, onClick }) => {
    return (
        <div
            style={{ backgroundColor: color }}
            // onClick={() => setWarna('red')}
            onClick={onClick}
            className={`${
                warna === color ? 'border-4 border-black' : ''
            }  w-10 h-10 rounded-full`}
        ></div>
    );
};
