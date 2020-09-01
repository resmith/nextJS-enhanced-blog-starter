const SideMenu = () => {
  return [
    {
      title: 'This Tool',
      listAndURLs: [
        { listTitle: 'Why', listUrl: '/thissite/why' },
        { listTitle: 'How', listUrl: '/thissite/how' },
        { listTitle: 'Styling', listUrl: '/thissite/styling' },
        { listTitle: 'Deploy', listUrl: '/thissite/deploy' },
        { listTitle: 'Reference', listUrl: '/thissite/reference' },
        { listTitle: 'Addtl', listUrl: '/thissite/addtl-info' },
     ],
    },    
  {
    title: 'Javascript',
    listAndURLs: [
      { listTitle: 'Accessors', listUrl: '/javascript/accessors' },
      { listTitle: 'Closures', listUrl: '/javascript/closures' },
      { listTitle: 'Hoisting', listUrl: '/javascript/hoisting' },
      { listTitle: 'Call and Bind', listUrl: '/javascript/callbind' },
      { listTitle: 'Cheatsheet', listUrl: '/javascript/cheatsheet' },
      { listTitle: 'Reference', listUrl: '/javascript/reference' },
    ],
  },
  {
    title: 'React',
    listAndURLs: [
      { listTitle: 'Introduction', listUrl: '/react/intro' },
      { listTitle: 'Market', listUrl: '/react/market' },
    ],
  },
  {
    title: 'Additional',
    listAndURLs: [
      { listTitle: 'Markdown-P1', listUrl: '/addtl/markdown-p1' },
      { listTitle: 'Markdown-P2', listUrl: '/addtl/markdown-p2' },
      { listTitle: 'Markdown-P3', listUrl: '/addtl/markdown-p3' },
      { listTitle: 'Design', listUrl: '/addtl/design' },
    ],
  },
  {
    title: 'About',
    listAndURLs: [
      { listTitle: 'Introduction', listUrl: '/about/intro' },
      { listTitle: 'Cheatsheet', listUrl: '/about/cheatsheet' },
      { listTitle: 'Version', listUrl: '/about/version' },
    ],
  }
]
}

export default SideMenu
