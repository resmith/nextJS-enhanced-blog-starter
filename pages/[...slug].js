import fs from 'fs'
import matter from 'gray-matter'
const glob = require('glob') // Glob used to do recursive directory listing

import PageLoading from '../components/PageLoading';
import Constants from '../constants/Constants'
import Layout from '../components/Layout'

export default function BlogTemplate({
  data,
  content,
  slug,
  blogDir,
}) {


  if (!data) return <PageLoading />

  return (
    <Layout
      data={data}
      content={content}
      slug={slug}
      blogDir={blogDir}
    />
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const filePath = `${process.cwd()}/${Constants.markdownDir}/${slug.join(
    '/'
  )}.md`
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const blogDir = slug.slice(0, slug.length - 1).join('/')

  return {
    props: {
      data,
      content,
      slug,
      blogDir,
    },
  }
}


export async function getStaticPaths() {
  //get all .md files in the posts dir
  const searchPattern = `${Constants.markdownDir}/**/*.md`
  const blogs = glob.sync(searchPattern)

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map(file =>
    file
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // remove the base directory that the slugs are in
  const paths = blogSlugs.map(slug => {
    const newSlug = slug.slice(
      slug.indexOf(Constants.markdownDir) + Constants.markdownDir.length + 1,
      slug.length
    )
    return `/${newSlug}`
  })

  return {
    paths,
    fallback: false,
  }
}
