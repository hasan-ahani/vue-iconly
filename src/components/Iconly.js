import icons  from './../icons';

export default {
        name: 'Iconly',
            props: {
            name: {
                type: String,
                require: true,
                validator: value => {
                    if (icons[value] === undefined) console.error('icon '+value+' from iconly not found!');
                    return true
                }
            },
            type: {
                type: String,
                require: false,
                default: 'outline',
                validator: value => {
                    if (
                        value === 'bold' ||
                        value === 'broken' ||
                        value === 'bulk' ||
                        value === 'light' ||
                        value === 'outline' ||
                        value === 'tone'
                    ){
                        return true
                    }
                    console.error('iconly type invalid!');
                    return false;
                }
            },
            size: {
                type: String,
                require: false,
                default: '24',
                validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
            }
        },
        render(createElement) {
            if (icons[this.name] === undefined || icons[this.name][this.type] === undefined){
                console.error('Iconly problem render icon: invalid name or type!');
                return false
            }
            const size = this.size.slice(-1) === 'x' && this.size.slice(-2) !== 'px'
                ? this.size.slice(0, this.size.length -1) + 'em'
                : parseInt(this.size) + 'px';
            const svg = icons[this.name][this.type];
            return createElement(
                'svg',
                {
                    attrs: {
                        class: `iconly ${this.name}-${this.type}`,
                        width: size,
                        height: size,
                        viewBox: `0 0 24 24`,
                        fill: this.type === 'light' || this.type === 'tone'  ? 'none' : 'currentColor',
                        xmlns: "http://www.w3.org/2000/svg"
                    },
                    domProps: {
                        innerHTML: svg
                    },
                    refInFor: true
                }
            )
        }
    }

