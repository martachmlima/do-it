import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Box,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
import { FaExclamation, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  buttonMessage: string;
  onClick: () => void;
  secondaryText: string;
}

export const ModalSuccess = ({
  isOpen,
  onClose,
  buttonMessage,
  message,
  onClick,
  secondaryText,
}: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex">
          <Center mr="1" bg="purple.500" w="30px" h="30px" borderRadius="5px">
            <FaExclamation color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            Yeesss...
          </Text>
          <Center
            onClick={onClose}
            as="button"
            ml="auto"
            bg="red.600"
            w="32px"
            h="32px"
            fontSize="lg"
            borderRadius="md"
          >
            <FaTimes color={theme.colors.white} />
          </Center>
        </ModalHeader>

        <ModalBody textAlign="center">
          <Text>
            <Box
              dangerouslySetInnerHTML={{
                __html: message,
              }}
            />
          </Text>
        </ModalBody>
        <ModalFooter flexDirection="column">
          <Button
            bg="purple.500"
            color="white"
            onClick={onClick}
            _hover={{ bg: "purple.600" }}
            h="60px"
          >
            {buttonMessage}
          </Button>
          <Text align="center" mt="4">
            <Box
              dangerouslySetInnerHTML={{
                __html: secondaryText,
              }}
            />
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};