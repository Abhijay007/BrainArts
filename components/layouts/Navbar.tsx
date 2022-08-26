import React from 'react'
import {
  useColorModeValue,
  useDisclosure,
  chakra,
  Flex,
  HStack,
  Button,
  Box,
  IconButton,
  VStack,
  CloseButton,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import GridWrapper from '@/components/wrapper/GridWrapper'
import { Image } from '@chakra-ui/react'

const Logo = () => (
  <Image
    src="https://user-images.githubusercontent.com/64387054/186846343-b2e17ad3-a518-42ea-ac35-ce38b66fdc69.png"
    alt="brainArts logo"
  />
)

function Navbar() {
  const mobileNav = useDisclosure()

  return (
    <GridWrapper columns={3}>
      <React.Fragment>
        <chakra.header w="full" px={{ base: 2, sm: 4 }} py={4}>
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a href="/" display="flex" alignItems="center">
                <Logo />
              </chakra.a>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={4}
                mr={1}
                color="brand.500"
                display={{ base: 'none', md: 'inline-flex' }}
              >
                <chakra.a href="/aboutus" variant="ghost">
                  About us
                </chakra.a>
                <chakra.a href="/marketplace" variant="ghost">
                  Marketplace
                </chakra.a>
                <chakra.a href="/events" variant="ghost">
                  Events
                </chakra.a>
              </HStack>
              <Button variant={'outline'} colorScheme="gray" size="md">
                Connect Wallet
              </Button>
              <Box display={{ base: 'inline-flex', md: 'none' }}>
                <IconButton
                  display={{ base: 'flex', md: 'none' }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue('gray.800', 'inherit')}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? 'flex' : 'none'}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={useColorModeValue('white', 'black')}
                  spacing={3}
                  rounded="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <chakra.a href="/docs" variant="ghost">
                    Docs
                  </chakra.a>
                  <chakra.a href="/marketplace" variant="ghost">
                    Marketplace
                  </chakra.a>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    </GridWrapper>
  )
}

export default Navbar
