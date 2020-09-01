<p align="center">
  <a href="https://www.nextjs.org/">
    <img src="public/static/icons/nextjs-black-logo.svg" width="80" height="28">
  </a>
</p>
<h1 align="center">
  NextJS Blog Starter With MUI Side Menu and App Bar
</h1>

## About

This application is a NextJS Application for creating blogs with a Materiaul UI Side Menu and AppBar. It allows the user to focus on creation of content. It is based on Kendall Strautman's Brevifolia minimal start blog.

To see the blog in action and for more information on setup, visit the blog [411 Tech Info](https://www.411tech.info/) under the "This Tool" heading.

## Quick Setup

#### _Set-up Locally_

In your terminal, navigate to where you would like this blog to live, then run

```bash
#clone the repo
git clone git@github.com:resmith/nextJS-enhanced-blog-starter

#navigate to the directory
cd nextJS-enhanced-blog-starter

#install dependencies & run dev server with npm
npm install
npm run dev

```

This will start the development server using localhost:3000

# How to use this code
## Project Structure

## Determine your site structure

First, plan out your site structure, how the site will be organized and how the users will navigate it. 

For example, the following site structure was used for this site: 
```js
/thissite
/javascript
/react
```

If the user enters the URLs:
```html
/thissite/why
/thissite/how
/thissite/what
```
Then they're routed to the respect content:
```js
/thissite/why.md
/thissite/how.md
/thissite/what.md
```


## Constants
The constants.js file (under the constants directory), defines the high-level site information, including site title, description. Especially of importance is the "markdownDir". This is the directory where the post are kept. The default location is "/posts".

![Constants](constants.webp)


## Index Page
The index page will pull the content specified as the "indexPage" in the constants file.

![Index](indexPage.webp)


## Side Menu
The side menu defines an array of JSON objects that contain the side menu. No other coding is needed for the side menu. The JSON contains the menu titles and the content's location, which should include the directory and the content name (without the .md extension). The directory locations are relative locations (e.g, don't use "/thissite/how.html" - but instead put in the path "thissite/how").

![Side Menu](sideMenu.webp)

## Post
Create the posts in the directory specified in the constants configuration file (file: constants/Constants.js, parameter: markdownDir). The default is the "posts" directory. The side menu configuration should point to these articles, including the directory (e.g. "/thissite/why"). The posts can include markdown and HTML, and the file name should end in ".md". Create in the "posts" directory your directories and your content. The content should be in markdown format and end with ".md"

![Posts](post-category-content.webp)


The content should start with a header that provides needed information for the blog page.

```json
    ---
    title: 'Why is this needed?'
    author: Robert Smith
    date: '2020-08-18T07:00:00.000Z'
    blog_image: 
    ---
```

The application takes the header information and passes to the Layout component via a "data" prop. The header information in the markdown files can be changed, such as adding new metadata, as needed.

![Layout Header](Layout-headerData.webp)

>For a guide to creating markdown files, go to the [Markdown Guide](/addtl/markdown-p1)



## Images
The images should follow the same directory structure as defined earlier for the posts, as the application will look for the image to be in the same subdirectory structure as the content was. The photos must be in the "public" directory.

![Images](pics-categories-images.webp)


 In the markdown, only the image name needs to be specified. 
 
 ![Image Example](image-example.webp)

 ## Note: Converting images to WebP
It's recommended to convert images to the WebP format to decrease the file size and the time to render images. A utility has been provided to convert jpg and png images in the public directory to the webp format. To convert the images, from a terminal window cd to your project directory and run the following command.
 ```bash
npm run imageConvert
```

Be sure to update the blog content to reflect that the images end with .webp extension.


[Additional information on WebP](https://web.dev/serve-images-webp/)

[Which browsers support WebP](https://caniuse.com/#search=webp)


## Gotchas

The application will render HTML as well as markdown. If you have an issue with the page, links, etc., check for HTML errors such as missing tags in your content. HTML tag issues within the content will cause the page to render incorrectly.


# Styling

If you're happy with the styling of the blog, then this section can be skipped. If you'd like to tweak the blog's layout or styling, then this section is for you.


## Styling
The styling for this blog is set by the following: 

1. constants/theme.js
2. components/meta.js
3. components/Layout.js


### Material UI Theme.js
Constants/theme.js provides styling for the Material UI within this application. Material UI is used primarily for the application bar and the side menu.

![Material UI theme](theme-material-UI.webp)

[Material UI Information](https://material-ui.com/)

### Components/meta.js
Global styles reside in "components/meta.js"
![Meta.js](metaJs.webp)

### Components/Layout.js
Components/Layout.js is the where the design and styling for the blog  resides, which includes the use of styled-jsx.
![Layout.js and Style JSX](styled-jsx.webp)

[Information on Styled JSX](https://github.com/vercel/styled-jsx)


## Reference Information

[NextJS - Styling](https://nextjs.org/blog/styling-next-with-styled-jsx)

[NextJS - Built in CSS Support](https://nextjs.org/blog/styling-next-with-styled-jsx)


# Reference

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


