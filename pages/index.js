import fs from 'fs'
import matter from 'gray-matter'

import Layout from '../components/Layout'
import Constants from '../constants/Constants'

export default function Index({
  data,
  content,
  slug,
  blogDir,
}) {

  if (!data) return (<>Page Loading</>);

  return (
    <div>
    <Layout
      data={data}
      content={content}
      slug={slug}
      blogDir={blogDir}
    />
    </div>
  )
}

export async function getStaticProps() {
  const filePath = `${process.cwd()}/${Constants.markdownDir}/${
    Constants.indexPage
  }`
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const slug = '/'
  const blogDir = '/'
  // if (data.blog_image) {


  return {
    props: {
      data,
      content,
      slug,
      blogDir,
    },
  }
}
