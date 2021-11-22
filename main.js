import string from './style.js'

class Pikachu {
    clockId = undefined
    showString = ''
    n = 0
    timeout = 50
    dict = {
        '.stop': 'stop',
        '.start': 'start',
        '.slow': 'slow',
        '.normal': 'normal',
        '.fast': 'fast',
    }

    speed = {
        '.slow': 100,
        '.normal': 50,
        '.fast': 0,
    }

    constructor() {
        this.style = document.querySelector('.style')
        this.article = document.querySelector('.article')
        this.init()
    }

    init() {
        this.clock()
        for (let key in this.dict) {
            this.bind(key, this.dict[key])
        }
    }

    bind(selectors, handler) {
        const element = document.querySelector(selectors)
        if (selectors === '.start' || selectors === '.stop') {
            element.addEventListener('click', this[handler]?.bind(this))
        } else {
            element.addEventListener('click', () => {
                this.changeSpeed(this.speed[selectors])
            })
        }
    }

    clock() {
        this.clockId = setInterval(() => {
            if (this.n < string.length) {
                this.style.innerHTML = string.substring(0, this.n)
                if (string[this.n] === '\n') {
                    this.showString += '<br />'
                } else if (string[this.n] === ' ') {
                    this.showString += '&nbsp;'
                } else {
                    this.showString += string[this.n]
                }
                this.n++
                this.article.innerHTML = this.showString
                this.article.scrollTo(0,9999)
            }
        }, this.timeout)
    }

    stop() {
        window.clearInterval(this.clockId)
    }

    start() {
        this.clock();
    }

    changeSpeed(speed) {
        this.timeout = speed
        this.stop()
        this.clock()
    }
}

new Pikachu()