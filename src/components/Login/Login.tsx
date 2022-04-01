import styles from 'styles/components/login/styles.module.scss'

interface LoginProps { 
    userName: string;
    passwd: string;
    setUserName: (value: string) => void;
    setPasswd: (value: string) => void;
    setStep: (value: number) => void;
    setAccountSigned: (value: boolean) => void;
}

export function LoginWelcomeBox({ setStep } : LoginProps) {
    return (
        <div className={styles.container}>
            <div className={styles.boxForDisplayPosition} />
            <div className={styles.boxContent}>
                <div className={styles.box}>
                    <form className={styles.contentPlataform}>
                        <h2>
                            Bem vindo!
                        </h2>               
                        <p>
                            Para acessar a plataforma, continue abaixo:
                        </p>             
                        <button type="button" onClick={
                            () => { 
                                setStep(1)
                            }
                        }>
                            ENTRAR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export function LoginAccountBox({ userName, passwd, setUserName, setPasswd, setStep } : LoginProps) {
    return (
        <div className={styles.container}>
            <div className={styles.boxForDisplayPosition} />
            <div className={styles.boxContent}>
                <div className={styles.box}>
                    <form className={styles.contentLogin}>
                        <h2>
                            Bem vindo!
                        </h2>
                        <input
                            value={userName}
                            placeholder="Nome de usuário"
                            type="text"
                            onChange={(event) => setUserName(event.target.value)}
                        />
                        <input
                            value={passwd}
                            placeholder="Senha"
                            type="password" 
                            onChange={(event) => setPasswd(event.target.value)}
                        />
                        <button type="button" onClick={
                            () => {
                                setStep(2)
                            }
                        }>
                            LOGAR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}