"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (title === '') toast.error('Title is required');
        if (description === '') toast.error('Description is required');


    }
    return (
        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
            <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
            </div>
            <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <button type="submit" className="w-fit text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add</button>
        </form>
    )
}

export default CreateArticle
