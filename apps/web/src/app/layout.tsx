import type { Metadata } from "next";
import localFont from "next/font/local";
import { Provider } from "~/components/ui/provider";

const pretendard = localFont({
	src: "./fonts/PretendardVariable.woff2",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Fukurou",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body className={pretendard.className}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
