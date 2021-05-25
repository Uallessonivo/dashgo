import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textALign="right">
          <Text>Uallesson Nunes Ivo</Text>
          <Text color="gray.300" fontSize="small">
            uallessons@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Uallesson NUnes"
        src="https://github.com/Uallessonivo.png"
      />
    </Flex>
  );
}
