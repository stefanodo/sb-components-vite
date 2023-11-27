import './MyLabel.css';

interface Props {
    /**
     * Text to display
     */
    label: string;

    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Capitalize all letters
     */
    allCaps?: boolean;

    /**
     * Label Color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

    /**
     * Font Color
     */
    fontColor?: string;

    /**
     * Font Color
     */
    backgroundColor?: string;
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'text-primary',
    fontColor,
    backgroundColor = 'transparent'
}: Props) => {
  return (
    <span className={ `${ size } ${ color } label`}
        style={{ color: fontColor, backgroundColor }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
