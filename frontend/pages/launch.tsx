import { GetServerSideProps, NextPage } from "next";
import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  launch: {
    mission: string;
    site: string;
    timestamp: number;
    rocket: string;
  };
}

const LaunchPage: NextPage<Props> = ({ launch }) => {
  const date = new Date(launch.timestamp);
  return (
    <main>
      <Heading m={2}>Next SpaceX Launch: {launch.mission}</Heading>
      <Box bg="brand.primary" w="100%" p={4} color="ui.quaternary">
        <Text>
          {launch.rocket} will take off from {launch.site} on {date.toDateString()}
        </Text>
      </Box>
    </main>
  );
};

export default LaunchPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/launches/next");
  const nextLaunch = await response.json();
  return {
    props: {
      launch: {
        mission: nextLaunch.mission_name,
        site: nextLaunch.launch_site.site_name_long,
        timestamp: nextLaunch.launch_date_unix * 1000,
        rocket: nextLaunch.rocket.rocket_name,
      },
    },
  };
};
