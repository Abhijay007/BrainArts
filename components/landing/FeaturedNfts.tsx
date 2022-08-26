import React, { useEffect } from 'react'
import { chakra, Heading, SimpleGrid, Skeleton } from '@chakra-ui/react'
import { NftInterface } from '@/interfaces/nft.interface'
import { mockFeaturedNfts } from '@/utils/mocks/nfts.mock'
import NFTCard from '../common/NFTCard'

const FeaturedNfts = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [nfts, setNfts] = React.useState<NftInterface[]>([])

  useEffect(() => {
    setTimeout(() => {
      setNfts(mockFeaturedNfts)
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <chakra.div className="featured-nfts" w={'100%'}>
      <Heading as={'h2'} size={'lg'}>
        Featured NFTs
      </Heading>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={4} mt={8}>
        {nfts.map((nft, index) => (
          <NFTCard key={index} nft={nft} />
        ))}
        {/* skeletons for loading */}
        {isLoading &&
          [0, 1, 2, 3].map((_value, index) => (
            <Skeleton
              key={index}
              className="nft-card-skeleton"
              size={'lg'}
              h={'56'}
              pb={'4'}
              border={'solid'}
              borderWidth={'thin'}
              borderRadius={'lg'}
              borderColor={'gray.800'}
              shadow={'lg'}
              overflow={'hidden'}
              startColor="whiteAlpha.50"
              endColor="whiteAlpha.200"
            />
          ))}
      </SimpleGrid>
    </chakra.div>
  )
}

export default FeaturedNfts
