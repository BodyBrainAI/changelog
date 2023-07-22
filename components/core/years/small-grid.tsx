import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IGridProps } from "./grid-interfaces";

const SmallGrid = (props: IGridProps) => {
  const { changelogs } = props;

  return (
    <HStack height="100%">
      <Box width="100%">
        <motion.div
          layoutId={props.isFirstItem ? changelogs[0].slug : ``}
          initial={{
            scale: 1,
          }}
          transition={{
            duration: 0,
          }}
        >
          <Image
            src={changelogs[0]?.imageUrl}
            alt={changelogs[0]?.slug}
            minHeight={["176px", "176px", "360px"]}
            height="100%"
            objectFit={"cover"}
            loading="lazy"
          />
        </motion.div>
      </Box>
      <VStack width="176px" height="100%">
        {changelogs.slice(1, changelogs.length).map(({ imageUrl, slug }, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt={slug}
            height="100%"
            objectFit={"cover"}
            loading="lazy"
          />
        ))}
      </VStack>
    </HStack>
  );
};

export default SmallGrid;
