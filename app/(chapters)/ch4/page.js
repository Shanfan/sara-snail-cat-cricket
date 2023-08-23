import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";

export default function Ch4() {
    return (
        <>
            <ChapterHeader
                currentChapter={chapters.four}
                style="chapterHeader"
            />
        </>
    );
}