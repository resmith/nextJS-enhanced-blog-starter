import fs from 'fs'
import matter from 'gray-matter'

import Layout from '../components/Layout'
import Constants from '../constants/Constants'

export default function ErrorPage404({ data, content, blogDir }) {
  // if (!data) return <>Page Loading</>

  return <Layout data={data} content={content} blogDir={blogDir} />
}

export async function getStaticProps() {
  const filePath = `${process.cwd()}/${Constants.markdownDir}/${
    Constants.page404Error
  }`

  let data = {}
  let content = {};
  let blogDir = "/"
  try {
    let fileContents = fs.readFileSync(filePath, 'utf8')
    data = matter(fileContents).data;
    content = matter(fileContents).content;
  } catch (err) {
    console.log(`pages/404 readFileSync filepath: ${filePath} error: ${err}`);
    data.title = "Page Not Found (404 error)";
    data.author = "The computer"
    data.date = Date.now();
    data.next_button_path = "/"
    content = "";
  }

    return {
    props: {
      data,
      content,
      blogDir,
    },
  }
}
