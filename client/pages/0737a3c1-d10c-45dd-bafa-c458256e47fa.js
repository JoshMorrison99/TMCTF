import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <Box>
        <pre>
          {"-----BEGIN OPENSSH PRIVATE KEY-----\n" +
            "b3BlbnNzaC1rZXktdjEAAAAACmFlczI1Ni1jdHIAAAAGYmNyeXB0AAAAGAAAABCr80A2Xl\n" +
            "lSGnVsAMOFuO/dAAAAEAAAAAEAAAGXAAAAB3NzaC1yc2EAAAADAQABAAABgQDJ5HYp/jIJ\n" +
            "EdkfSz6lM6B9AJEITW7UOsWS0jvVYo09cTFiV7AajXi28TYZzB4LkP+CZLsNir1eW22u/K\n" +
            "Tib7XkoQA9rV4xb56xVT5YftRPo6eIWWuv//M0Y+p2W9qj9IYvwfL4ggUy/aRw44xPL1IJ\n" +
            "0BYSw4pA4b5lastQpFzaiyC42km6+zISoRsJuLO4ipih8bN7L0WYGzKnoqf/NM6QBrMG8H\n" +
            "qil75+LAGPw2bsH3Zt3ldK3eK4tSOckAkmf32tIkDg7puiexRaL/OODJuuE2vUTu7o2H3q\n" +
            "wbsGGJj1Hs5UugAeKx9aJ4T6/Iyb8HRV/T7CADKj0++/VkJMzPzz0C+aUx41q2Ch+Huejd\n" +
            "pxWg+wA28ibRitXKWgHbn73nIN8KH3yBBBJvR5M5ceQssKw72nBQ2qSnK22iNRVhPkfc3W\n" +
            "kHyLwyGqhDMQf+1MyRx1ZX4YKspKxN4A1Fv+oeD1EAYyl5RI4cwYYvQJs8Fs1vQdus+t0Q\n" +
            "ER6i+DZ+37hd0AAAWQnRXbBqSOrvzKTDUCSAIEGmeBftUsw1rRbCEkI8VPg3E5hUeQWn2C\n" +
            "Fspt18NEgClsqCjMpmNQr68rDT2eIxmGgkVj/Wzt0x5lWuTc8FTAl8YQijmxZcBlJcKfzk\n" +
            "kVjHbZIKJcbmscrkJan4s+fhpSyqd74n28ntCAlQxsWAmd8rYsL1Q9aIeWZ2vO+tsIuTVC\n" +
            "5gDfVYl/HEvnupdpZ6ItO6WQyH6zUc0CG3d6GV955YxkhqSJcRn4L3hqJhUT691D9L0v3d\n" +
            "ymv2HNMXLUAe3hxBYgVvso0NCg+WjHTJW368QChKPK0Ev3+8qqBBto/aDVHC07Lzbv99Wj\n" +
            "moHBPNzqetdlVy9YzAJogOAJNJZfni98HCwZpy7ioovhlAHLYTuJ2FNXF+Bkw3kfm4gllO\n" +
            "0SvF7eNpoIyg6n5fe77U8Qxz8wNbgwZnm9AY2feUoKPbD7BlWjrHjALYQLGg4JTay5esFh\n" +
            "GcHNSD9QUi5KaSOSsolgIAxbajVaiur3bV1W32mlfLE8HwA4Rblctznpp/+j0nOrFxbouA\n" +
            "RENFCpOPTPl5UmOH0Pu8gKEqfz1aku7/apq8NRrxso/xAMC7+qx4ZA+TAQ6FXWVT22gyKN\n" +
            "7SeXzyQfBEYdBs0WFBJUYei2xoV2c9SOALhJncXRXqq3SVPQIE6E1masygnggQhFr4Nse2\n" +
            "3jp14mSEuEeiWGFvKu+JjrqgmFVrisqfkD04U+vj4R4WjNKWGyxJRwb2MaZvOWe3NVMuR6\n" +
            "3lN2SUndk0sylN7M2AtXhBkjnv0W9KYk16+bmaRpuk3e/wN+TgeLNv49nqN6VZ+JJfXdAP\n" +
            "fwGH/WkKPeoQKNeHtcmMH8MfY6+nPcfelAPo2XsJFvcJuk8WDpmRYGpHzFsUcwE7uckIiL\n" +
            "xX60TK8Qb8+JlUYnB/61q4i/8OfjD9LcKB2mDDlgX4nHtYs+4Wu8vwkSABMEY3do5lTGdI\n" +
            "/RemmQc6MLqeBhGNitUuxlvXYP5iQN9vi/lMhjfgqXPhtwH8AEEE+PLKDzKZ61iiuoH8On\n" +
            "rcSs0d+Yhk6Ku9M12ZjrNnNxvl85eCSXhfLWUsGEFwjgIAcQaUz9HoqauA5yjAXE8y3nS5\n" +
            "uiqHJHXUBdRDj/1+BODusLBSFHrX828Xv1lm1gvSRlfQtCRsRkrKTfW8qTxp7ZRYAyIw6d\n" +
            "KyLtF1SBMeNFa7Uafi2/Pi7jSIXfRAaBYb9aEu7IsT9SrMHPVDrShZPitTtJdnqDCtUhFq\n" +
            "L/EgCk1LJhcFhwHiY3bDH79uzLO8vsAZ/esXgtgTGpQYDWbQjsnDXtwQHzz4vGOUVAcFIi\n" +
            "pLrRU/zENIXIvpvaxI6mFznl/MN/ymnDHMb7ozRkIBDMvjNVyCGOGTD9VFOXdAMYQz5Ohx\n" +
            "6xcTtTbMh61qVghUHJofuxAy1szaNCFNW0mg0MBvhKJr4x6Ljl1EjThVbrrTbuxKvjkVlc\n" +
            "6mm+FbxyN3BdgmzonI9chiz/O5iVorLfY6FMh+J73+CH+83A51K8WA34P2eUkFymgCDUXx\n" +
            "KWN34TU3gpzwCI8RkNpflebNdsscCndE4BBoI7JcRGFm5YX3SSOWgpRQ0/b2Fq5KlAPwp3\n" +
            "zNf7zk/ZSC69V9ONOyp9DKhTTFSO9og6kwMgUfa5RaOhHtMqOBHoQDFr5gq98Xciji+/cv\n" +
            "amiKiXKKcUVg/nkEIPj3lhx/rBIw3ANFd63iGSU6jWDSOn8Q/wq38kGMXgt8ZXzOprWLF+\n" +
            "tObXAdz6cb6yhLK5usMOhx2ZF0AlVdVP7w1B5HOcpjhyT3+agXuU6E7FelaeZFb7CK3gN9\n" +
            "8feaGFVAS9nG9QAn6jKacbn16PRo/gVqF1FbcZwaFV7u1ABS0shZMPE5WurrB1hSryI1HO\n" +
            "2EhSPed+AVc3twahWVk6tx96x7Q=\n" +
            "-----END OPENSSH PRIVATE KEY-----"}
        </pre>
      </Box>
    </>
  );
}
