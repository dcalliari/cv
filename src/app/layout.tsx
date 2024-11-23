import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Daniel Calliari | Software Developer",
	description:
		"Software engineer focused on functional solutions, specializing in TypeScript, Node and React. Experienced in leading web and mobile projects, with an interest in APIs, bots, and interactive systems. Seeking opportunities in smart cities and automation",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
