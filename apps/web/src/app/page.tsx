import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { ColorModeButton } from "~/components/ui/color-mode";
import { clinet } from "~/libs/client";

export default async function Home() {
	const hello = await clinet.index.$get().then((res) => res.text());

	return (
		<Flex
			minWidth={"svw"}
			minHeight={"svh"}
			direction={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={"4"}
		>
			<VStack>
				<Heading>Home</Heading>
				<Text>{hello}</Text>
			</VStack>
			<Flex>
				<ColorModeButton />
			</Flex>
		</Flex>
	);
}
