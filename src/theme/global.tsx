const base = {
    mgs: {
        sm: 24,
        lg: 95
    },
    breakpoints: {
        xsm: '375',
        sm: '400',
        md: '600',
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
    fontSizes: {
        lg: 34,
        md: 14,
        sm: 12
    },
    vertical: {
        w: `100vw - 2 * ${base.mgs.sm}px`,
        maxW: `${base.breakpoints.sm}px - 2 * ${base.mgs.sm}px`,
        hToW: 1.63,
        imgToContentW: 0.73,
        imgHTow: 0.88
    },
    horizontal: {
        width: '67vw',
        widthToHeight: 1.8,
        heightToWidth: 0.555
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