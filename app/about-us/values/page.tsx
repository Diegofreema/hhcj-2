import ValuesClientPage from "@/app/about-us/values/value-client";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Our Core Values - HHCJ Foundation",
    description: "The core values that guide HHCJ Foundation",
}

export default function ValuesPage() {
    return <ValuesClientPage />
}
