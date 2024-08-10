"use client";

import { PrinterIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./ui/drawer";

export const PrintDrawer = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className="fixed bottom-4 right-4 size-16 rounded-full shadow-2xl print:hidden">
					<PrinterIcon />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Move Goal</DrawerTitle>
						<DrawerDescription>Set your daily activity goal.</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 pb-0" />
					<DrawerFooter>
						<Button onClick={() => window.print()}>Print</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
};
