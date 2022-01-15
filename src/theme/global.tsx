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

const s = {
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
    borderRadiuses: {
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
        min_md: `min-width: ${base.breakpoints.md}px`  
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

export default s;