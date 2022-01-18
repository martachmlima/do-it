import { Grid, Heading, VStack, Box, Text, Button } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Input } from "../../components/Form/Input";

interface SignUpData {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

interface SignUpFormProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignUpData>;
  loading: boolean;
}

export const SignUpForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: SignUpFormProps) => {
  return (
    <Grid
      onSubmit={handleSignUp}
      as="form"
      w={["100%", "100%", "40%", "40%"]}
      padding="40px 25px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0", "0"]}
    >
      <Heading size="lg">Crie sua conta</Heading>
      <VStack spacing="5" mt="6">
        <Box w="100%">
          <Input
            icon={FaUser}
            {...register("name")}
            label="Nome"
            error={errors.name}
            placeholder="Digite seu nome"
          />
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
        <Input
          icon={FaLock}
          {...register("confirm_password")}
          error={errors.confirm_password}
          label="Confirmação de senha"
          type="password"
          placeholder="Confirme sua senha"
        />
      </VStack>
      <Button
        mt="8"
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
        Finalizar Cadastro
      </Button>
    </Grid>
  );
};
