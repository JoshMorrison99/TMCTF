import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import styles from "../styles/Home.module.css";
import { Box, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className={styles.avatar}>
        <Image src="/avatar.png" width={240} height={263} />
      </Box>
      <Box mt={2} className={styles.center}>
        <Typography variant="h4" className={styles.name}>
          Steve Underwood
        </Typography>
      </Box>
      <Stack className={styles.stacked} direction="row" spacing={2}>
        <Typography variant="h6" color={"white"}>
          MongoDB
        </Typography>
        <Typography variant="h6" color={"white"}>
          Express
        </Typography>
        <Typography variant="h6" color={"white"}>
          React
        </Typography>
        <Typography variant="h6" color={"white"}>
          Node
        </Typography>
      </Stack>
    </>
  );
}
