import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";

export default function Ch2() {
    return (
        <>
            <ChapterHeader
                currentChapter={chapters.two}
                style="chapterHeader" />
        </>
    );
}