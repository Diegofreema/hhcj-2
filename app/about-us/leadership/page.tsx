
import {Metadata} from "next";
import LeadershipClientPage from "@/app/about-us/leadership/leadership-client";

export const metadata: Metadata = {
    title: "Our Leadership - HHCJ Foundation",
    description: "Meet the leadership team of HHCJ Foundation",
}

export default function LeadershipPage() {
    return <LeadershipClientPage />
}
