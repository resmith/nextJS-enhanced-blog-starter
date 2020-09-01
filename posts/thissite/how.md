---
title: 'How to use this code'
description: 'The technologies this site was built on including NextJs, React, Brevifolia'
author: Robert Smith
date: '2020-08-18T07:00:00.000Z'
blog_image:
next_button_path: /thissite/styling
---

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


## Start

To get the application up and running,

```bash
#clone the repo
git clone git@github.com:resmith/nextJS-enhanced-blog-starter

#navigate to the directory
cd nextJS-enhanced-blog-starter

#install dependencies & run dev server with npm
npm install
npm run dev

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
