import {cn} from "@/lib/utils";

type Props = {
    text: string,
    className?: string
}

export function Blockquote({text,className} : Props) {
    return (
        <blockquote className={cn("mt-6 italic", className)}>
            &quot;{text}&quot;
        </blockquote>
    )
}
