import { NftCardPropsInterface } from '@/interfaces/props/nftCard.interface'
import { chakra, Box, Image, Heading, Tag, Spacer } from '@chakra-ui/react'

const NFTCard = ({ nft }: NftCardPropsInterface) => {
  return (
    <chakra.a href={`/nft/${nft.id}`}>
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
          className="nft-image-url"
          src={nft.imageUrl}
          alt={nft.title}
          h="52"
          w="full"
          objectFit={'cover'}
        />
        <chakra.div
          className="nft-info"
          display={'flex'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          pt={4}
          px={4}
        >
          <Heading as={'h3'} size={'sm'}>
            {nft.title}
          </Heading>
          <Spacer />
          <Tag variant={'outline'} size={'sm'}>
            {nft.price} {'SOL'}
          </Tag>
        </chakra.div>
      </Box>
    </chakra.a>
  )
}

export default NFTCard
