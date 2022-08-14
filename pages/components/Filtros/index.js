import { Filter } from "./style.js"

export default function Filtros() {
    return (
        <>
            <Filter>
                <div class="filtro">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#EDEDED"/>
                        </svg>
                    <span>Ano de puplicação</span>
                </div>
            </Filter>
        </>
    );
}