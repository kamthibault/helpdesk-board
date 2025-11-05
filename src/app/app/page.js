`use client`
import dynamic from `next/dynamic`;
const Board = dynamuc(() => import(`./componentsBoard`), {ssr: false});

export default function Page(){
    return<Board />;
}