import { ArtistCardPropsInterface } from '@/interfaces/props/artistCard.interface'
import { chakra, Box, Image, Heading } from '@chakra-ui/react'

const ArtistCard = ({ artist }: ArtistCardPropsInterface) => {
  return (
    <chakra.a href={`/artist/${artist.id}`}>
      <Box
        size={'lg'}
        pb={'4'}
        border={'solid'}
        borderWidth={'thin'}
        borderRadius={'lg'}
        borderColor={'gray.800'}
        shadow={'lg'}
        overflow={'hidden'}
        _hover={{
          transform: 'scale(1.05)',
        }}
      >
        <Image
          className="artist-image-url"
          src={artist.imageUrl}
          alt={artist.name}
          h="52"
          w="full"
          objectFit={'cover'}
        />
        <chakra.div className="artist-info" pt={4} px={4}>
          <Heading as={'h3'} size={'sm'}>
            {artist.name}
          </Heading>
        </chakra.div>
      </Box>
    </chakra.a>
  )
}

export default ArtistCard
