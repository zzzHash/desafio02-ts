import { Center, Input, Box } from "@chakra-ui/react";
import { login } from "../services/login";
import { SubmitButton } from "./SubmitButton";

export const Card = () => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="15px"
      width="400px"
      gap="10px"
      display="flex"
      flexDirection="column"
    >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <SubmitButton onClick={login} />
      </Center>
    </Box>
  );
};
