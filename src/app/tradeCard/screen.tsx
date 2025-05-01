/* eslint-disable @typescript-eslint/no-explicit-any */
import { TCard, TData } from "@/types";

const BASE_URL = "https://ptcg-trade.vercel.app";
// const BASE_URL = "http://localhost:3000"

export function Screen({ name, id, have, want, backgroundId }: Omit<TData, "icon">) {
    let backgroundTheme : any = {
        backgroundColor: "#1E3771",
        background: "linear-gradient(180deg, #111828 0%, #1E3771 100%) 0% 0% no-repeat padding-box",
    };

    if (backgroundId) {
        backgroundTheme = {
            backgroundColor: "#1E3771",
        };
    }

    return (
        <div
            style={{
                ...backgroundTheme,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%",
                fontFamily: "Open Sans",
            }}
        >

            { backgroundId && <img src={`${ BASE_URL }/bg/${ backgroundId }.png`} style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -2,
            }} /> }

            { backgroundId && <img src={`${ BASE_URL }/bg/base.png`} style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
            }} /> }


            <div style={{
                display: "flex",
                width: "100%",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                padding: "50px",
                justifyContent: "space-around"
            }}>
                <div style={{ 
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    width: "100%",
                    }}>
                    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                        <Icone iconeId="mew" />
                        <Profile displayName={name} friendId={id} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Logo />
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        gap: "48px",
                    }}
                >
                    <Block title="Preciso" cards={want.slice(0, 4)} color="#2D84DB"/>
                    <Block title="Tenho" cards={have} />
                </div>                
            </div>
        </div>
    );
}

function Icone({ iconeId }: { iconeId: string }) {
    return (
        <figure
            style={{
                display: "flex",
                padding: "0px",
                background: "#E5EFF8 0% 0% no-repeat ",
                boxShadow: "inset 0px 0px 12px #0000004D",
                borderRadius: "1000px",
            }}
        >
            <img
                src={`https://www.serebii.net/tcgpocket/icon/${iconeId}.png`}
                alt="icone"
                width={96}
                height={96}
                className="rounded-full"
            />
        </figure>
    );
}

function Logo() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
            }}
        >
            <img
                src="https://ptcgphub.com/wp-content/themes/ptcgphub/images/logo.png"
                width={135}
            />
            <div style={{ width: "1px", background: "#6F7B89", margin: "0 1rem" }}>&nbsp;</div>
            <div
                style={{
                    display: "flex",
                    alignContent: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    fontSize: "20px",
                    lineHeight: "1.2",
                    color: "#FFFFFF",
                    fontWeight: 300,
                }}
            >
                <div style={{
                    display: "flex",
                    gap: "8px",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <img src={`${ BASE_URL }/icons/google-play.png`} width="24px" height="24px" />
                    <span>ptcghub</span>
                </div>
                <div style={{
                    display: "flex",
                    gap: "8px",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <img src={`${ BASE_URL }/icons/browser.png`} width="24px" height="24px" />
                    <span>https://ptcgphub.com</span>
                </div>
            </div>
        </div>
    );
}

function Profile({
    displayName,
    friendId,
}: {
    displayName: string;
    friendId: string;
}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                height: "100%",
                justifyContent: "center",
                fontFamily: "Open Sans",
            }}
        >
            <div
                style={{
                    display: "flex",
                    fontSize: "24px",
                    lineHeight: "1.2",
                    color: "#FFFFFF",
                    fontWeight: 300
                }}
            >
                <span>ID:{" "}{friendId}</span>
            </div>
            <div
                style={{
                    display: "flex",
                    fontSize: "24px",
                    lineHeight: "1.2",
                    fontWeight: "bold",
                    color: "#FFFFFF"
                }}
            >
                {displayName}
            </div>
        </div>
    );
}

function HeadLine({ text, color = "#14B483" }: { text: string, color?: string }) {
    return (
        <div
            style={{
                display: "flex",
                gap: "32px",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
            }}
        >
            {/* <div
                style={{
                    background:
                        "linear-gradient(90deg, #FEDCF5 0%, #FDFFC7 50%, #9BFFF1 100%) 0% 0% no-repeat padding-box",
                    height: "8px",
                    display: "flex",
                    borderRadius: "100px",
                    flex: "1",
                }}
            ></div> */}
            <div
                style={{
                    fontSize: "32px",
                    lineHeight: "1",
                    fontWeight: "bold",
                    color: color,
                    flex: "1",
                    marginBottom: "24px",
                    textAlign: "center",
                }}
            >
                {text as string}
            </div>
            {/* <div
                style={{
                    background:
                        "linear-gradient(270deg, #FEDCF5 0%, #FDFFC7 50%, #9BFFF1 100%) 0% 0% no-repeat padding-box",
                    height: "8px",
                    display: "flex",
                    borderRadius: "100px",
                    flex: "1",
                }}
            ></div> */}
        </div>
    );
}

function Block({ title, cards, color = "#14B483" }: { title: string; cards: TCard[], color?: string }) {
    let baseWidth = "215px";
    let baseHeight = "300px";

    if (cards.length <= 3) {
        baseWidth = "280px";
        baseHeight = "390px";
    }

    // const showPlus = cards.length > 7; // Show the plus icon if there are more than 7 cards
    const showPlus = false;

    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                padding: "24px",
                flexDirection: "column",
                width: "100%",
                border: "1px solid",
                borderColor: color,
                borderRadius: "24px",
                backgroundColor: `${color}1F`,
            }}
        >
            <HeadLine text={title} color={color} />
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {cards.slice(0, showPlus ? 7 : 8).map((card) => {
                    return (
                        <div
                            key={card.id}
                            style={{
                                display: "flex",
                                backgroundColor: "#E6EFF8",
                                borderRadius: "14px",
                                width: baseWidth,
                                minWidth: baseWidth,
                                flexBasis: baseWidth,
                                height: baseHeight,
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 0px 12px #0000000F",
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            <img
                                src={`${BASE_URL}/card?colecao=${card.colecao}&id=${card.id}`}
                                width={baseWidth}
                                height={baseHeight}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                }}
                                alt="card"
                            />
                        </div>
                    );
                })}
                {showPlus && (
                    <div
                        style={{
                            display: "flex",
                            width: baseWidth,
                            minWidth: baseWidth,
                            flexBasis: baseWidth,
                            height: baseHeight,
                            backgroundColor: "#E6EFF8",
                            borderRadius: "14px",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "40px",
                            color: "#AFB9C5",
                        }}
                    >
                        +{cards.length - 7}
                    </div>
                )}
            </div>
        </div>
    );
}