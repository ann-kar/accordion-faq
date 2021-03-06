const styles = {
    mgs: {
        xsm: 20,
        sm: 24,
        lg: 95
    },
    breakpoints: {
        xsm: 375,
        sm: 400,
        md: 620,
        lg: 800,
        xlg: 1200,
        xxlg: 1440,
        xxxlg: 1500
    },
    colors: {
        accent: '#F47B56',
        bgUpper: '#B068E9',
        bgLower: '#6463E7',
        contentBg: '#FFF',
        font: '#4B4C5F',
        fontLarge: '#1E1F36',
        fontSmall: '#787887',
        spacer: '#E8E8EA',
    },
    fontSizes: {
        sm: 12,
        md: 14,
        lg: 32
    },
    borderRadii: {
        md: 23,
    },
    ratios: {
        imgHToW: 0.88,
        portrait: {
            contentHToW: 1.63,
            imgWToContentW: 0.73,
        },
        landscape: {
            illustration: 0.4,
            faq: 0.6,
            contentWToH: 1.8,
            contentHToW: 0.555,
            imgWToContentW: 1.2,
        }
    },
    media: {
        horizontal: `min-aspect-ratio: 1/1`,
        vertical: `max-aspect-ratio: 1/1`
    }
};

const helpers = {
    portrait: {
        contentW: `calc(100vw - 2 * ${styles.mgs.sm}px)`,
        maxContentW: `calc(${styles.breakpoints.sm}px - 2 * ${styles.mgs.sm}px)`,
        minContentH: '480px',  
        get imgWidth() {
            return `calc(${this.contentW} * ${styles.ratios.portrait.imgWToContentW})`;
        },
        get maxImgWidth() {
            return `calc(${this.maxContentW} * ${styles.ratios.portrait.imgWToContentW})`
        },
        get imgHeight() {
            return `calc(${this.contentW} * 
            ${styles.ratios.portrait.imgWToContentW} *
            ${styles.ratios.imgHToW})`
        },
        get maxImgHeight() {
            return `calc(${this.maxContentW} * 
            ${styles.ratios.portrait.imgWToContentW} * 
            ${styles.ratios.imgHToW})`
        },
    },
    landscape: {
        contentW: '67vw',
        minContentH: '310px',
        get imgHeight() {
            return `calc(${this.contentW} * 
                ${styles.ratios.landscape.illustration} * 
                ${styles.ratios.landscape.imgWToContentW} * 
                ${styles.ratios.imgHToW})`},
      breakpoint: (styles.breakpoints.xxlg - ((styles.mgs.lg - styles.mgs.sm) * 4)),
      imgTransform: 'translate(0, -10%)',    
    },
}

export {styles, helpers};
