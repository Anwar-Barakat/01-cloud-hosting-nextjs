import React from 'react'
import CreateArticle from './CreateArticle'

const AdminPage = () => {
    return (
        <div className=' mt-4 flex items-start justify-center px-5 lg:px-20'>
            <div className='shadow p-4 bg-slate-100 rounded w-full'>
                <h2 className='text-xl lg:text-2xl text-gray-700 mt-4'>Add Article</h2>
                <CreateArticle />
            </div>
        </div>
    )
}

export default AdminPage
