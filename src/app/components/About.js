import "./About.css"
import Container from "./Container"
import { Inria_Serif } from "next/font/google"
import LinkPrimary from "./LinkPrimary";

const inriaSerif = Inria_Serif({ 
    weight: "700",
    subsets: ["latin"] 
  });

export default function About() {
    return (
        <section className="about">
            <Container>
                <h2 className={inriaSerif.className}>Acerca de nosotros.</h2>
                <p>
                    En Arbólica te ofrecemos una amplia variedad de muebles fabricados con madera de alta calidad y diseños vanguardistas, con estilos minimalistas, clásicos y contemporáneos.
                </p>
                <p>
                    Para nosotros la madera es un material noble y atemporal que aporta calidez y elegancia a cualquier espacio. 
                </p>
                <p>
                    Por ello, trabajamos para que tengas los muebles de la mejor calidad y diseño, sin descuidar el impacto ambiental por la deforestación, cuidando que nuestros proveedores nos brinden el código de identificación forestal para el uso de madera responsable y sostenible.
                </p>
                <p>
                    Nuestro compromiso con la naturaleza es importante, por eso, cada año, aportaremos por cada compra un arbolito que regresará a la naturaleza con el fin de reforestar nuestro bello país. Siendo nuestro cliente recibirás la invitación para que nos acompañes en el evento que organizaremos, el arbolito tendrá una etiqueta de cartón eco-friendly que servirá de abono y estará personalizada (nombre, apellido, familia o el texto que tú quieras). 
                </p>
                <p>
                    Y tú, ¿ya sabes qué tipo de mueble necesitas? 
                </p>
                <div className="links">
                    <LinkPrimary href="mailto:hola@arbolica.mx" title="¡Escríbenos!" />
                </div>
            </Container>
        </section>
    )
}