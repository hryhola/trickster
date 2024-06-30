import styles from './svg-stars-background.module.scss'

const getRandomFloat = (min: number, max: number) =>
    Math.random() * (max - min) + min
const getRandomInt = (min: number, max: number) =>
    Math.ceil(getRandomFloat(min, max))

function weightedRandom(weight: number) {
    // Weight defines the bias towards lower numbers (higher weight = more bias)
    if (weight <= 0) {
        throw new Error('Weight must be a positive number')
    }

    const randomNumber = Math.random()
    const weightedChance = Math.pow(randomNumber, weight)
    return Math.floor(weightedChance * 100) + 1
}

export const SvgStarsBackground = () => {
    const stars: { c: JSX.Element; speed: number }[] = []

    const starsAmount = 1000

    for (let i = 0; i < starsAmount; i++) {
        const isOverflowByX = Math.random() > 0.5
        const isOverflowToNegative = Math.random() > 0.5

        const toX = isOverflowByX
            ? isOverflowToNegative
                ? '-5%'
                : '105%'
            : getRandomInt(0, 100) + '%'

        const toY = isOverflowByX
            ? getRandomInt(0, 100) + '%'
            : isOverflowToNegative
              ? '-5%'
              : '105%'

        const begin = getRandomInt(0, starsAmount * 1000) + 'ms'

        const speed = weightedRandom(5)

        const duration = Math.ceil((100 - speed * 0.25) * 100) + 'ms'

        // const rgbValue = Math.ceil(Math.min(255, 255 * (speed / 25)))

        stars.push({
            speed,
            c: (
                <circle
                    cx="50%"
                    cy="50%"
                    r="1"
                    opacity={0}
                    fill="var(--text-accent)"
                >
                    <animate
                        attributeName="r"
                        begin={begin}
                        dur={duration}
                        from={1}
                        to={(4 * speed) / 100}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        begin={begin}
                        dur={duration}
                        from={0}
                        to={speed / 10}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cx"
                        begin={begin}
                        dur={duration}
                        from="50%"
                        to={toX}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cy"
                        begin={begin}
                        dur={duration}
                        from="50%"
                        to={toY}
                        repeatCount="indefinite"
                    />
                </circle>
            ),
        })
    }

    stars.sort((a, b) => a.speed - b.speed)

    return (
        <div className={styles.canvas}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                {stars.map((s) => s.c)}
            </svg>
        </div>
    )
}
