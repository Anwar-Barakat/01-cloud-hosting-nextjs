"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const SearchArticleInput = () => {
    const router = useRouter();

    const [search, setSearch] = useState('');
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/articles/search?search=${search}`)
    }
    return (
        <form className="space-y-4 md:space-y-6 w-1/2 mb-4 mx-auto" onSubmit={submitHandler}>
            <div>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
        </form>
    )
}

export default SearchArticleInput
