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
            "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn\n" +
            "NhAAAAAwEAAQAAAYEAzmcMW20TAoqdq/c6h0QWQ0c4qdqHnWigGWi8j7R4beyKBUTKFBHh\n" +
            "VOKBcE9bzG7kyr1/qJeWAOY9OmP0p3s3G6YCeTsujrWf0VWk1h3Ai4Q8NfsWwYoVcwM4O/\n" +
            "3KwRph4/Oq/MfN4NCuHsYh8L+EStFtjmUUjwHQmc45pjxUND4Q9KuvmBiI3AxwwD2VLY+X\n" +
            "6NKIAbEiA+njndwSLLPBf4Vl3zJSPnQdYeo0714j7y5FWzwFKDGJKVmFRi2aU1HEVKZK/G\n" +
            "uCND1ayHi+NAR2BMdB/WPLHrd35nXBhcKJaBn2vab05FiP2Gc32Xp5qooEUlpgiXJaXuwP\n" +
            "ZULdULe+JvcatgGbjAtHa4ukpWICiHvnsa/comXNT6/+S2ulGAwv4zOMAGELRcF6e7m0qE\n" +
            "cPBRca84QD/u1yHO/F35gxtqs4RO7DNNIlyCE/Q5T8QOVhOipDNl/iuvzHdFbWnqbBsLA8\n" +
            "SEMoet2HVKWZz3ZRsbwLd1h1twdfxJl2vgSHQI29AAAFgMOMeDzDjHg8AAAAB3NzaC1yc2\n" +
            "EAAAGBAM5nDFttEwKKnav3OodEFkNHOKnah51ooBlovI+0eG3sigVEyhQR4VTigXBPW8xu\n" +
            "5Mq9f6iXlgDmPTpj9Kd7NxumAnk7Lo61n9FVpNYdwIuEPDX7FsGKFXMDODv9ysEaYePzqv\n" +
            "zHzeDQrh7GIfC/hErRbY5lFI8B0JnOOaY8VDQ+EPSrr5gYiNwMcMA9lS2Pl+jSiAGxIgPp\n" +
            "453cEiyzwX+FZd8yUj50HWHqNO9eI+8uRVs8BSgxiSlZhUYtmlNRxFSmSvxrgjQ9Wsh4vj\n" +
            "QEdgTHQf1jyx63d+Z1wYXCiWgZ9r2m9ORYj9hnN9l6eaqKBFJaYIlyWl7sD2VC3VC3vib3\n" +
            "GrYBm4wLR2uLpKViAoh757Gv3KJlzU+v/ktrpRgML+MzjABhC0XBenu5tKhHDwUXGvOEA/\n" +
            "7tchzvxd+YMbarOETuwzTSJcghP0OU/EDlYToqQzZf4rr8x3RW1p6mwbCwPEhDKHrdh1Sl\n" +
            "mc92UbG8C3dYdbcHX8SZdr4Eh0CNvQAAAAMBAAEAAAGABs+Cql+igXJ2em6peT4nZ+fpOD\n" +
            "2UPP7vTXdVxX4kfSgRc9QNwPTIFSd2MvEDa+760K/JDxSVaAkw2wTiVUZtDpX/PeXUhvP6\n" +
            "RouHaWNI77GY1QUofpFiXM2t5NjegFmxAjcPnNCw++qW3EAYbZu8L0XS0iCGuaNLMVALOe\n" +
            "+CrciggZpKrH+ewHgOnmFJ01uKHS4ZO8kPAMcOci6JUP1LdLw/nMpJyXLGZ201evKFyAYk\n" +
            "VrrXxrg/uOQR0Dt//KDVhOZn9Yr8zfa0b52cIhW6MhkOwCOMQ0uMnaG1O8NIc3rGDRTNzE\n" +
            "eNX4vTkKL5A8pcfoO7eFiU4uQZBE+B+G7GzwJJBXcjK4i8lIiUZY/ooJnACBVaHO1XTU5l\n" +
            "oBTfEPXHYSR1FNBx9i/1Fp0MOPjXXK4koYFgW2XrPb7psBjlXZ+EmG3CsoTfRuOdbBEPcW\n" +
            "wop4QdrLFHu2mTRIoXmOddAmZjk7olM0KBiKHJMAfCiuErN8AOoeCYXeoJOpdc/DZHAAAA\n" +
            "wH+p4xXGx3x7vmJc91TsTjkgQRF/E0uLlMOJTQi58BgAL6SYpAvxKVjsmicNImSPhh4lNV\n" +
            "D5i5w2gQLdEgDoDg/r5k0GxPpGYWA2dyIR1YhpnKHtuF3tGJ2GgBEDU+paOYAM3j2scqHX\n" +
            "eH3mxmJ64tlHwadcnYOys1OwDw81QjGXYUdbWM2N4gBsX2bAjwlzjfmF3s+DdwpppnvM9I\n" +
            "9gJxJ52X8VdkTfolhjnunY8UsHB+/oyaI2fQk6bQi4ltF2xwAAAMEA02YlZicr7d+rlpbY\n" +
            "qC1uuHK6pNvjPy76Adj4F4XOJKQ5BBwt1oN+4SvKu3ZQXZyA8z9WtYlGHvi8H5B/f/aXbu\n" +
            "I31hEov2f4d10RD5K4D0X2alYsq/2fIfOrYHHpal/pa/jXawTHt6c8A4hujvcbyfgy9pQo\n" +
            "EhQDzfwswjXxXYDN7Clmuqe/leE+duVxyodG/OtcbR7wETyLy2yt2whPbJv0TLl9NLQT0L\n" +
            "bNOkYcD2dkMNvYTxv+VH3lmYq0h1HbAAAAwQD58wm21ALSWdlM/IDH0RODHF/mykUtJ4xB\n" +
            "RFAIqfjowMqWGqAYvbofCztXmrmEZ3i7W3CS2ozD8qA7KGszGawKwoxeDlLgEEPaaj/BGe\n" +
            "hz1r+E3QIlO3bY83BHbo7kFmxbbdHZyCLOkiHA6/saEwDXntb7kx+bXsVq7jg35C3wDoK9\n" +
            "WmN84VKh5YXWwA3PBfVXuy30w6ZnENRbvxyDGw2cSRUBbjaPpwTuQsDEMSXfcyAIt+DzSW\n" +
            "fje2E9+ecirkcAAAALcm9yeUByZXN1bWU=\n" +
            "-----END OPENSSH PRIVATE KEY-----\n"}
        </pre>
      </Box>
    </>
  );
}
