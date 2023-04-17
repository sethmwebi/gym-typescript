import Logo from "@/assets/Logo.png"

const Footer = () => {
	return (
		<footer className="bg-primary-100 py-16">
			<div className="mx-auto w-5/6 gap-16 md:flex flex-1">
				<div className="mt-16 flex-[0.5] md:mt-0">
					<img alt="logo" src={Logo}/>
					<p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing, elit. Eos voluptatum magni minus similique eum, tempore velit illo consequuntur corrupti iusto facere expedita exercitationem eius eligendi qui optio porro facilis libero.</p>
					<p>&copy; Evogym All Rights Reserved.</p>
				</div>
				<div className="mt-16 flex-[0.25] md:mt-0">
					<h4 className="font-bold">Links</h4>
					<p className="my-5">Lorem ipsum, dolor.</p>
					<p className="my-5">Iusto facere expedita</p>
					<p>Minus similique eum</p>
				</div>
				<div className="mt-16 flex-[0.25] md:mt-0">
					<h4 className="font-bold">Contact Us</h4>
					<p className="my-5">consequuntur corrupti iusto facere</p>
					<p>(333)425-6825</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer