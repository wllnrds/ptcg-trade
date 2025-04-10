import Image from "next/image";
import data from "@/db/collection";
  

export default function Page() {
    return (
        <div>
            <h1>Cards</h1>
            <div className="flex flex-col gap-2">
                {data.map(({ colecao, minId, maxId }) => (
                    <div key={colecao} className="flex flex-col gap-2">
                        <h2>{colecao}</h2>
                        <div className="flex gap-2 flex-wrap">
                            {Array.from(
                                { length: maxId - minId + 1 },
                                (_, i) => (
                                    <LoadImage
                                        key={i}
                                        colecao={colecao}
                                        id={`${minId + i}`}
                                    />
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function LoadImage({ colecao, id }: { colecao: string; id: string }) {
    const URL = `/card?colecao=${colecao}&id=${id}`;
    return (
        <Image src={URL} alt={`${colecao}-${id}`} width={215} height={300} />
    );
}
