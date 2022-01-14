import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInpurProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps extends ChakraInpurProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, icon: Icon, label, ...rest },
  ref
) => {
  const inputVariation: inputVariationOptions = {
    error: "red.500",
    default: "gray.200",
    focus: "purple.800",
    filled: "green.500",
  };

  const [value, setValue] = useState("");

  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement mt="2.5" color={inputVariation[variation]}>
            <Icon />
          </InputLeftElement>
        )}
        <ChakraInput
          ref={ref}
          {...rest}
          name={name}
          bg="gray.50"
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          variant="outline"
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          size="lg"
          h="60px"
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
