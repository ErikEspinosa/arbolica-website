import "./SocialIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"

export default function Icon(props) {
    return (
        <Link href={props.href} target="_blank" className="icon">
            <div className="icon-circle">
                <FontAwesomeIcon icon={props.type} className="icon-main" />
            </div>
        </Link>
    )
}
