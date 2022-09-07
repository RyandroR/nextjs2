import {useRouter} from 'next/router'
import Link from 'next/link'
import {server} from '../../../config'

const list = ({lists}) => {
  return (
    <div>{lists.title}</div>
  )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/list/${context.params.id}`)

    const lists = await res.json()

    return{
     props: {
        lists
     }
    }
    
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/list`)

    const list = await res.json()

    const ids = list.map(article => article.id)
    const paths = ids.map((id) => ({ params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default list