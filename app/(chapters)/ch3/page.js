import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import styles from "../chapter.module.css";

export default function Ch3() {
    return (
        <>
            <ChapterHeader
                currentChapter={chapters.three}
                style={styles.chapterHeader} />
        </>
    );
}