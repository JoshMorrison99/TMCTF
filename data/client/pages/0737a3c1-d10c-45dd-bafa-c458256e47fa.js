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
            "b3BlbnNzaC1rZXktdjEAAAAACmFlczI1Ni1jdHIAAAAGYmNyeXB0AAAAGAAAABB0CjlN0G\n" +
            "qwZt95T4Be4jNfAAAAEAAAAAEAAAGXAAAAB3NzaC1yc2EAAAADAQABAAABgQDvLBuf+qMb\n" +
            "sllDu5DbEUd5Xvh/eFqap7SARlCNLrFWNfG4pdhkW0b8Npi/4kTY4UkdAS1v7ZKmITxp//\n" +
            "UxTukN2h3gHCXA9Na6HMNzs2/h4BJ4HyCtg6CSF945Une7HGB71PZGzSL2u33Z9mXi/Gj2\n" +
            "j+vedrLO1Vgj+NgeDUELz3dthsDT2s0EZD/eQ1AOUYEM25KBodGx6AhkGp0yOwS1TRnLR7\n" +
            "+sibm+0ZWA4nSsAPK6FcFO05QWlQicDR1g86jLYhttJ5dX5Sbl8R72dyCnejDya76dJ1Ke\n" +
            "8GO7bpHNZyztUMYu24OHHqzZN0k8fqWNQjeBUHd/rn6X6Mc/7u5TBwMmzR2MpxrT2dtyeU\n" +
            "nOZ6FIeVATJ2yIJOVO3rYmQxqEJlBhVJ92FpR9oPouJBDONl9oMDrPpfyUHnezNmSgaEMW\n" +
            "KqVI4UgHmoIO50wx3foGpw1ydBfZWpxj+b7d77kcZDk998Gi6gVFkDiOLPY5YJ9fIwaJJl\n" +
            "2+6RgYPV2u4B8AAAWQKRr44A1JMTGJdOAIe8GQwgJ27qIZlZoFh4IYUnRSVdhFKnRnF8vV\n" +
            "M/L1ixAZH45r/+PWdAxkcKx9ky/N9EAPaLLHbshpsHroQ/CPXARdvKDg1dBqyk0WIwyrNB\n" +
            "CPXX6pNCqOTGXKflImZ6vdLkEqh7JHSFTePsgGc4n4kBAVldKFvBLGo2le+ZfRSMdkP3hX\n" +
            "JRRcRUGrod4PDf04jZwUvpHZwnGFOLOkKuTLCkGfMtQ/gwGuUucU8ul7yQolPIeyeLcxdX\n" +
            "feIv91vDz50WjNMSg2DNApJcxZxUF5ND18bCGsnLiafHp1bDfDlCC6je5a+sX6oliUrBtA\n" +
            "E/LAySyhtFjP/E5BwMJ6fBeiAJQOZ64Yzu8B8pSEUUqNU5s4btoPzDMsInlHXTdhPRQcQP\n" +
            "hKflwViCq7V1XPujY617xnTVjNHdfFF+Uc4jzl/sTJrB9ntfvXZgZWK0fLdAragdfnIXcw\n" +
            "xErmtUTn6BfEONezpiOaKfKtw6tYaizQK1N4nsbcWXqN4RVwBsG0DqhoGUxK75R3s1S76z\n" +
            "l0WNHJ+Z2WiN9BVbEregxKBUqlyHo0lXmXGRr/oaX+eUlWCuHaGSexrkX3wRa5SZfG1rG5\n" +
            "+6rkNEDsm9VCEeBoMU5+KB5MG/WOvsVVXSxSPustEP84mrD7lYqskBsEUHjGoQzjQhJ9+t\n" +
            "UBSyzcDLViw46nWmQlVUf+Kin3xh1EltMhxjP35sOSUUo6lxqSvCyHApYRxd3/FOZk3K1M\n" +
            "dT3wA143TmynK5IOFm8y+n6yDfUq1RHdAiXA7TowhdoXIge+tTYgYRapyyNm5y+sfG7g4o\n" +
            "hkNwRN98aokGFJ8krGE8kRVp0DV3bROoIA80Rj0xy0uJV3VVO2z+JXC9sAhbc1fg6ADJL7\n" +
            "W0TwMWphuFEQ7YvAunt6/NzRtDeYM+8XjTGYIhrU+4Qt/QD1BBbXot70MAdTNzfreMt7wQ\n" +
            "G2Oj9XiZsBljST8ZD7714AkpN5QILJJCnpXfCHm1WMyiRnaRPXdbF31eAro/j4TjDtFUSJ\n" +
            "7AQf++CZLNB76vKW1TCRn0AQTuURiZEUb07hAj5C+5wljlJSfCP1SbghXj3SjSln1uVJnt\n" +
            "tGuw44Q+bWbYP6SuS2FPsp7k+CY0zUm2m+oPD7aNiTbmE6XEyAi8r3O4ND/qI/jG8J2G92\n" +
            "2Pj2L3+PwZpPJxAXPnrRkHq5YoNuHtifqOzq8xEowOp88aWopNNgrLzHwkIPSUVQQzCnqg\n" +
            "VkDrEBLkIa/wKbQHfzf+q8Q39k/RQ55ho//wHeb6n52sVu5zwD/rLS+1UU0yk6JjLAfQdE\n" +
            "kIcVKbN5FMUd+fMBvSs85/3biQncQI3jD2HgzMJMdgLJmuXTyPlckphXuZLYJKvBH/mLkw\n" +
            "O6zmpkF1lqO+p+e0lexViqA2jzrxikI9yE8myaxCGU0rtlXInFo96gUsXo314wJdkrMfoe\n" +
            "3hjTKQZmpg58HLlUuoabJSYwKB8p+18kG+CHxK2WNdL/dX30MDUlKLOxiigHkL6G3u+AbS\n" +
            "kOSTJqlayyxrkr3msX41ozcffkDSbXZUF9t41q+6yjjl3Bn83ptnxSkpY/nkm6MufukIjF\n" +
            "VFHFQTm54RY6bxuLe93fEummZY6ClXF0OLfrYEuXoTMoJ7I37wF2ttjcdgvEPWF3I/4nG/\n" +
            "0ra6mzsEitgHNo/qe2OijmRiIg95tobOwwDXQLA1hr24Ku3wlehUwuBzkVpAJHNnkmPgJ9\n" +
            "pnKf+N1wBe0Hmzh5B7UGVOI55ogdBtJvh9d1nMQfHruJ2SkLHs/v/JKHTHCYr7/dLyoday\n" +
            "9I6+juyL9z7m32AEEVarDg3CJOrf2ivfcLffGpGVGF4bjGQn2v3dVIXcu4AhDVmsfy10Bi\n" +
            "1xfkolu5x42S3lyn9b4KDX25tqo=\n" +
            "-----END OPENSSH PRIVATE KEY-----"}
        </pre>
      </Box>
    </>
  );
}
