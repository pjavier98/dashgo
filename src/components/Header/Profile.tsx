import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align={"center"}>
      <Box mr={"4"} textAlign={"right"}>
        <Text>Pedro Javier</Text>
        <Text color={"gray.300"} fontSize={"small"}>
          pjpc@outlook.com.br
        </Text>
      </Box>

      <Avatar
        size={"md"}
        name={"Pedro Javier"}
        src={"https://github.com/pjavier98.png"}
      />
    </Flex>
  );
}
