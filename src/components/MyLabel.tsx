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
}

export const MyLabel = ({
    allCaps = false,
    color   = 'primary',
    fontColor,
    label   = 'No Label',
    size    = 'normal',
}: MyLabelProps) => {
    return (
        <span 
            className={`label ${size} text-${color}`}
            style={{ color: fontColor}}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}