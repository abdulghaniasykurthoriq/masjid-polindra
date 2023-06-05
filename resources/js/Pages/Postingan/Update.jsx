import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
export default function Detail(props) {
    const [text, setText] = useState("")
    useEffect(() => {
        console.log('props', props)
        setText(props.post.text)
    },[])

    const onSubmit = (e) => {
        e.preventDefault()
        const url = route('postingan.update',{id : props.post.id ,text})
        Inertia.put(url)
    }
    return (
        <div className="flex">
            <Head title="Management Event Masjid" />
            <Sidebar />
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
                    <form 
                        onSubmit={ (e) => onSubmit(e)}
                    className="pl-8">
                        <div className="  flex w-full  px-6 p-2 items-center">
                            <label className="max-w-[200px] w-full">
                                Expired
                            </label>
                            <div className="max-w-xl w-full">
                                <TextInput className="" />
                            </div>
                        </div>
                        <div className="  flex w-full  px-6 p-2 items-center">
                            <label className="max-w-[200px] w-full">
                                Text Post
                            </label>
                            <div className="max-w-xl w-full ">
                                <textarea
                                value={text}
                                onChange={(e) =>setText(e.target.value)}
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
