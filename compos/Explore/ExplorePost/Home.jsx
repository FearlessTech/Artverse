import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegSave } from 'react-icons/fa'
import Thoughts from './Thoughts'
import AddThought from './AddThought'


function Home({ post, user }) {
    console.log(post, user)
    return (
        <div className='explorePost'>
            <div className="ep-top">
                <div className="ep-user flex ">
                    <img src={user.image} alt="" />
                    <div className="ep-u-data">
                        <p>{post.title}</p>
                        <div>{user.name} . <span>Follow</span></div>
                    </div>
                </div>
                <div className="ep-u-actions flex gap-5">
                    <div className="btn btn-primary"><AiOutlineHeart size={22} />Like</div>
                    <div className="btn btn-warning"><FaRegSave size={22} />Save</div>
                </div>
            </div>
            <div className="ep-img">
                <img src={post.image} alt="" />
            </div>
            <div className="ep-desc">
                <p>{post.desc}</p>
            </div>
            <div className="ep-thoughts">
                <AddThought />
                <Thoughts />
            </div>
        </div>
    )
}

export default Home