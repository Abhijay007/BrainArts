import React from 'react'
import { chakra, Grid, GridItem, Heading } from '@chakra-ui/react'

const Hero = () => {
  return (
    <chakra.div
      h={['2xs', 'xs']}
      w={'full'}
      border={'solid'}
      borderWidth={'thin'}
      borderColor={'gray.800'}
      overflow={'hidden'}
      rounded={'lg'}
    >
      <Grid
        h="full"
        className="hero"
        backdropBlur={'5px'}
        templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
        bgGradient={`linear-gradient(to right, whiteAlpha.100 0%, whiteAlpha.50 100%)`}
      >
        <GridItem colSpan={2} p={14}>
          <Heading as="h1" size="xl" mb={4}>
            Brain Arts NFT Marketplace
          </Heading>
          <Heading as="h2" size="md" mb={4}>
            A decentralized marketplace for NFTs
          </Heading>
        </GridItem>
        <GridItem display={['none', 'none', 'block']} colSpan={1}></GridItem>
      </Grid>
    </chakra.div>
  )
}

export default Hero
