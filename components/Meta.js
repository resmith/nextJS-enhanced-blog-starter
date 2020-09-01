export default function Meta(props) {
  return (
    <>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

          {
            /* //TYPOGRAPHY------------------------------------- */
          }
          MuiListItem-gutters: {
            padding-left: "0px";
            padding-right: "0px";
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Work Sans', 'Helvetica Neue', Helvetica, sans-serif;
            margin-left: 0rem;
            padding-left: 0rem;
            margin-right: 0rem;
            padding-right: 0rem;
            margin-top: 1.5rem;
            padding-top: 0rem;
            margin-bottom: .25rem;
            padding-bottom: 0rem;
            text-rendering: optimizeLegibility;
          }
          .blog__body p {
            font-family: 'Roboto', 'Work Sans', 'Helvetica Neue', Helvetica, sans-serif;
            margin-left: 0rem;
            padding-left: 0rem;
            margin-right: 0rem;
            padding-right: 0rem;
            margin-top: 0rem;
            padding-top: 0rem;
            margin-bottom: 1rem;
            padding-bottom: 0rem;
            color: inherit;
            text-rendering: optimizeLegibility;
          }
          .blog__body a {
            text-decoration: none;
            color: #1565c0;
            transition: opacity 0.2s ease;
            font-size: 1rem;
            padding: 0px;
            margin: 0px;
            padding-left: 1.25rem;
          }
          .blog__body a:hover {
            transition: opacity 0.2s ease;
            opacity: 0.5;
            text-decoration-color: inherit;
          }
          .blog__body ul, ol {
            margin-top: 0rem;
            padding-top: 0rem;
            margin-bottom: .5rem;
            padding-bottom: 0rem;
            margin-left: .25rem;
            padding-right: 0;
          }
          .blog__body li {
            margin-bottom: .25rem;
          }
          .blog__body li:last-child {
            margin-bottom: 1.25rem;
          }
          blockquote *:last-child {
            margin-bottom: 0;
          }
          .blog img {
            display: block;
            max-width: 90%;
            margin-bottom: 1rem;
            object-fit: cover;
           }
            .blog__body pre {
            margin-top: 0rem;
            margin-bottom: 0rem;
           }
           .blog__body code {
            display: block;
            max-width: 90%;
            margin-left: 1.5rem;
            margin-bottom: 1.75rem;
            font-size: .8rem;
           }
           .blog__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 1.25rem;
            margin: 0 auto;
            font-size: 1rem;
            font-weight: normal;
          }
          .blog__footer h2 {
            margin-bottom: 0;
          }
          .blog__footer a {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .blog__footer a svg {
            width: 20px;
          }


          @media (min-width: 960px) {
            .blog p { font-size: 1.04rem; }
            .blog h1 { font-size: 2.2rem; }
            .blog h2 { font-size: 1.87rem; }
            .blog h3 { font-size: 1.46rem; }
            .blog h4 { font-size: 1.09rem; }
            .blog h5 { font-size: 1.04rem; }
            .blog h6 { font-size: 1.04rem; }
            .blog h1, .blog h2, .blog h3, .blog h4, .blog h5, .blog h6 {
              margin-top: 1.7rem;
              margin-bottom: .3rem;
            }
          }

          @media (min-width: 1280px) {
            .blog p { font-size: 1.05rem; }
            .blog h1 { font-size: 2.45rem; }
            .blog h2 { font-size: 2.1rem; }
            .blog h3 { font-size: 1.6rem; }
            .blog h4 { font-size: 1.23rem; }
            .blog h5 { font-size: 1.17rem; }
            .blog h6 { font-size: 1.17rem; }
            .blog h1, .blog h2, .blog h3, .blog h4, .blog h5, .blog h6 {
              margin-top: 2rem;
              margin-bottom: .5rem;
            }
           }

        `}
      </style>
    </>
  )
}
