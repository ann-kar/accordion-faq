const base = {
    mgs: {
        sm: 24,
        lg: 95
    },
    breakpoints: {
        xsm: '375',
        sm: 400,
        md: 600,
        lg: '800',
        xlg: '927'
    }
};

const styles = {
    mgs: {
        sm: base.mgs.sm,
        lg: base.mgs.lg,
        diff: (base.mgs.lg - base.mgs.sm),
    },
    breakpoints: {
        sm: base.breakpoints.sm,
        md: base.breakpoints.md,
        lg: base.breakpoints.lg,
    },
    fontSizes: {
        lg: 34,
        md: 14,
        sm: 12
    },
    borderRadii: {
        md: 23,
    },
    portrait: {
        w: `calc(100vw - 2 * ${base.mgs.sm}px)`,
        maxW: `calc(${base.breakpoints.sm}px - 2 * ${base.mgs.sm}px)`,
        minH: 480,
        hToW: 1.63,
        imgWToContW: 0.73,
        imgHToW: 0.88
    },
    content: {
        portrait: {
            w: `calc(100vw - 2 * ${base.mgs.sm}px)`,
            maxW: `calc(${base.breakpoints.sm}px - 2 * ${base.mgs.sm}px)`,
            minH: '480px',
            hToW: 1.63,
            imgWToContW: 0.73,
            imgHToW: 0.88
        },
        landscape: {
            width: '67vw',
            wToH: 1.8,
            minH: '330px',
            hToW: 0.555
        }
    },
    landscape: {
        width: '67vw',
        wToH: 1.8,
        minH: 330,
        hToW: 0.555
    },
    media: {
        min_sm: `min-width: ${base.breakpoints.sm}px`,
        max_sm: `max-width: ${base.breakpoints.sm}px`,
        max_md: `max-width: ${base.breakpoints.md}px`,
        min_md: `min-width: ${base.breakpoints.md}px`,
        horizontal: `min-aspect-ratio: 1/1`,
        vertical: `max-aspect-ratio: 1/1`
    },
    roots: {
        1: '14px',
        2: '16px',
        3: '18px',
        4: '20px'
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
    }
};

export {styles};