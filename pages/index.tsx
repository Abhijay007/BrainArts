import React from 'react'
import type { NextPage } from 'next'
import { chakra, VStack } from '@chakra-ui/react'
import FeaturedNfts from '@/components/landing/FeaturedNfts'
import Hero from '@/components/landing/Hero'
import TopArtists from '@/components/landing/TopArtists'
import SEO from '@/components/SEO'
import GridWrapper from '@/components/wrapper/GridWrapper'
import config from '@/config/general.config'
import ExploreNfts from '@/components/landing/ExploreNfts'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <SEO
        title={`${config.general.name} | NFT Marketplace`}
        image="/assets/banner.png"
        description={'NFT Marketplace'}
      />
      <GridWrapper columns={3}>
        <VStack spacing={8} mt={'12'} px={'4'}>
          <Hero />
          <FeaturedNfts />
          <TopArtists />
          <ExploreNfts />
          <chakra.div className="spacer" h={'24'} />
        </VStack>
      </GridWrapper>
    </React.Fragment>
  )
}

export default Home
