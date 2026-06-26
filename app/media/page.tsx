import MediaClient from "@/app/media/_components/media-client";
import {PageHero} from "@/features/shared/components/page-hero";


const MediaPage = () => {
    return (
        <div className="min-h-screen bg-background">

                <PageHero title="Media" description="Stay connected with our latest updates and resources" />
                <MediaClient />
        </div>
    )
}
export default MediaPage
