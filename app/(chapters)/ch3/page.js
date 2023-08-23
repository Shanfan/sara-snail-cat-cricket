import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";

export default function Ch3() {
    return (
        <>
            <ChapterHeader
                currentChapter={chapters.three}
                style="chapterHeader"
            />
        </>
    );
}