import { type ReactNode } from "react";

//Discriminated Union - conditionally renered with one of type
type HintBoxProps = {
    mode: "hint";
    children: ReactNode;
 }

 type WarningBoxProps = {
    mode: "warning";
    severity: "low" | "medium" | "high";
    children: ReactNode;
 }

type InfoBoxPrpops = HintBoxProps | WarningBoxProps

// type InfoBoxPrpops = {
//     mode: "hint" | 'warning'; // literal Type => two specific type not string
//     severity?: "low" | "medium" | "high";  // add undefined or ? optional
//     children: ReactNode;
// };

export default function InfoBox(props : InfoBoxPrpops) {  // info , warning
    const { mode, children } = props
    if( mode == "hint") {
    return (
        <aside className="infobox infobox-hint">
            <p>{children}</p>
        </aside>
    )        
    }
    const { severity } = props

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}