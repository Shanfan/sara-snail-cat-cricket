import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";

export default function Ch5() {
    return (
        <>
            <ChapterHeader
                currentChapter={chapters.five}
                style="chapterHeader"
            />
        </>
    );
}