import Image from 'next/image'
import Link from 'next/link'
import Filters from "./filters"

export default function Header() {
	return (
		<div className="container mx-auto pt-10">
			<div className="grid grid-cols-2 gap-4">

				<h1 className="font-bold text-4xl text-blue-500">
					<Link href="/">Monster Manager</Link>
				</h1>

				<ul className="grid grid-cols-2">
					<li>
						<Link href="/">Monster List</Link>
					</li>
					<li>
						<Link href="/manager" passHref>
							<>
								<a>View Encounter</a>
								<Image
									src="/images/wyvern.svg"
									alt="Monster Manager Logo"
									width={25}
									height={25}
								/>
								{/* <span>{encounter.length}</span> */}
							</>
						</Link>
					</li>
				</ul>
			</div>

			<Filters/>
		</div>
	)
}