import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import styles from "../chapter.module.css";

export default function Ch4() {
    return (
        <>
            <ChapterHeader
                currentChapter={chapters.four}
                style={styles.chapterHeader}
            />
        </>
    );
}