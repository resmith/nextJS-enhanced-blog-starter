import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listTitleWrapper: {
    paddingRight: '0px',
  },
  listTitle: {
    fontSize: '.45rem',
  },
  listItem: {
    padding: '0px',
    paddingLeft: theme.spacing(3),
    // '&:hover': {
    //   backgroundColor: "#F0F0F0",
    // },
  },
  listItemText: {
    fontSize: '6px',
  },
}))

const ListHelper = ({ list, index, openList, openListHandler }) => {
  const classes = useStyles()
  const open = index === openList

  const [visible, setVisible] = React.useState(false)
  const handleVisible = toggle => {
    setVisible(toggle)
  }

  return (
    <List component="nav" className={classes.root}>
      <ListItem
        button
        onClick={() => openListHandler(index)}
        key={list.title}
        className="listTitleWrapper"
        onMouseEnter={() => handleVisible(true)}
        onMouseLeave={() => handleVisible(false)}
      >
        <ListItemText primary={list.title} className={classes.listTitle} />
        {visible && open ? <ExpandLess /> : null}
        {visible && !open ? <ExpandMore /> : null}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding dense>
          {list.listAndURLs.map(item => {
            return (
              <ListItem
                button
                component="a"
                href={item.listUrl}
                className={classes.listItem}
                key={item.listTitle}
              >
                <ListItemText
                  primary={item.listTitle}
                  className={classes.listItemText}
                />
              </ListItem>
            )
          })}
        </List>
      </Collapse>
      <style jsx>
        {`
          .MuiListItem-gutters {
            padding-right: 2px;
          }

          ul {
            list-style: initial;
            margin-left: 0.25rem;
            `}
      </style>
    </List>
  )
}

export default ListHelper
