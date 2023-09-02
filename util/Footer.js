import Image from "next/image"
import cc from "@/public/cc-logo.svg"
import by from "@/public/cc-by.svg"
import nc from "@/public/cc-nc.svg"

export default function Footer() {
    return (
        <footer>

            <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.7em',
            }}>
                <Image
                    src={cc}
                    height={20}
                    alt=""
                />
                &nbsp;
                <Image
                    src={by}
                    height={20}
                    alt=""
                />
                &nbsp;
                <Image
                    src={nc}
                    height={20}
                    alt=""
                />
            </div>
            by&nbsp;
            <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/shanfan">
                Shanfan Huang
            </a>
            &nbsp;and licensed under&nbsp;
            <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank">
                CC BY-NC 4.0
            </a>

        </footer>
    )
}