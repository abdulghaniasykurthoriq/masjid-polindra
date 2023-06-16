import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import ChooseColor from '@/Components/atoms/ChooseColor';
export default function Detail(props) {
    const [text, setText] = useState('');
    const [warna, setWarna] = useState('');
    useEffect(() => {
        console.log('props', props);
        setText(props.post.text);
        setWarna(props.post.warna);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const url = route('postingan.update', {
            id: props.post.id,
            text,
            warna,
        });
        Inertia.put(url);
    };
    return (
        <div className="flex">
            <Head title="Management Event Masjid" />
            <Sidebar props={props}/>
            <div className="bg-blue-50 w-full">
                {/* Header section */}
                <div className="flex justify-between p-8">
                    <p className="text-3xl font-bold">Update Postingan</p>
                    <p>logout</p>
                </div>

                <div className="mx-8 my-2 mb-8 min-h-[400px] bg-white mt-6 rounded-t-2xl">
                    <div>
                        <div className="p-4 flex items-center">
                            <p className="px-6 text-2xl font-bold">
                                Buat Postingan
                            </p>
                        </div>
                    </div>
                    <form onSubmit={(e) => onSubmit(e)} className="pl-8">
                        <div className="  flex w-full  px-6 p-2 items-center">
                            <label className="max-w-[200px] w-full">
                                Warna
                            </label>
                            <div className="max-w-xl w-full flex">
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

                                {/* <TextInput
                                    className=""
                                    value={warna}
                                    onChange={(e) => setWarna(e.target.value)}
                                /> */}
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
                            <button className="btn btn-error mx-1">
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
