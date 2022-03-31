import { useEffect, useState } from 'react'

import router from 'next/router'

import styles from '../../styles/components/login/styles.module.scss'

export function Login() {
    const [step, setStep] = useState(0)
    const [accountSigned, setAccountSigned] = useState<boolean>(false)

    const [userName, setUserName] = useState('')
    const [passwd, setPasswd] = useState('')
    
    useEffect(() =>  {
        //botão de login sem submit
        if (accountSigned) {
            router.push('/dashboard')
        }

        setUserName("")
        setPasswd("")
    }, [step])

    if (step === 0) {
        return loginWelcomeBox()
    }
    else { 
        return loginProcessBox()
    }

    function loginWelcomeBox() {
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
                                () => setStep(1)
                            }>
                                ENTRAR
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
    function loginProcessBox() {
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
                                    setAccountSigned(true)
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
}