class Asker {
    constructor(can, mermi, hasar) {
        this.can = can
        this.mermi = mermi
        this.hasar = hasar
        this.rutbe = 'er'
    }

    getCan = () => {
        return this.can
    }

    getMermi = () => {
        return this.mermi
    }

    setRutbe = (text) => {
        this.rutbe = text
    }

    getRutbe = () => {
        console.log(this.rutbe)
    }



    atesEt = () => {
        if (this.can == 0) {
            return
        }

        if (this.mermi >= 1) {
            this.mermi--
            console.log('TAK !')
            return this.hasar
        }
        else {
            return 0
        }
    }

    otomatikAtesEt = (mermiSayisi) => {
        if (this.can == 0) {
            return
        }

        if (mermiSayisi > this.mermi) {
            return 0
        }
        else {
            this.mermi -= mermiSayisi
            return this.hasar * mermiSayisi
        }
    }

    vurul = (hasar) => {
        if (hasar > this.can) {
            this.can = 0
        }
        else {
            this.can -= hasar
        }
    }
}

const asker1 = new Asker(100, 20, 5)
const asker2 = new Asker(100, 28, 4)

let bir = 0
let iki = 0

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const healthBar = (health1, health2) => {
    document.getElementById('asker1-yesil').style.width = health1 + 'px'
    document.getElementById('asker1-kirmizi').style.width = (100 - health1) + 'px'

    document.getElementById('asker2-yesil').style.width = health2 + 'px'
    document.getElementById('asker2-kirmizi').style.width = (100 - health2) + 'px'
}


const shootingEffect = () => {
   const ses = new Audio('silah.mp3')
    const ses2 = new Audio('silah.mp3')

    ses.play()

    setTimeout(() => {
        ses2.play()
    }, 150)


    document.getElementById('asker1-img').style.opacity = 0.3
    document.getElementById('asker2-img').style.opacity = 0.3

    setTimeout(() => {
        document.getElementById('asker1-img').style.opacity = 1
        document.getElementById('asker2-img').style.opacity = 1
    }, 200)

}

const deathCheck = () => {
    if (asker1.getCan() == 0){
        document.getElementById('asker1-img').src = 'rip.png'
        document.getElementById('start-button').innerHTML = 'Oyun Bitti'
        document.getElementById('start-button').disabled = true
        document.getElementById('refresh-button').style.display = 'inline'
        iki++
    }
    if (asker2.getCan() == 0){
        document.getElementById('asker2-img').src = 'rip.png'
        document.getElementById('start-button').innerHTML = 'Oyun Bitti'
        document.getElementById('start-button').disabled = true
        document.getElementById('refresh-button').style.display = 'inline'
        bir++
    }
}

const battleStart = () => {
    asker1.vurul(asker2.otomatikAtesEt(randomNumber(1, asker2.getMermi() / 2)))
    asker2.vurul(asker1.otomatikAtesEt(randomNumber(1, asker1.getMermi() / 2)))
}


const savas = () => {
    battleStart()
    healthBar(asker1.getCan(), asker2.getCan())
    shootingEffect()
    deathCheck()
}

const refreshSavas = () => {
    location.reload()
}

