import React, { useEffect } from 'react'
import { chakra, Heading, SimpleGrid, Skeleton } from '@chakra-ui/react'
import { ArtistInterface } from '@/interfaces/artist.interface'
import ArtistCard from '../common/ArtistCard'
import { mockTopArtists } from '@/utils/mocks/artists.mock'

const TopArtists = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [artists, setArtists] = React.useState<ArtistInterface[]>([])

  useEffect(() => {
    setTimeout(() => {
      setArtists(mockTopArtists)
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <chakra.div className="top-artists" w={'100%'}>
      <Heading as={'h2'} size={'lg'}>
        Top Artists
      </Heading>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={4} mt={8}>
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
        {/* skeletons for loading */}
        {isLoading &&
          [0, 1, 2, 3].map((_value, index) => (
            <Skeleton
              key={index}
              className="artist-card-skeleton"
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

export default TopArtists
