import { Button } from "@chakra-ui/react";

interface onClick {
  onClick: () => void;
}

export const SubmitButton = ({ onClick }: onClick) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      Button
    </Button>
  );
};
