import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={'#6B46C1'}
      color={"white"}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}

        textAlign={'center'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2023 Asad Abdul Razaq. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/AsadAbdulRazaq3'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Facebook'} href={'https://www.facebook.com/asad.abdulrazaq.5/'}>
            <FaFacebookF />
          </SocialButton>
          <SocialButton label={'Github'} href={'https://github.com/asadrazaq3169?tab=repositories'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/asad-abdul-razaq-4b6921167/'}>
            <FaLinkedinIn />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}