const BlogButton = props => {
  return (
    <div>
      <a href={props.href} className="blog_button_a">
        <button className="blog_button ">{props.children} </button>
      </a>
      <style jsx>
        {`
          .blog_button {
            background-color: #4791db;
            color: white;
            border: black;
            padding: 15px 32px;
            margin-top: 1rem;
            text-align: center;
            text-decoration: none;
            display: block;
            font-size: 0.75rem;
            border-radius: 4px;
            box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2),
              0 4px 12px 0 rgba(0, 0, 0, 0.19);
            position: relative;
            justify-content: center;
            align-items: center;
          }

          .blog_button:hover {
            box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
              0 17px 50px 0 rgba(0, 0, 0, 0.19);
            background-color: #1976d2;
          }
          .blog_button_a {
            color: white;
            font-size: 0.8rem;
            padding: 0;
            justify-content: center;
            justify-content: center;
          }

          .blog_button_a:hover {
            color: lightgrey;
          }
        `}
      </style>
    </div>
  )
}

export default BlogButton
