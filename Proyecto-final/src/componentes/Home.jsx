import '../css/Home.css'

function Home() {


    return (
        <>
            <div id='carusel'>
                <h1 id='titHome'>Bienvenidos a CabañasParaTodos</h1>

                <div id="carouselExampleCaptions" className="carousel slide container">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <img src="https://www.decoora.com/wp-content/uploads/2017/10/caba%C3%B1as-de-madera.jpg" className="d-block w-100" alt="productos para la venta" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Alquilres de cabañas</h5>
                                <p>Alquila una cabaña para tu familia.</p>
                            </div>
                        </div>
                        <div className="carousel-item text-center">
                            <img src="https://th.bing.com/th/id/R.a8d8547c45a20f23659e5dbcc4c973d0?rik=NJaRNBWWXFnvzw&riu=http%3a%2f%2fargentinacabanas.com%2flacumbrecita%2ffotos%2fwaldhuetten%2f01.jpg&ehk=vC34ZggA75SVr2tvoXAP8Om2nY%2b%2fhQlx%2b83NQp7MADU%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="productos para la venta" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Reserva tu cabaña</h5>
                            </div>
                        </div>
                        <div className="carousel-item text-center">
                            <img src="https://th.bing.com/th/id/R.8ede15173cb0025745c7fecee2ad3cbe?rik=l%2fDqdqEPpIZDmw&pid=ImgRaw&r=0" className="d-block w-100" alt="productos para la venta" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Precios Accesibles</h5>
                                <p>Confia en Nosotros</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div id='carusel'>
                <h2 id='titHome'>
                    ¿Quienes somos?
                </h2>
                <p>
                    CabañasParaTodos es tu portal de confianza para encontrar y reservar la cabaña perfecta para tus vacaciones. Con una amplia selección de cabañas en todo Córdoba, estamos comprometidos a ayudarte a encontrar el alojamiento ideal para tu próximo viaje.
                </p>

                <h2 id='titHome'>
                    ¿Por qué elegir CabañasParaTodos?
                </h2>
                <p>
                    1.Variedad: Ofrecemos una amplia gama de cabañas en diversas ubicaciones de Córdoba, desde las Rio Ceballo hasta la Carlos Paz.
                </p>
                <p>
                    2.Calidad: Todas nuestras cabañas son inspeccionadas y clasificadas para garantizar que cumplen con nuestros altos estándares de calidad.
                </p>
                <p>
                    3.Reserva fácil: Nuestro proceso de reserva es sencillo y seguro. Puedes reservar tu cabaña ideal en solo unos pocos clics.
                </p>
                <p>
                    4.Atención al cliente: Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier pregunta o problema que puedas tener.
                </p>

                <p id='textFooter'>
                    En CabañasParaTodos, creemos que todos merecen unas vacaciones relajantes. Por eso, trabajamos duro para hacer que la reserva de tu cabaña sea lo más fácil posible. ¡Esperamos verte pronto!
                </p>
            </div>
        </>
    )
}

export default Home