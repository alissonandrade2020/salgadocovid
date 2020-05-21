import React, { useEffect, useState } from "react"
import { Typography, Box, Grid } from "@material-ui/core"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Title from "../components/Title"
import DadoCard from "../components/DadoCard"

import olivedos from "../../static/salgadobanner.png"
import paraiba from "../../static/paraiba.png"
import brasil from "../../static/brasil.png"

export default function Numeros() {
  const [brazil, setBrazil] = useState({})
  const [pb, setPb] = useState({})
  const [oli, setOli] = useState({})

  useEffect(() => {
    fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil")
      .then(res => res.json())
      .then(res => {
        const { cases, confirmed, deaths, recovered, updated_at } = res.data

        setBrazil({
          title: "Brasil",
          confirmed,
          cases,
          deaths,
          recovered,
          updated_at,
        })
      })
      .catch(err => console.log(err))

    fetch(
      "https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pb"
    )
      .then(res => res.json())
      .then(res => {
        const { cases, confirmed, deaths, refuses, date } = res.results[0]

        setPb({
          title: "Paraíba",
          confirmed,
          cases,
          deaths,
          refuses,
          updated_at: date,
        })
      })
      .catch(err => console.log(err))

    fetch(
      "https://brasil.io/api/dataset/covid19/caso/data/?is_last=True&city_ibge_code=2513109"
    )
      .then(res => res.json())
      .then(res => {
        if (res.results.length > 0) {
          const { confirmed, deaths, date } = res.results[0]

          setOli({
            title: "Salgado",
            confirmed,
            cases: "Sem informação",
            deaths,
            recovered: "Sem informação",
            updated_at: date,
          })
        } else {
          setOli({
            title: "Salgado",
            confirmed: 0,
            cases: 0,
            deaths: 0,
            recovered: 0,
            updated_at: new Date(),
          })
        }
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header />
      <Box m={2}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Title title="Números atuais da COVID-19" />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <DadoCard image={olivedos} data={oli} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DadoCard image={paraiba} data={pb} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DadoCard image={brasil} data={brazil} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <Typography align="right">(Fonte: Ministério da Saúde)</Typography>
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}
