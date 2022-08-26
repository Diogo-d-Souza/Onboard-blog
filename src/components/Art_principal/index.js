import ArtigoPequeno from "../OutrosArtigos";
import { Aside, Div, DivCentroTexto, Main, Retangulo, Seta_area, Div2, Aside2, Comentarios } from "./style";

export default function ArtigoPrincipal() {
    return (
        <>
            <Main>
                <Div>
                    <Seta_area>
                        <button className="back"><svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.75 25.1169V27.2942C46.75 27.8955 46.2743 28.3829 45.6875 28.3829H11.3263L20.7825 38.0504C20.9836 38.2549 21.0968 38.5331 21.0968 38.8234C21.0968 39.1137 20.9836 39.392 20.7825 39.5964L19.2738 41.1205C19.0742 41.3266 18.8027 41.4426 18.5194 41.4426C18.2361 41.4426 17.9645 41.3266 17.765 41.1205L4.7175 27.7732C4.41853 27.4673 4.25037 27.0522 4.25 26.6192V25.7918C4.2549 25.3598 4.42237 24.9464 4.7175 24.6378L17.765 11.2905C17.9645 11.0844 18.2361 10.9685 18.5194 10.9685C18.8027 10.9685 19.0742 11.0844 19.2738 11.2905L20.7825 12.8365C20.9824 13.0371 21.095 13.3118 21.095 13.5986C21.095 13.8853 20.9824 14.16 20.7825 14.3606L11.3263 24.0282H45.6875C46.2743 24.0282 46.75 24.5156 46.75 25.1169Z" fill="#333333" />
                        </svg>
                        </button>
                        <h1>Tecnologia</h1>
                    </Seta_area>
                    <Div2>
                        <main>
                            <Aside2>
                                <h1 className="titulo">Titulo</h1>
                            </Aside2>
                            <Retangulo>
                                <div className="estrela">
                                    <svg width="149" height="23" viewBox="0 0 149 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="stars2">
                                        <path
                                            d="M11.845 1.57547L14.0302 8.10499L14.1444 8.4463H14.5044H21.534L15.8597 12.4488L15.5557 12.6633L15.6738 13.0161L17.8491 19.5159L12.1332 15.484L11.845 15.2807L11.5568 15.484L5.84093 19.5159L8.0162 13.0161L8.13428 12.6633L7.83026 12.4488L2.15601 8.4463H9.18563H9.54556L9.65978 8.10499L11.845 1.57547Z"
                                            fill="#FFF500" stroke="black" />
                                        <path
                                            d="M42.9383 1.57547L45.1235 8.10499L45.2377 8.4463H45.5976H52.6273L46.953 12.4488L46.649 12.6633L46.7671 13.0161L48.9423 19.5159L43.2265 15.484L42.9383 15.2807L42.6501 15.484L36.9342 19.5159L39.1095 13.0161L39.2275 12.6633L38.9235 12.4488L33.2493 8.4463H40.2789H40.6388L40.753 8.10499L42.9383 1.57547Z"
                                            fill="#FFF500" stroke="black" />
                                        <path
                                            d="M74.031 1.57547L76.2163 8.10499L76.3305 8.4463H76.6904H83.72L78.0458 12.4488L77.7418 12.6633L77.8598 13.0161L80.0351 19.5159L74.3192 15.484L74.031 15.2807L73.7428 15.484L68.027 19.5159L70.2022 13.0161L70.3203 12.6633L70.0163 12.4488L64.342 8.4463H71.3717H71.7316L71.8458 8.10499L74.031 1.57547Z"
                                            fill="#FFF500" stroke="black" />
                                        <path
                                            d="M105.124 1.57547L107.31 8.10499L107.424 8.4463H107.784H114.813L109.139 12.4488L108.835 12.6633L108.953 13.0161L111.128 19.5159L105.413 15.484L105.124 15.2807L104.836 15.484L99.1202 19.5159L101.295 13.0161L101.414 12.6633L101.11 12.4488L95.4353 8.4463H102.465H102.825L102.939 8.10499L105.124 1.57547Z"
                                            fill="#FFF500" stroke="black" />
                                        <path
                                            d="M136.218 1.57547L138.403 8.10499L138.517 8.4463H138.877H145.907L140.232 12.4488L139.928 12.6633L140.046 13.0161L142.222 19.5159L136.506 15.484L136.218 15.2807L135.929 15.484L130.213 19.5159L132.389 13.0161L132.507 12.6633L132.203 12.4488L126.529 8.4463H133.558H133.918L134.032 8.10499L136.218 1.57547Z"
                                            fill="#FFF500" stroke="black" />
                                    </svg>
                                </div>
                                <div className="divtema">
                                    <h1>Tema: Lorem Ipsum</h1>
                                </div>

                                <div className="foto">
                                    <img src="./foto1.png" alt="" />
                                </div>

                                <DivCentroTexto><h1 className="texto">Lorem ipsum dolor sit amet. Et illum tenetur et sint quos rem enim quibusdam aut neque amet! Aut
                                    vitae dolorem quaerat vitae et odio voluptatem magnam voluptas et blanditiis impedit. Non dolorum
                                    corrupti sed doloremque repudiandae est voluptate facere eum voluptatum aperiam ut nobis tenetur.
                                    Non accusamus tempore ut voluptate error et blanditiis iste? Est facere quis ut perferendis repellat
                                    et modi ratione et totam quia et atque ullam qui internos enim aut autem impedit. Ea iusto sunt 33
                                    dolores optio et autem dolore quo enim asperiores aut ullam incidunt quo eius natus ut veniam earum.
                                    Et quas minima sed rerum similique id sapiente molestiae et asperiores dolorem? Et beatae optio est
                                    dicta omnis eum corrupti odio.<br /> <br /> Lorem ipsum dolor sit amet. Et illum tenetur et sint quos rem enim quibusdam aut neque amet! Aut
                                    vitae dolorem quaerat vitae et odio voluptatem magnam voluptas et blanditiis impedit. Non dolorum
                                    corrupti sed doloremque repudiandae est voluptate facere eum voluptatum aperiam ut nobis tenetur.
                                    Non accusamus tempore ut voluptate error et blanditiis iste? Est facere quis ut perferendis repellat
                                    et modi ratione et totam quia et atque ullam qui internos enim aut autem impedit. Ea iusto sunt 33
                                    dolores optio et autem dolore quo enim asperiores aut ullam incidunt quo eius natus ut veniam earum.
                                    Et quas minima sed rerum similique id sapiente molestiae et asperiores dolorem? Et beatae optio est
                                    dicta omnis eum corrupti odio.
                                </h1></DivCentroTexto>
                            </Retangulo>
                            <div>
                                <div>
                                    <svg width="149" height="23" viewBox="0 0 149 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="stars2">
                                        <path
                                            d="M11.845 1.57547L14.0302 8.10499L14.1444 8.4463H14.5044H21.534L15.8597 12.4488L15.5557 12.6633L15.6738 13.0161L17.8491 19.5159L12.1332 15.484L11.845 15.2807L11.5568 15.484L5.84093 19.5159L8.0162 13.0161L8.13428 12.6633L7.83026 12.4488L2.15601 8.4463H9.18563H9.54556L9.65978 8.10499L11.845 1.57547Z"
                                            fill="#FFF500" stroke="black" />
                                        <path
                                            d="M42.9383 1.57547L45.1235 8.10499L45.2377 8.4463H45.5976H52.6273L46.953 12.4488L46.649 12.6633L46.7671 13.0161L48.9423 19.5159L43.2265 15.484L42.9383 15.2807L42.6501 15.484L36.9342 19.5159L39.1095 13.0161L39.2275 12.6633L38.9235 12.4488L33.2493 8.4463H40.2789H40.6388L40.753 8.10499L42.9383 1.57547Z"
                                            fill="#FFF500" stroke="black" />
                                        <path
                                            d="M74.031 1.57547L76.2163 8.10499L76.3305 8.4463H76.6904H83.72L78.0458 12.4488L77.7418 12.6633L77.8598 13.0161L80.0351 19.5159L74.3192 15.484L74.031 15.2807L73.7428 15.484L68.027 19.5159L70.2022 13.0161L70.3203 12.6633L70.0163 12.4488L64.342 8.4463H71.3717H71.7316L71.8458 8.10499L74.031 1.57547Z"
                                            fill="#FFF500" stroke="black" />
                                        <path
                                            d="M105.124 1.57547L107.31 8.10499L107.424 8.4463H107.784H114.813L109.139 12.4488L108.835 12.6633L108.953 13.0161L111.128 19.5159L105.413 15.484L105.124 15.2807L104.836 15.484L99.1202 19.5159L101.295 13.0161L101.414 12.6633L101.11 12.4488L95.4353 8.4463H102.465H102.825L102.939 8.10499L105.124 1.57547Z"
                                            fill="#FFF500" stroke="black" />
                                        <path
                                            d="M136.218 1.57547L138.403 8.10499L138.517 8.4463H138.877H145.907L140.232 12.4488L139.928 12.6633L140.046 13.0161L142.222 19.5159L136.506 15.484L136.218 15.2807L135.929 15.484L130.213 19.5159L132.389 13.0161L132.507 12.6633L132.203 12.4488L126.529 8.4463H133.558H133.918L134.032 8.10499L136.218 1.57547Z"
                                            fill="#FFF500" stroke="black" />
                                    </svg>
                                </div>
                                <Comentarios>
                                    <h1>Comentarios:</h1>
                                    <textarea className="comentar" />
                                    <div className="publicar">
                                        <button>Publicar</button>
                                    </div>
                                </Comentarios>
                            </div>
                        </main>
                    </Div2>

                </Div>
                <Aside>
                    <h1>Outros artigos...</h1>
                    <ArtigoPequeno img="terra" title="Titulo1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
                    <ArtigoPequeno img="img1" title="Titulo2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
                    <ArtigoPequeno img="ave" title="Titulo3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
                </Aside>
            </Main >
        </>
    )
}
