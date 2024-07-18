import "./Footer.css"
import Container from "./Container"

export default function Footer() {    
    function getYear() {
        const currentDate = new Date()
        const currentYear = currentDate ? currentDate.getFullYear() : ''
        return currentYear
    }

    return (
        <footer className="footer">
            <Container>
                Todos los derechos reservados. Arbólica. { getYear() }
            </Container>
        </footer>
    )
}