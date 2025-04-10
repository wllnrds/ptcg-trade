import { TCard, TData } from "@/types";

const BASE_URL = "https://ptcg-trade.vercel.app/";

export function Screen({ name, id, have, want }: Omit<TData, "icon">) {
    return (
        <div
            style={{
                backgroundColor: "transparent",
                background:
                    "linear-gradient(180deg, #EBF2F8 0%, #C5DBE9 100%) 0% 0% no-repeat padding-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%",
                padding: "72px",
                gap: "36px",
                fontFamily: "Open Sans",
            }}
        >
            <Icone iconeId="mew" />
            <Profile displayName={name} friendId={id} />
            <div
                style={{
                    display: "flex",
                    flex: "1",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <Block title="Tenho" cards={have} />
                <Block title="Preciso" cards={want.slice(0, 4)} />
            </div>
            <Logo />
        </div>
    );
}

function Icone({ iconeId }: { iconeId: string }) {
    return (
        <figure
            style={{
                display: "flex",
                padding: "20px",
                background: "#E5EFF8 0% 0% no-repeat ",
                boxShadow: "inset 0px 0px 12px #0000004D",
                borderRadius: "1000px",
            }}
        >
            <img
                src={`https://www.serebii.net/tcgpocket/icon/${iconeId}.png`}
                alt="icone"
                width={216}
                height={216}
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
                flexDirection: "column",
            }}
        >
            <img
                src="https://ptcgphub.com/wp-content/themes/ptcgphub/images/logo.png"
                height={128}
            />
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
                marginTop: "24px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    fontSize: "40px",
                    lineHeight: "50px",
                    fontWeight: "bold",
                    color: "#3D434F",
                    textAlign: "center",
                }}
            >
                {displayName}
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "48px",
                    fontSize: "32px",
                    lineHeight: "43px",
                    color: "#6F7B89",
                    textAlign: "center",
                }}
            >
                <span>ID de amigo</span>
                <span style={{ fontWeight: "bold" }}>{friendId}</span>
            </div>
        </div>
    );
}

function HeadLine({ text }: { text: string }) {
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
            <div
                style={{
                    background:
                        "linear-gradient(90deg, #FEDCF5 0%, #FDFFC7 50%, #9BFFF1 100%) 0% 0% no-repeat padding-box",
                    height: "8px",
                    display: "flex",
                    borderRadius: "100px",
                    flex: "1",
                }}
            ></div>
            <div
                style={{
                    fontSize: "40px",
                    lineHeight: "50px",
                    fontWeight: "bold",
                    color: "#6F7B89",
                    textAlign: "center",
                }}
            >
                {text as string}
            </div>
            <div
                style={{
                    background:
                        "linear-gradient(270deg, #FEDCF5 0%, #FDFFC7 50%, #9BFFF1 100%) 0% 0% no-repeat padding-box",
                    height: "8px",
                    display: "flex",
                    borderRadius: "100px",
                    flex: "1",
                }}
            ></div>
        </div>
    );
}

function Block({ title, cards }: { title: string; cards: TCard[] }) {
    let baseWidth = "215px";
    let baseHeight = "300px";

    if (cards.length <= 3) {
        baseWidth = "280px";
        baseHeight = "390px";
    }

    const showPlus = cards.length > 8;

    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                marginTop: "24px",
                flexDirection: "column",
                width: "100%",
            }}
        >
            <HeadLine text={title} />
            <div
                style={{
                    display: "flex",
                    gap: "24px",
                    flexFlow: "row wrap",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
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