import Typography from '@material-ui/core/Typography'

import ListHelper from './ListHelper'
import SideMenu from '../constants/SideMenu'

export default function PageSideMenu() {
  const sideList = SideMenu()
  const [openList, setOpenList] = React.useState(0)

  const openListHandler = (listOpened) => {
    setOpenList(listOpened)
  }

  return (
    <div className="sideMenuWrapper">
      <Typography variant="h6" noWrap>
        {sideList.map((list, index) => {
          return (
            <ListHelper
              list={list}
              key={list.title}
              index={index}
              openList={openList}
              openListHandler={openListHandler}
            />
          )
        })}
      </Typography>
      <style jsx>
        {`
          .sideMenuWrapper {
            margin: 0.25rem;
            padding: 0.25rem;
            width: 150px;
          }
        `}
      </style>
    </div>
  )
}
