export default function Footer() {
    const currentDate = new Date();
    return (
        <footer>
            <p>
                &copy; Copyright Shanfan Huang <span>{currentDate.getFullYear()}</span>
            </p>
        </footer>
    )
}