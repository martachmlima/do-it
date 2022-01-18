import { Grid, Heading, VStack, Box, Text, Button } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Form/Input";

interface SignInData {
  email: string;
  password: string;
}

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignInData>;
  loading: boolean;
}

export const LogInForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const history = useHistory();
  return (
    <Grid
      onSubmit={handleSignIn}
      as="form"
      w={["100%", "100%", "40%", "40%"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0", "0"]}
    >
      <Heading size="lg">Bem vindo de volta!</Heading>
      <VStack spacing="5" mt="6">
        <Box w="100%">
          <Input
            icon={FaEnvelope}
            {...register("email")}
            label="Login"
            type="email"
            error={errors.email}
            placeholder="Digite seu login"
          />
          {!errors.email && (
            <Text ml="1" mt="1" color="gray.300">
              Exemplo: nome@email.com
            </Text>
          )}
        </Box>
        <Input
          icon={FaLock}
          {...register("password")}
          error={errors.password}
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
          bg="purple.800"
          w="100%"
          color="white"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "purple.900",
          }}
          type="submit"
        >
          Entar
        </Button>
        <Text color="gray.400">Ainda não possui uma conta?</Text>
        <Button
          bg="gray.100"
          w="100%"
          color="gray.300"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "gray.200",
          }}
          onClick={() => history.push("/signup")}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
