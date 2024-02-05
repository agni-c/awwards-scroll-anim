'use client';
import Image from 'next/image';
import './globals.css';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		// init locomotive scroll
		(async () => {
			const LocoMotiveScroll = (await import('locomotive-scroll'))
				.default;
			const scroll = new LocoMotiveScroll({});
		})();
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div />
			<div />
			<div />
			<div />
		</main>
	);
}
