import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import PrimLogo from "../../assets/logo-prim.svg";
import { Input } from "../../components/Form/Input";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

export const LogIn = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => console.log(data);

  return (
    <Flex
      alignItems="center"
      padding="10px 15px"
      color="white"
      height="100vh"
      bgGradient="linear(to-r, purple.800 65%, white 35%)"
    >
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
      >
        <Grid w="100%" paddingLeft="100px">
          <Image src={PrimLogo} alt="doit" boxSize="120px" />
          <Heading as="h1">O jeito fácil, grátis</Heading>
          <Text>
            Flexível e atrativo de gerenciar
            <b>seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          onSubmit={handleSubmit(handleSignIn)}
          as="form"
          mt="4"
          w="50%"
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack spacing="5" mt="6">
            <Input
              icon={FaEnvelope}
              {...register("email")}
              label="Login"
              type="email"
              error={errors.email}
              placeholder="Digite seu login"
            />
            <Input
              icon={FaLock}
              {...register("password")}
              error={errors.password}
              type="password"
              placeholder="Digite sua senha"
            />
          </VStack>
          <Button type="submit">Entar</Button>
        </Grid>
      </Flex>
    </Flex>
  );
};
