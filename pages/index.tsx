import type { NextPage } from 'next'

const Home: NextPage = (props: any) => {
  const { data } = props
  return <ul>
    {data.map((value: any) => <li key={value.id}>{value.title}</li>)}
  </ul>
}

export async function getStaticProps() {
  console.log(11111);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json();

  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export default Home
