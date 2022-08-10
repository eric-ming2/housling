import React, { FunctionComponent, useState } from 'react'

const ContactContents: FunctionComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setSubmitted(true)
        console.log('Sending')

        let data = {
            name,
            email,
            message,
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
            } else {
                console.log("Email failed. Response: ")
                console.log(res)
            }
        })
    }
    const renderForm = !submitted ? (
        <div className="flex flex-col w-full p-8 bg-white lg:w-1/3 md:w-1/2">
            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
                Contact us
            </h2>
            <div className="relative mb-4">
                <label
                    htmlFor="name"
                    className="text-sm text-gray-600 leading-7"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(submitted ? '' : e.target.value)}
                    className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label
                    htmlFor="email"
                    className="text-sm text-gray-600 leading-7"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(submitted ? '' : e.target.value)}
                    className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label
                    htmlFor="message"
                    className="text-sm text-gray-600 leading-7"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) =>
                        setMessage(submitted ? '' : e.target.value)
                    }
                    className="w-full h-32 px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
            </div>
            <button
                className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                onClick={(e) => {
                    setSubmitted(true)
                    handleSubmit(e)
                }}
            >
                Send
            </button>
        </div>
    ) : (
        <div className="flex flex-col w-full p-8 bg-white lg:w-1/3 md:w-1/2">
            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
                Thanks for getting in touch! I will get back to you as soon as
                possible.
            </h2>
            <div className="relative mb-4">
                <label
                    htmlFor="name"
                    className="text-sm text-gray-600 leading-7"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    disabled
                    className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none disabled focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label
                    htmlFor="email"
                    className="text-sm text-gray-600 leading-7"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    disabled
                    className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label
                    htmlFor="message"
                    className="text-sm text-gray-600 leading-7"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    disabled
                    className="w-full h-32 px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
            </div>
            <button
                className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                disabled
                onClick={(e) => {
                    setSubmitted(true)
                    handleSubmit(e)
                }}
            >
                Send
            </button>
        </div>
    )
    return (
        <section className="relative text-gray-600 body-font grow">
            <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
                <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0 opacity-40 grayscale contrast-125 "
                        frameBorder="0"
                        title="map"
                        scrolling="no"
                        src="https://maps.google.com/maps?q=Georgia%20Institute%20of%20Technology&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                    <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
                        <div className="px-6 lg:w-1/2">
                            <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                North Ave NW, Atlanta, GA 30332
                            </p>
                        </div>
                        <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                            <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                                EMAIL
                            </h2>
                            <a className="leading-relaxed text-indigo-500">
                                eming6@gatech.edu
                            </a>
                            <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">201-407-6376</p>
                        </div>
                    </div>
                </div>
                {renderForm}
            </div>
        </section>
    )
}

export default ContactContents
