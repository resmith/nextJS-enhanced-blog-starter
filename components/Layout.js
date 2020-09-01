import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import HomeIcon from '@material-ui/icons/Home'

import PageSideMenu from './PageSideMenu'
import Constants from '../constants/Constants'
import BlogButton from './BlogButton'

const drawerWidth = 155

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  appBarTitle: {
    flexGrow: 1,
  },
  home: {
    position: 'relative',
    marginLeft: 0,
    justifyContent: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default function Layout(props) {
  const { data, content, imageExist, imageSource, blogDir } = props

  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  const transformImageUri = input => {
    return blogDir === '/' ? `${blogDir}${input}` : `/${blogDir}/${input}`
  }

  const siteTitle = data.title ? data.title : Constants.siteTitle
  const siteDescription = data.description
    ? data.description
    : Constants.siteDescription

  // if (data === "404error")  return <>Page Not Found Error (404)</>
  if (!data) return <>Page Loading</>

  return (
    <div className={classes.root}>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="viewport"
          property="og:title"
          content="width=device-width, initial-scale=1"
        />
        <meta name="Description" content={siteDescription} />
      </Head>
      <HideOnScroll {...props}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open sideMenu"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.appBarTitle}>
              {siteTitle}
            </Typography>
            <div className={classes.home}>
              <IconButton
                aria-label="home"
                color="inherit"
                href="/"
                anchororigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
              >
                <HomeIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav className={classes.drawer} aria-label="drawer menu">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <PageSideMenu />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <PageSideMenu />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <section
          className={`layout ${props.pathname == 'info' && 'info_page'}`}
          style={{
            backgroundColor: `${props.bgColor && props.bgColor}`,
            color: `${props.pathname == 'info' && 'white'}`,
          }}
        >
          <article className="blog">
            {data.blog_image ? (
              <figure className="blog_image">
                <img src={data.blog_image} alt={`blog_hero_${siteTitle}`} />
              </figure>
            ) : null}
            <div className="blog__body">
              <ReactMarkdown
                source={content}
                escapeHtml={false}
                transformImageUri={transformImageUri}
              />
              {data.next_button_path ? (
                <BlogButton href={data.next_button_path}>Next</BlogButton>
              ) : null}
            </div>
            <h6 className="blog__footer">
              Written By: {data.author} on {reformatDate(data.date)}
            </h6>
          </article>
        </section>
      </main>
      <style jsx>
        {`
          .flex-container {
            display: flex;
          }
          .layout {
            display: flex;
            flex-direction: column;
          }
          .content {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            flex-wrap: wrap;
          }
          .layout .info_page {
            color: #ebebeb;
          }
          .blog {
            display: flex;
            flex-direction: column;
          }
          .blog h1 {
            margin-bottom: 0.2rem;
          }
          .blog__body span {
            margin: 1rem auto;
          }
          .blog_image {
            margin: 0.25rem;
            padding-bottom: 0.25rem;
            display: flex;
            justify-content: center;
            align-content: center;
          }
          .blog_image img {
            margin-bottom: 0;
            object-fit: cover;
            object-position: center;
          }
          .blog__info {
            padding: 1.5rem 1.25rem;
            margin: 0 auto;
            text-align: center;
          }
          .blog__info h1 {
            margin: 0 auto 0.66rem auto;
          }
          .blog__info h3 {
            margin-bottom: 0;
          }
          .blog__body {
            padding: 0 0.25rem;
            margin: 0 auto;
            margin-bottom: 1.25rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          }
        `}
      </style>
    </div>
  )
}
