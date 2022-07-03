import './myLabel.css';

export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
    */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * Si quiere todo capitalizado
    */ 
    allCaps?: boolean;
    /**
     * Colores basicos del label
    */ 
    color?: 'primary'|'secondary'|'tertiary';
    /**
     * Color perzonalizado para la fuente 
    */
    fontColor?: string;
    /**
     * Color perzonalizado para la fuente 
    */
    backgroundColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color   = 'primary',
    label   = 'No Label',
    size    = 'normal',
    fontColor,
    backgroundColor = 'transparent',
}: MyLabelProps) => {
    return (
        <span 
            className={`label ${size} text-${color}`}
            style={{ color: fontColor, backgroundColor }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}