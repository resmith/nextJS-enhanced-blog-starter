import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Constants from '../constants/Constants'

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${Constants.drawerWidth}px)`,
      marginLeft: Constants.drawerWidth,
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
}))

const BlogAppBar = ({siteTitle, handleDrawerToggle}) => {
  const classes = useStyles()

  return (
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
  )
}

export default BlogAppBar
