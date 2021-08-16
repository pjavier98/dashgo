import { Box, Button, HStack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack
      direction={"row"}
      spacing={"6"}
      mt={"8"}
      justify={"space-between"}
      align={"center"}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing={"2"}>
        <Button
          size={"sm"}
          fontSize={"xs"}
          width={"4"}
          colorScheme={"pink"}
          disabled
          _disabled={{ bg: "pink.500", cursor: "default" }}
        >
          1
        </Button>
        <Button
          size={"sm"}
          fontSize={"xs"}
          width={"4"}
          bg={"gray.500"}
          _disabled={{ bg: "gray.700", cursor: "default" }}
        >
          2
        </Button>
        <Button
          size={"sm"}
          fontSize={"xs"}
          width={"4"}
          bg={"gray.500"}
          _disabled={{ bg: "gray.700", cursor: "default" }}
        >
          3
        </Button>
        <Button
          size={"sm"}
          fontSize={"xs"}
          width={"4"}
          bg={"gray.500"}
          _disabled={{ bg: "gray.700", cursor: "default" }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}
