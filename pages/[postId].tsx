import React, { Fragment } from 'react';

type Props = {};

const PostDetails = (props: any) => {
	const { post } = props;

	if (!post) return <div>Loading post.....</div>; // fallback : true
	return (
		<Fragment>
			<div>{post.id}</div>
			<div>{post.title}</div>
			<div>{post.body}</div>
		</Fragment>
	);
};

const getDataPost = async () => {
	const response = await fetch('http://localhost:8080/post');
	return response.json();
};

export async function getStaticProps(context: any) {
	const { params } = context;
	const postId = +params.postId;
	if (!postId) {
		return {
			notFound: true,
		};
	}
	const posts = await getDataPost()
	const post = posts.find((post: any) => post.id === postId);
	return {
		props: {
			post,
		},
	};
}

export async function getStaticPaths() {
    const posts = await getDataPost()
	const params = posts.map((post: any) => ({ params: { postId: post.id.toString() } }));
	// const params = [{ params: { postId: '1' } }];
	return {
		paths: params,
		fallback: false,
		//if fallback : fasle thi nhung path kh tra ve ở params khi truy cập vào sẽ chạy vào 404 page
		// if fallback : true khi những params kh được pre rendering phải xử check empty truócw khi render
		//if fallback :'blocking' có thể kh cần check empty vì sẽ được pre rendering trên server đợi server load xong => return về detail pages
	};
}

export default PostDetails;
