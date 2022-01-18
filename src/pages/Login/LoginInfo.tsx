import { Grid, Image, Heading, Text } from "@chakra-ui/react";
import PrimLogo from "../../assets/logo-prim.svg";

export const LogInInfo = () => {
  return (
    <Grid w={["100%", "100%", "50%", "40%"]} paddingLeft="0px">
      <Image
        src={PrimLogo}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <Heading as="h1" mt="4">
        O jeito fácil, grátis
      </Heading>
      <Text w={["150px", "250px", "350px"]}>
        Flexível e atrativo de gerenciar
        <b> seus projetos em uma única plataforma</b>
      </Text>
    </Grid>
  );
};
