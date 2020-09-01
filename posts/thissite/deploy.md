---
title: 'How to use this code'
description: 'The technologies this site was built on including NextJs, React, Brevifolia'
author: Robert Smith
date: '2020-08-18T07:00:00.000Z'
blog_image:
next_button_path: /thissite/reference
---

The features I was looking for in deploying to a host were 1) simple deployment process and 2) low-cost. My assumption going in was AWS S3 would be the best option.

## Comparison of this site on AWS S3 vs. Vercel
AWS S3 was the hosting site I had initially in mind. I ran into an issue though on the "not found pages" that was a deal-breaker for AWS S3. In addition to this, the ease-of-deployment to Vercel and it's low cost of hosting swayed the decision to use Vercel.

### AWS Page Not Found
![Aws Page Note Found](aws-page-not-found.webp)

### Vercel Page Not Found
![Vercel Page Note Found](vercel-page-not-found.webp)


## Deploy to Vercel
Vercel is the maker of NextJs and the defacto place to host NextJS code. The deployment is integrated with your code via GitHub.  Whenever there is a push to the master branch, the code is automatically deployed to Vercel. It's a simple, clean deployment process and there is a no-cost tier.

![Vercel pricing](vercel-pricing.webp)
[Link to Vercel Pricing](https://vercel.com/pricing)

Instead of detailing the deployment process to Vercel, the NextJS and Vercel documentation already do an excellent job of detailing the deployment process.

[NextJS - Deployment Tutorial](https://nextjs.org/learn/basics/deploying-nextjs-app)

[NextJS - Deployment Doc](https://nextjs.org/docs/deployment)

[Vercel - Deployment of NextJs](https://vercel.com/guides/deploying-nextjs-with-vercel)

[Vercel - Deployment Solution](https://vercel.com/solutions/nextjs)
