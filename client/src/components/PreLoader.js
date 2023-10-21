import React from 'react';
import logo from '../assets/message-solid.svg';
import { MdOutlineTask } from 'react-icons/md';
import { Image, Progress, VStack, Text, HStack, Icon } from '@chakra-ui/react';

function PreLoader() {
  return (
    <VStack
      w='100%'
      h='100vh'
      spacing='4'
      justifyContent='center'
      alignItems='center'
    >
      <Image src={logo} width='3rem' />
      <Progress size='xs' w='40%' color='blue' isIndeterminate />
      <HStack>
        <Icon as={MdOutlineTask} color='gray.400' />
        <Text fontWeight='300' color='gray.400'>
          Not End-To-End encrypted
        </Text>
      </HStack>
    </VStack>
  );
}

export default PreLoader;
