import Image from "next/image";
import mainImg from "@/public/ch1/ch1_sn06_pn00.jpg";

export default function FirstContact() {

    return (
        <div
            className="row white"
        >
            <div
                id="firstContact"
                className="narrow layers"
                style={{ padding: '15em 0 10em' }}
            >
                <div
                    id="dialog1"
                    className="speechBubble"
                    style={{
                        fontSize: '2em',
                        top: '0',
                        left: '5%',
                        transform: 'rotate(15deg)',
                        color: '#d17f69',
                        backgroundColor: '#d4f2b7',
                    }}
                >
                    VERY MUCH!
                </div>
                <div
                    id="dialog2"
                    className="speechBubble right"
                    style={{
                        top: '4em',
                        left: '0',
                        maxWidth: '15em',
                        transform: 'rotate(-5deg)',
                    }}
                >
                    Hopping. Stomping. Springing from place to place...
                    Do you not shuffle? <br />
                    Do you not attend your household?
                </div>

                <Image
                    className="panelL"
                    alt="Cat Cricket pulls Sara Snail up from the flower leaf"
                    src={mainImg}
                    style={{
                        margin: '5em, 0'
                    }}
                />

                <div
                    id="dialog3"
                    className="speechBubble leftTop"
                    style={{
                        bottom: '2em',
                        right: '2em',
                    }}
                >
                    Well. I don&rsquo;t have a household. <br />
                    Yours is amazing though. <br />
                    I wish I had one like that.
                </div>
            </div>
        </div>
    )

}