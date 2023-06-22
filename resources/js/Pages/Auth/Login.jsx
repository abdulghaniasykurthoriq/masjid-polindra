import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import EMasjid from '../../../assets/emasjid.svg';
import GambarMasjid from '../../../assets/logo-masjid.svg';
import Hamdalah from '../../../assets/hamdalah.svg';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div>
            <Head title="Log in" />
            <div className="flex w-full">
                <section className="w-full lg:w-1/2 flex justify-center relative">
                    <div className=''>
                        <div className="flex justify-center">
                            <img
                                className="w-[200px] mt-[100px]"
                                src={EMasjid}
                                alt="ini logo masjid"
                            />
                        </div>
                        <div className="mt-[100px] text-center">
                            <p className="font-medium text-[30px]">
                                WELCOME TO MASJID BAITUL MUSTAQIN
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="mt-[50px] text-center max-w-sm w-full">
                                <div className="py-[10px]">
                                    <p className="font-medium text-[20px]">
                                        Login
                                    </p>
                                </div>
                                <form
                                    className="flex flex-col"
                                    onSubmit={submit}
                                >
                                    <div className="pt-[10px]">
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            id="username"
                                            name="username"
                                            value={data.username}
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={handleOnChange}
                                            className="input input-bordered w-full max-w-xs border border-200 py-[10px]"
                                        />
                                    </div>
                                    <div className="pt-[20px]">
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={data.password}
                                            autoComplete="current-password"
                                            onChange={handleOnChange}
                                            className="input input-bordered w-full max-w-xs border border-200 py-[10px]"
                                        />
                                    </div>
                                    <div className="pt-[20px]">
                                        <button
                                            style={{
                                                backgroundColor: '#96a2ff',
                                                border: 'none',
                                                color: 'white',
                                            }}
                                            className="btn btn-neutral btn-sm"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    style={{ backgroundColor: '#96a2ff' }}
                    className="hidden w-1/2 h-screen lg:flex justify-center items-center"
                >
                    <div>
                        <div>
                            <img
                                className="w-[400px]"
                                src={GambarMasjid}
                                alt=""
                            />
                        </div>
                        <div
                            style={{ backgroundColor: '#adb5fa' }}
                            className="flex flex-col justify-center items-center bg-gray-200 rounded-[10px] h-[200px]"
                        >
                            <div>
                                <img
                                    className="mb-[20px] w-[200px]"
                                    src={Hamdalah}
                                    alt=""
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="max-w-[350px] flex flex-col justify-center items-center">
                                    <p className="text-sm">
                                        “...Ingatlah, hanya dengan mengingat
                                    </p>
                                    <p className="text-sm">
                                        Allah hati menjadi tentram"
                                    </p>
                                    <p className="text-sm mt-[20px]">
                                        (Ar-Ra’d : 28)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
