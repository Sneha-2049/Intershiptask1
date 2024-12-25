export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            transform: direction === 'left' ? 'translateX(80px)' : direction === 'right' ? 'translateX(-80px)' : 'translateX(0)',
        },
        show: {
            y: 0,
            transform: 'translateX(0)',
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1,
            }
        }
    }
}
export const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1 }
    }
};
export const scaleDown = {
    hidden: { scale: 1.2, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1 }
    }
};


export const fadeUp = {
    hidden: { opacity: 0, y: 45 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.25 }
    }

}