import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'

const PostCard = ({
    $id,
    title,
    featuredImage,

}) => {
  return (
    <Link to={`/post/$id`}>
    <div className='w-full border border-gray-200 rounded-md p-4'>
        <div className="w-full justify-center mb-4 flex">
        <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-md'/>
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </div>
    </Link>
  )
}

export default PostCard