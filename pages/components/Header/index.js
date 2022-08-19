import { useRouter } from 'next/router';
import { Div, Linha_Branca, Cabecalho } from "./style";

export default function Header() {
    const router = useRouter();
    return (
        <>
            {/* 
            <Div className="partecima">
                <div className="nome">
                <h1>Nome do blog</h1>
                </div>
                <div>
                <svg width="70" height="70" viewBox="0 0 95 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="foto">
                    <path d="M95 40.5C95 62.8675 73.7335 81 47.5 81C21.2665 81 0 62.8675 0 40.5C0 18.1325 21.2665 0 47.5 0C73.7335 0 95 18.1325 95 40.5Z" fill="#D9D9D9" />
                </svg>
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="usuario">
                    <path d="M37.7119 29.4506C40.4213 27.3307 42.3989 24.4236 43.3696 21.1338C44.3403 17.844 44.2558 14.3351 43.1279 11.0953C42 7.85543 39.8848 5.04578 37.0765 3.0572C34.2682 1.06862 30.9064 0 27.459 0C24.0116 0 20.6499 1.06862 17.8416 3.0572C15.0333 5.04578 12.918 7.85543 11.7901 11.0953C10.6622 14.3351 10.5777 17.844 11.5484 21.1338C12.5191 24.4236 14.4967 27.3307 17.2061 29.4506C12.5635 31.3004 8.51271 34.3685 5.4855 38.3278C2.45829 42.2871 0.568178 46.9891 0.0166695 51.9327C-0.0232516 52.2936 0.00870079 52.6588 0.110701 53.0075C0.212702 53.3561 0.382754 53.6814 0.611147 53.9646C1.07241 54.5368 1.74331 54.9032 2.47626 54.9834C3.2092 55.0636 3.94416 54.8509 4.51944 54.3922C5.09472 53.9335 5.4632 53.2662 5.54383 52.5373C6.15067 47.1647 8.7266 42.2028 12.7795 38.5995C16.8324 34.9963 22.078 33.0044 27.5143 33.0044C32.9505 33.0044 38.1962 34.9963 42.2491 38.5995C46.302 42.2028 48.8779 47.1647 49.4847 52.5373C49.5599 53.2127 49.8839 53.8364 50.3942 54.2881C50.9046 54.7398 51.5651 54.9875 52.2483 54.9834H52.5523C53.2767 54.9005 53.9389 54.5362 54.3944 53.9699C54.8499 53.4036 55.062 52.6812 54.9843 51.9602C54.4301 47.0026 52.5299 42.2884 49.4871 38.3231C46.4443 34.3577 42.3738 31.2906 37.7119 29.4506ZM27.459 27.4993C25.2727 27.4993 23.1354 26.8545 21.3176 25.6465C19.4997 24.4385 18.0828 22.7215 17.2462 20.7127C16.4095 18.7039 16.1906 16.4934 16.6171 14.3608C17.0436 12.2283 18.0965 10.2694 19.6424 8.7319C21.1884 7.19441 23.1581 6.14737 25.3024 5.72318C27.4468 5.29898 29.6694 5.51669 31.6893 6.34878C33.7092 7.18086 35.4357 8.58995 36.6503 10.3978C37.865 12.2057 38.5133 14.3313 38.5133 16.5056C38.5133 19.4213 37.3487 22.2176 35.2756 24.2793C33.2025 26.341 30.3908 27.4993 27.459 27.4993Z" fill="black" />
                </svg>

                </div>
            </Div>
            <Linha_Branca className="linha_branca"></Linha_Branca>
            <Div className="partebaixo">
                <input className="pesquisa" placeholder="Pesquisar" />
                <button className="lupa">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.3741 32.1258L28.5 26.2991C30.7801 23.4561 31.8843 19.8475 31.5856 16.2154C31.2868 12.5832 29.6078 9.20354 26.8937 6.77132C24.1796 4.33911 20.6368 3.03919 16.9938 3.13888C13.3507 3.23857 9.88428 4.73028 7.30728 7.30728C4.73028 9.88428 3.23857 13.3507 3.13888 16.9938C3.03919 20.6368 4.33911 24.1796 6.77132 26.8937C9.20354 29.6078 12.5832 31.2868 16.2154 31.5856C19.8475 31.8843 23.4561 30.7801 26.2991 28.5L32.1258 34.3266C32.273 34.475 32.4481 34.5928 32.6411 34.6732C32.834 34.7536 33.041 34.795 33.25 34.795C33.459 34.795 33.6659 34.7536 33.8589 34.6732C34.0518 34.5928 34.2269 34.475 34.3741 34.3266C34.6595 34.0314 34.819 33.6368 34.819 33.2262C34.819 32.8156 34.6595 32.421 34.3741 32.1258ZM17.4166 28.5C15.2246 28.5 13.0817 27.8499 11.2591 26.6321C9.43642 25.4142 8.01584 23.6833 7.17697 21.658C6.3381 19.6328 6.11861 17.4043 6.54627 15.2544C6.97392 13.1044 8.02951 11.1296 9.57954 9.57954C11.1296 8.0295 13.1044 6.97392 15.2544 6.54627C17.4043 6.11861 19.6328 6.3381 21.658 7.17697C23.6833 8.01584 25.4142 9.43642 26.6321 11.2591C27.8499 13.0817 28.5 15.2246 28.5 17.4166C28.5 20.3561 27.3323 23.1752 25.2537 25.2537C23.1752 27.3323 20.3561 28.5 17.4166 28.5Z" fill="black" />
                    </svg>
                </button>
            </Div> */}
            <Cabecalho>
                <div className="header_sup">
                    <h1>NOME DO BLOG</h1>
                    <button className="botao-login" onClick={() => router.push('../../login')}>Logar</button>
                    <button className="botao-cadastro" onClick= {() => router.push('../../cadastro')}>Cadastrar</button>
                </div>
                <div className="linha_branca"></div>
                <div className="header_inf">
                    <div className="search">
                        <input className="pesquisar" placeholder="Pesquisar"/>
                        <button className="botao_lupa">
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.3741 32.1258L28.5 26.2991C30.7801 23.4561 31.8843 19.8475 31.5856 16.2154C31.2868 12.5832 29.6078 9.20354 26.8937 6.77132C24.1796 4.33911 20.6368 3.03919 16.9938 3.13888C13.3507 3.23857 9.88428 4.73028 7.30728 7.30728C4.73028 9.88428 3.23857 13.3507 3.13888 16.9938C3.03919 20.6368 4.33911 24.1796 6.77132 26.8937C9.20354 29.6078 12.5832 31.2868 16.2154 31.5856C19.8475 31.8843 23.4561 30.7801 26.2991 28.5L32.1258 34.3266C32.273 34.475 32.4481 34.5928 32.6411 34.6732C32.834 34.7536 33.041 34.795 33.25 34.795C33.459 34.795 33.6659 34.7536 33.8589 34.6732C34.0518 34.5928 34.2269 34.475 34.3741 34.3266C34.6595 34.0314 34.819 33.6368 34.819 33.2262C34.819 32.8156 34.6595 32.421 34.3741 32.1258ZM17.4166 28.5C15.2246 28.5 13.0817 27.8499 11.2591 26.6321C9.43642 25.4142 8.01584 23.6833 7.17697 21.658C6.3381 19.6328 6.11861 17.4043 6.54627 15.2544C6.97392 13.1044 8.02951 11.1296 9.57954 9.57954C11.1296 8.0295 13.1044 6.97392 15.2544 6.54627C17.4043 6.11861 19.6328 6.3381 21.658 7.17697C23.6833 8.01584 25.4142 9.43642 26.6321 11.2591C27.8499 13.0817 28.5 15.2246 28.5 17.4166C28.5 20.3561 27.3323 23.1752 25.2537 25.2537C23.1752 27.3323 20.3561 28.5 17.4166 28.5Z" fill="black"/>
                            </svg> 
                        </button>
                    </div>
                </div>
            </Cabecalho>
        </>
    );
}