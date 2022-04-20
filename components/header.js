import Image from 'next/image'
import Link from 'next/link'
import Filters from "./filters"

export default function Header() {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-2 gap-4">

				<h1>
					<Link href="/">Monster Manager</Link>
				</h1>

				<ul className="nav nav-tabs nav nav-tabs navbar-right">
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
									width={50}
									height={50}
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