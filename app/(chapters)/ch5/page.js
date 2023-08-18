import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import styles from "../chapter.module.css";

export default function Ch5() {
    return (
        <>
            <ChapterHeader
                currentChapter={chapters.five}
                style={styles.chapterHeader} />
        </>
    );
}