import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import styles from "../chapter.module.css";

export default function Ch2() {
    return (
        <>
            <ChapterHeader
                currentChapter={chapters.two}
                style={styles.chapterHeader} />
        </>
    );
}