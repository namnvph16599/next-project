import React, { Fragment } from 'react'

type Props = {}

const PostDetails = (props: any) => {
    const { post } = props
    return (
        <Fragment><div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </Fragment>

    )
}

export async function getStaticProps(context: any) {
    console.log(1111111, context);
    const { params } = context;
    const postId = +params.postId;
    if (!postId) {
        return {
            notFound: true
        }
    }
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log('postId', postId);

    const post = posts.find((post: any) => post.id === postId);
    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const params = posts.map((post: any) => ({ params: { postId: post.id.toString() } }))
    return {
        paths: params,
        fallback: false
    }
}

export default PostDetails