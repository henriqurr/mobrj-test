import { useEffect, useState } from 'react'

import router from 'next/router'

import { LoginWelcomeBox, LoginAccountBox } from 'components/Login/Login'

export default function Login() {
    const [step, setStep] = useState(0)
    const [accountSigned, setAccountSigned] = useState<boolean>(false)

    const [userName, setUserName] = useState('')
    const [passwd, setPasswd] = useState('')
    
    useEffect(() => {
        if (step === 2 || accountSigned) {
            if (userName && passwd) {
                setAccountSigned(true)
                router.push('/dashboard')

                setUserName("")
                setPasswd("")
            }
            else {
                alert('Usuário ou senha não podem estar vázios.')

                setStep(1)
                setAccountSigned(false)
            }
        }
    }, [step])

    if (step === 0) {
        return (
            <LoginWelcomeBox 
                userName={ userName }
                passwd={ passwd }
                setUserName={ setUserName }
                setPasswd={ setPasswd }
                setStep={ setStep }
                setAccountSigned={ setAccountSigned }
            />
        )
    }
    else { 
        return (
            <LoginAccountBox 
                userName={ userName }
                passwd={ passwd }
                setUserName={ setUserName }
                setPasswd={ setPasswd }
                setStep={ setStep }
                setAccountSigned={ setAccountSigned }
            />
        )
    }
}