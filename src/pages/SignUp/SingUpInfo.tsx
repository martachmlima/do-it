import {
  Grid,
  Image,
  Heading,
  Text,
  VStack,
  Flex,
  Center,
  Box,
  theme,
} from "@chakra-ui/react";
import { FaForward } from "react-icons/fa";
import PrimLogo from "../../assets/logo-prim.svg";
import LogoMin from "../../assets/logo-secondary.svg";

export const SignUpInfo = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "40%"]}
      paddingLeft={["10px", "10px", "100px"]}
    >
      <Image
        src={PrimLogo}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <VStack spacing="14" mt={["10px", "0px"]}>
        <Flex w="100%">
          <Center borderRadius="5px" bg="white" w="50px" h="50px">
            <FaForward color={theme.colors.purple["800"]}></FaForward>
          </Center>
          <Box ml="4">
            <Heading size="lg">Agilidade</Heading>
            <Text>
              Agilize seus projetos com rapidez <br /> e muta performance
            </Text>
          </Box>
        </Flex>
        <Flex w="100%">
          <Center borderRadius="5px" bg="white" w="50px" h="50px">
            <Image src={LogoMin} w="25px" />
          </Center>
          <Box ml="4">
            <Heading size="lg">Simplicidade</Heading>
            <Text>
              Arrume seus projetos em uma <br /> interface altamente usual
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Grid>
  );
};
