import React, { useEffect } from 'react';
import { LeftTopBar, UsersChat, ChatBox } from '../components';
import { VStack, Stack, Box, Flex, Text } from '@chakra-ui/react';
import { useChatContext } from '../context/chatContext';

function ChatsPage() {
  const { selectedChat } = useChatContext();

  useEffect(() => {
    document.title = 'MessageApp | Chats';
  }, []);

  return (
    <Flex w='100%' flexDirection='column' h='100vh'>
      <Stack
        spacing='0'
        direction={{ base: 'column', md: 'row' }}
        h='100%'
        overflowY='hidden'
      >
        <VStack
          d={{ base: selectedChat ? 'none' : 'flex', md: 'flex' }}
          w={{ base: '100%', md: '30%' }}
          minH={{ base: `${!selectedChat && '100vh'}` }}
          spacing='0'
          borderWidth='1px'
          borderColor='gray.200'
          borderStyle='solid'
          shadow='base'
        >
          <LeftTopBar />
          <UsersChat />
        </VStack>
        <ChatBox />
      </Stack>
    </Flex>
  );
}

export default ChatsPage;
