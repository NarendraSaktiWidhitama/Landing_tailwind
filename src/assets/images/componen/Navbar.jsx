const Navbar = () => {
  return (
    <div className="Navbar fixed w-full transition-all py-4">
        <div className="container mx-auto px-4">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo">
                    <h1 className="text 2x1 font-bold">Ngoding.</h1>
                    </div>
                    <ul className="flex gap-12">
                        <li>
                            <a href="#" className="font-medium opacity-75">
                                beranda
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-medium opacity-75">
                                tentang kami
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-medium opacity-75">
                                layanan
                            </a>
                        </li>
                        <li>
                            <a href="#" className="font-medium opacity-75">
                                proyek
                            </a>
                        </li>
                    </ul>
                    <div className="social">
                        <a href="#" className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all">social media</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar