import "./LinkPrimary.css"
import Link from "next/link"
import { Inria_Serif } from "next/font/google"

const inriaSerif = Inria_Serif({ 
  weight: "700",
  subsets: ["latin"] 
});

export default function LinkPrimary(props) {
  return (
    <Link href={props.href} className={`${inriaSerif.className} link-primary`}>
        {props.title}
    </Link>
  )
}
