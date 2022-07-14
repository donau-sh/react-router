import React from 'react'
import {useParams, useLocation} from 'react-router-dom';


const Post = () => {
    const params = useParams();
    
    // useLocation are the params after '/post/:postId?first=..&last=..'
    const query = new URLSearchParams(useLocation().search)
    return (
        <>
            <h2>Id is = {params.postId }</h2>
            <h2>{query.get("first")}</h2>
            <h2>{query.get("last")}</h2>
        </>
    )
}

export default Post
