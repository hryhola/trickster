import { StarsBackground } from './bg-types/stars/StarsBackground'

export type AnimationType = 'stars'

interface Props {
    type: AnimationType
}

export const AnimatedBackground: React.FC<Props> = (props) => {
    if (props.type === 'stars') {
        return <StarsBackground />
    }

    throw new Error('Unknown background type!')
}
