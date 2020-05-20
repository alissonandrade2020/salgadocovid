import React from "react"
import { Typography, makeStyles, Link } from "@material-ui/core"

import CreateIcon from "@material-ui/icons/Create"
import FavoriteIcon from "@material-ui/icons/Favorite"

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 10,
    padding: theme.spacing(3, 2),
    backgroundColor: "#006e9f",
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textPrimary" align="center">
        {"© 2020 "}
        <Link color="textPrimary" href="http://www.salgadosaofelix.pb.gov.br/">
          Prefeitura Municipal de Salgado de São Félix - PB
        </Link>
      </Typography>

      <Typography align="center">
        <CreateIcon />
        com
        <FavoriteIcon />
      </Typography>
    </footer>
  )
}
