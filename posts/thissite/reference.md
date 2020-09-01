---
title: 'Reference'
description: 'The technologies this site was built on including NextJs, React, Brevifolia'
author: Robert Smith
date: '2020-08-18T07:00:00.000Z'
blog_image: 
next_button_path: /thissite/addtl-info
---

## Required Features
The following features were requirements of the tool:

- Allows the user to focus on creating content 
- Minimal coding required
- User-friendly slugs (URL of /thissite/what, instead of thissite/what.html)
- Low cost
- Server-side rendering for SEO

## LightHouse Report
This application received the below LightHouse Report:
![Lighthouse Report](LightHouseReport.webp)

## Site Foundation
This site is built on:
- Brevifolia
- NextJS
- React


## Brevifolia by Kendall Strautman

To focus on capturing notes quickly and easily, the starting base of Brevifolia by Kendall Strautman was used, which provided a nice start.


[Kendall Strautman's Brevifolia](https://github.com/kendallstrautman/brevifolia-nextjs)

## Enhancements
The enhancements to the application were:
- Creation of a side menu that is based on a JSON configuration file and Material UI(constants/SideMenu)
- Allow creation of posts in multiple subdirectories through the use of catch-all routes ([[slug.js]])
- Images pulled from the same subdirectory structure as the posts (which eliminates the need for additional configuration files)
- Index page utilizes the same layout as all the other content and the indexPage is defined in the constants file
- Conversion of images to WebP to reduce page load times
- Tool for converting images to WebP to enhance performance
- Material UI Appbar that disappears when the user scrolls
- Responsive Layout
- Material UI Appbar that disappears when the user scrolls

## NextJS
Brevifolia and this application are based on NextJs, which provides server-side rendering and theability to host a React site as a static website, which was a primary requirement. 

[Next.js Site](https://nextjs.org/)

Next JS is used by some of the top companies

[NextJs Showcase](https://nextjs.org/showcase)


## NextJS - Catch-All routes
This application takes advantage of the NextJs feature of dynamic routes, especially "catch-all" routes. This what gives the application the ability to dynamically create route paths based on the content.

The code for this is in the file /pages/\[...slug].js

[Dynamic routing / Catch-all Routes](https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details)

## Gray Matter
This application uses gray matter to pull the meta-information from the head of the file. For example, from the markdown file ** thissite/how.md ** it pulls the following metadata from the head of the file.
![Gray-Matter](how-gray-matter.webp)

Which provides to the application the JSON object:
```json
  {
    data: {
      title: 'How to use this code'
      author: Robert Smith
      date: '2020-08-18T07:00:00.000Z'
      blog_image:
    },
    content: 'This page shows you how to use this code to create your own blog.'
  }
```

Which is used in the layout component
![Layout Header](Layout-headerData.webp)

[Gray Matter - NPM](https://www.npmjs.com/package/gray-matter)

[Gray Matter - Git Source](https://github.com/jonschlinkert/gray-matter)
  

## React Markdown
React Markdown is used to pull in markdown files and render them as HTML.

[React Markdown - NPM](https://www.npmjs.com/package/react-markdown)

[React Markdown - Demo](https://rexxars.github.io/react-markdown/)

[React Markdown - Git](https://github.com/rexxars/react-markdown#readme)

**Note**
This application assumes the source of the files is known and safe. Because of this, it allows HTML tags to be rendered. If this is not the case, then in the component **/components/layout.js**, set *escapeHtml={false}*
```HTML
<ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
```


