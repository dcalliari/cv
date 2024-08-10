import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Daniel Calliari | Web Developer",
	description:
		"Desenvolvedor impetuoso, solucionador de problemas e constante aprendiz. Comprometido em usar tecnologia para criar soluções práticas. Entusiasmado por programação, inovação e trabalho em equipe. Buscando novos desafios e oportunidades no campo do desenvolvimento de software",
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
